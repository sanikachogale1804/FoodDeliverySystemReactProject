import React, { useState } from 'react'
import { addMenuItem, uploadProductImage } from '../Services/MenuItemsService'

import menu from '../CSS/MenuItems.css'
import MenuItems from './MenuItems';
import Menu from './Menu';
import MenuItemAdmin from './MenuItemAdmin';
import MenuAdmin from './MenuAdmin';


function MenuItemForm(menuItem_link) {
    const [Item, setItem] = useState(null);
    let [menuitems, setMenuItems] = useState([]);
    let [showForm,setShowForm]=useState(false);
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

    const onSelectUpdate = (link) => {
        console.log(link)
    }

    return (



    <div>

        <button className='btn btn-primary mb-3' onClick={()=>{setShowForm((prev)=>!prev)}}>Add Menu</button>
        { showForm?<form onSubmit={submitHandler} className='w-3 border border-dark p-4'>
                <h2>Add Menu Items</h2>

                <div className="form-group">
                    <label htmlFor="itemId">Item Id</label>
                    <input type="number" id="itemId" className="form-control" placeholder="Enter Item ID" />
                </div>

                <div className="form-group">
                    <label htmlFor="itemName">Item Name</label>
                    <input type="text" id="itemName" className="form-control" placeholder="Enter Item Name" name="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="itemPrice">Item Price</label>
                    <input type="number" id="itemPrice" className="form-control" placeholder="Enter Item Price" name="price" />
                </div>

                <div className="form-group">
                    <label htmlFor="itemDescription">Item Description</label>
                    <input type="text" id="itemDescription" className="form-control" placeholder="Enter Item Description" name="description" />
                </div>
                {/* Product Image */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">MenuItem Image</label>
                    <input type="file" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='menuItemsImage'
                    />
                </div>
             
                <button type="submit" className="btn-submit">Submit</button>

            </form>:<></>}
            
        </div>
   
        

    )
}

export default MenuItemForm
