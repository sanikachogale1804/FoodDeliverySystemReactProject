import React, { useState } from 'react'
import { addMenuItem } from './MenuItemsService'

function MenuItemForm(menuItem_link) {
    const[Item,setItem]=useState(null);
    const submitHandler=(e)=>{
        e.preventDefault();
        addMenuItem({
            
            name:e.target.name.value,
            price:e.target.price.value,
            description:e.target.description.value
        }).then((data)=>{
            setItem(data)
        })   
    }

    const onSelectUpdate=(link)=>{
     console.log(link)
    }

    return (

            <div className="container">
            <form onSubmit={submitHandler}>
                <h2>Add Menu Items</h2>
                
                <div className="form-group">
                    <label htmlFor="itemId">Item Id</label>
                    <input type="number" id="itemId" className="form-control" placeholder="Enter Item ID" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="itemName">Item Name</label>
                    <input type="text" id="itemName" className="form-control" placeholder="Enter Item Name" name="name"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="itemPrice">Item Price</label>
                    <input type="number" id="itemPrice" className="form-control" placeholder="Enter Item Price" name="price"/>
                </div>

                <div className="form-group">
                    <label htmlFor="itemDescription">Item Description</label>
                    <input type="text" id="itemDescription" className="form-control" placeholder="Enter Item Description" name="description"/>
                </div>
                
                <button type="submit" className="btn-submit">Submit</button>
                {/* Update button */}
                <button type="submit" className="btn-danger" onClick={()=>{onSelectUpdate(menuItem_link)}}>Update</button>
            </form>
        </div>
     
    )
}

export default MenuItemForm
