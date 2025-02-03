import React from 'react';
import resturant from '../CSS/RestuarantItems.css';
import { Navigate, useNavigate } from 'react-router-dom';

function RestaurantItem({ id,name, address, phoneNumber }) {
  const navigate=useNavigate();
  return (
    <div className="restaurant-container">
      <div className="restaurant-card menu-card">
        <div className="card-body">
          <h5 className="card-title restaurant-name">{name}</h5>
          <p className="card-text restaurant-address">{address}</p>
          <p className="card-text restaurant-price">{phoneNumber}</p>
          <button className="btn btn-primary btn-lg menu-btn"  onClick={()=>{navigate(`/resturant/${id}`)}}>See MenuItems</button>
          <button className="btn btn-primary btn-lg menu-btn">Add MenuItems</button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantItem;
