import React from 'react'

function MenuItems({name,price,description}) {   
  return (

    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{price}</p>
        <p class="card-text">{description}</p>
      </div>
    </div>
    </div>

  
  )
}

export default MenuItems
