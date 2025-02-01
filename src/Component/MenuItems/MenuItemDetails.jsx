import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMenuItemsById } from '../Services/MenuItemsService';

function MenuItemDetails() {
  const [menuItem, setMenuItem] = useState(null);  // Set initial state to null, not undefined
  const { id } = useParams();

  const fetchMenuItem = async () => {
    try {
      const data = await getMenuItemsById(`http://localhost:8080/menuItems/${id}`);
      setMenuItem(data);  // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching menu item:", error);
    }
  };

  useEffect(() => {
    fetchMenuItem();  // Call the fetch function on component mount
  }, [id]);  // Dependency on `id` to re-fetch if the `id` changes

  if (!menuItem) {  // Show loading message or a placeholder while data is being fetched
    return <div>Loading...</div>;
  }

  // Render the menu item details after data is fetched
  return (
    <div className="Item-container col-md-6 mb-4">
      <div className="card menu-card">
        <img
          src={`http://localhost:8080/menuItems/${id}/image`} // Assuming `menuItem` contains `image` property
          className="card-img-top menu-img"
          alt={`Food item: ${menuItem.name}`}
        />
        <div className="card-body">
          <h5 className="card-title menu-name">{menuItem.name}</h5>
          <p className="card-text menu-price">{menuItem.price}</p>
          <p className="card-text menu-description">
            <small className="text-muted">{menuItem.description}</small>
          </p>
          <a href="#" className="btn btn-primary btn-lg menu-btn">View Details</a>
        </div>
      </div>
    </div>
  );
}

export default MenuItemDetails;
