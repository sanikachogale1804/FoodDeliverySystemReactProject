import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';
import { getMenuItemsById } from '../Services/MenuItemsService';
import { getRestaurantsById, getRestaurantsMenu } from './RestaurantService';
import MenuItemAdmin from '../MenuItems/MenuItemAdmin';

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
        <div className="menu-items-container">
    
            {
                menuItems.map(r => {
                    return (   
                        <>
                         <div className="card-body">
                           <MenuItemAdmin 
                           name={r.name}
                           price={r.price}
                           description={r.description}
                           image={r._links.self.href}
                           />
                           </div>
                        </>
                    )
                })
            }
           
        </div>
    )
}

export default ResturantItemDetails
