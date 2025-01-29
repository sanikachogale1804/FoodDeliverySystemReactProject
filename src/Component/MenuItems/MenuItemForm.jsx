import React, { useEffect, useState } from 'react'
import { addMenuItem, getMenuItems, updateMenuItem, uploadProductImage } from '../Services/MenuItemsService'

import menu from '../CSS/MenuItems.css'
import MenuItems from './MenuItems';
import Menu from './Menu';
import MenuItemAdmin from './MenuItemAdmin';
import MenuAdmin from './MenuAdmin';
import { data } from 'react-router-dom';


function MenuItemForm({selectedMenuItem,setSelectedMenuItem,onAddMenuItem}) {
    const [Item, setItem] = useState(null);
    let [menuitems, setMenuItems] = useState([]);
    let [showForm,setShowForm]=useState(true);

    let [menuItem,setMenuItem]=useState({id: "", name: "", price: "", description:""})

    const submitHandler = (e) => {
        e.preventDefault();
        addMenuItem({
            name: e.target.name.value,
            price: e.target.price.value,
            description: e.target.description.value
        }).then((data) => {
            uploadProductImage(data._links.self.href, e.target.menuItemsImage.files[0])
            setItem(data)
        })
    }

    useEffect(()=>{
        if(selectedMenuItem)
            setMenuItem(selectedMenuItem)
    },[selectedMenuItem])


    const handleChange=(e)=>{
        console.log(e.target);
        let{name,value}=e.target;
        console.log(name+ " "+value);
        setMenuItem((prevMenuItem)=>{
            console.log(menuItem)
            return{...prevMenuItem,[name]:value}

        })
    }

    const updateHandler=(e)=>{
        e.preventDefault();
        updateMenuItem(selectedMenuItem._links.self.href,{
            // id:e.target.id.value,
            name:e.target.name.value,
            price:e.target.price.value,
            description:e.target.description.value
        }).then(data=>{
            onAddMenuItem();
            setMenuItem({id: "",name: "", price: "", description: ""});
            setSelectedMenuItem(null);
        })

    }

    return (
    <div>

        <button className='btn btn-primary mb-3' onClick={()=>{setShowForm((prev)=>!prev) }}>Add Menu</button>
        { showForm?<form onSubmit={selectedMenuItem?updateHandler:submitHandler} className='w-3 border border-dark p-4'>
                <h2>Add Menu Items</h2>

                <div className="form-group">
                    <label>Item Id</label>
                    <input type="number" id="itemId" className="form-control" placeholder="Enter Item ID" 
                    value={menuItem.id}/>
                </div>

                <div className="form-group">
                    <label>Item Name</label>
                    <input type="text" id="itemName" className="form-control" placeholder="Enter Item Name" name="name" 
                    value={menuItem.name} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Item Price</label>
                    <input type="number" id="itemPrice" className="form-control" placeholder="Enter Item Price" name="price" 
                    value={menuItem.price} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label >Item Description</label>
                    <input type="text" id="itemDescription" className="form-control" placeholder="Enter Item Description" name="description" 
                    value={menuItem.description} onChange={handleChange}/>
                </div>
                {/* Product Image */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">MenuItem Image</label>
                    <input type="file" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='menuItemsImage'
                    />
                </div>
             
                <button type="submit" className="btn-submit">{selectedMenuItem?"Update":"Submit"}</button>

            </form>:<></>}
            
        </div>
   
        

    )
}

export default MenuItemForm
