import React from 'react'
import { ToastContainer } from 'react-toastify'
import MenuItemForm from '../MenuItems/MenuItemForm'
import { useParams } from 'react-router-dom'

function RestuarantItemForm() {

    const {id}=useParams();
   
    return (

        <div>
            <MenuItemForm restaurantId={id}/>
        </div>
       
    )
}

export default RestuarantItemForm
