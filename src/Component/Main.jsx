import React from 'react'
import MenuItems from './MenuItems/MenuItems'

import main from './CSS/Main.css'
import { useNavigate } from 'react-router-dom'


function Main() {
  const navigate=useNavigate();
  return (
    <div>
      
    {/* main  */}
    <div class="main">
        <div class="main-overlay"></div>
        <div class="main-text">
            <h1 class="display-3 fw-bold">Delicious Food, Delivered Fast!</h1>
            <p class="lead">Choose your favorite food and get it delivered in minutes</p>
            <a href="#" class="btn btn-primary btn-lg" onClick={()=>{navigate(`/menu`)}}>Browse Menu</a>
        </div>
    </div>

    </div>
  )
}

export default Main
