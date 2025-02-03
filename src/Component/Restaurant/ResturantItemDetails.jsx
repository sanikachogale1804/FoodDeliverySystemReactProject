import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';
import { getMenuItemsById } from '../Services/MenuItemsService';
import { getRestaurantsById, getRestaurantsMenu } from './RestaurantService';

function ResturantItemDetails() {
    const [restuarant, setRestuarant] = useState(null);
    const { id } = useParams();
    const [menuItems, setMenuItems] = useState([])

    const fetchMenuItem = async () => {
        try {
            const data = await getRestaurantsById(id);
            const menuItems = await getRestaurantsMenu(id);
            setRestuarant(data);
            setMenuItems(menuItems)
            console.log(menuItems)
        } catch (error) {
            console.error("Error fetching menu item:", error);
        }
    }

    useEffect(() => {
        fetchMenuItem();

    }, [id]);

    if (!restuarant) {
        return <div>Loading...</div>;
    }

    return (
        <div className="restaurant-container">
            {
                menuItems.map((r) => {

                })
            }
            <div className="restaurant-card menu-card">
                <div className="card-body">
                    <h5 className="card-title restaurant-name">{restuarant.name}</h5>
                    <p className="card-text restaurant-address">{restuarant.address}</p>
                    <p className="card-text restaurant-price">{restuarant.phoneNumber}</p>
                    <button className="btn btn-primary btn-lg menu-btn" >See MenuItems</button>
                    <button className="btn btn-primary btn-lg menu-btn">Add MenuItems</button>
                </div>
            </div>
        </div>
    )
}

export default ResturantItemDetails
