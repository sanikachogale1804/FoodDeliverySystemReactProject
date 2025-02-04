import React from 'react'
import { ToastContainer } from 'react-toastify'
import MenuItemForm from '../MenuItems/MenuItemForm'

function RestuarantItemForm() {

    
    return (

        <div>
            <MenuItemForm/>
        </div>
        // <div>
        //     <button className='btn btn-primary mb-3'>Add Menu</button>

             
        //         <form  className='w-3 border border-dark p-4'>
        //             <h2></h2>

        //             <div className="form-group">
        //                 <label>Item Name</label>
        //                 <input
        //                     type="text"
        //                     id="itemName"
        //                     className="form-control"
        //                     placeholder="Enter Item Name"
        //                     name="name"
                            
        //                 />
        //             </div>

        //             <div className="form-group">
        //                 <label>Item Price</label>
        //                 <input
        //                     type="number"
        //                     id="itemPrice"
        //                     className="form-control"
        //                     placeholder="Enter Item Price"
        //                     name="price"
                           
                            
        //                 />
        //             </div>

        //             <div className="form-group">
        //                 <label>Item Description</label>
        //                 <input
        //                     type="text"
        //                     id="itemDescription"
        //                     className="form-control"
        //                     placeholder="Enter Item Description"
        //                     name="description"
                            
        //                 />
        //             </div>

        //             {/* Product Image */}
        //             <div className="mb-3">
        //                 <label className="form-label">Menu Item Image</label>
        //                 <input
        //                     type="file"
        //                     className="form-control"
        //                     name="menuItemsImage"
        //                 />
        //             </div>

        //             <button type="submit" className="btn-submit">
        //                Submit
        //             </button>
        //         </form>
            

        //     <ToastContainer />
        // </div>
    )
}

export default RestuarantItemForm
