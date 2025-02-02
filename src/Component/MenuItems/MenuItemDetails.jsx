import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMenuItemsById } from '../Services/MenuItemsService';

import  c from '../CSS/MenuItemsDetails.css'

function MenuItemDetails() {
  const [menuItem, setMenuItem] = useState(null);
  const { id } = useParams();

  const fetchMenuItem = async () => {
    try {
      const data = await getMenuItemsById(`http://localhost:8080/menuItems/${id}`);
      setMenuItem(data);
    } catch (error) {
      console.error("Error fetching menu item:", error);
    }
  };

  useEffect(() => {
    fetchMenuItem();
  }, [id]);

  if (!menuItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="menu-item-container">
      <div className="menu-item-card">
        <div className="menu-item-img-container">
          <img
            src={`http://localhost:8080/menuItems/${id}/image`}
            className="menu-item-img"
            alt={`Food item: ${menuItem.name}`}
          />
        </div>
        <div className="menu-item-details">
          <h5 className="menu-item-title">{menuItem.name}</h5>
          <p className="menu-item-price">{menuItem.price}</p>
          <p className="menu-item-description">
            <small className="text-muted">{menuItem.description}</small>
          </p>
          <div className="offers">
            <p><strong>Special Offer:</strong> 20% off on your first order!</p>
            <p><strong>Limited time offer!</strong></p>
          </div>
          <button className="order-now-btn btn btn-success btn-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>

   
  );
}

export default MenuItemDetails;
