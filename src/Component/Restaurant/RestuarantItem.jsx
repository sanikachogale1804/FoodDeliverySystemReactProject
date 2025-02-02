import React from 'react'

function RestuarantItem({name,address,phoneNumber}) {
  return (
    <div className="RestuarantItem-container col-md-4 mb-4">
      <div className="Restaurant-card menu-card ">
        <div className="card-body">
          <h5 className="card-title restuarant-name">{name}</h5>
          <p className="card-text resturant-address">{address}</p>
          <p className="card-text resturant-price">{phoneNumber}</p>
          <button href="#" className="btn btn-primary btn-lg menu-btn">See MenuItems</button>
          <button href="#" className="btn btn-primary btn-lg menu-btn">Add MenuItems</button>
          
        </div>
      </div>
    </div>
  )
}

export default RestuarantItem
