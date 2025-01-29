import React, { useEffect, useState } from 'react'
import { findByOrderByNameAsc, findByOrderByNameDesc, findByOrderByPriceAsc, findByOrderByPriceDesc, getMenuItems } from '../Services/MenuItemsService';
import MenuItems from './MenuItems';
import { data } from 'react-router-dom';


function Menu() {
  let [menuitems, setMenuItems] = useState([]);
  let [searchQuery,setSearchQuery]=useState("");
 useEffect(() => {
     getMenuItems().then(data => {
    console.log(data); 
       setMenuItems(data);
     })
   },[])

   //to sort data
   const sort = async (choice) => {

    switch (choice) {
      case 1:
        setMenuItems(await findByOrderByNameAsc());
        break;
      case 2:
        setMenuItems(await findByOrderByNameDesc());
        break;
      case 3:
          setMenuItems(await findByOrderByPriceAsc());
          break;
      case 4:
          setMenuItems(await findByOrderByPriceDesc());
          break;
    }
  }

  return (
    <div className="container">
    {/* Sorting Section */}
    <div className="sorting-container">
      <ul className="list-group mb-3">
        <li className="list-group-item" onClick={() => { sort(1) }}>A to Z</li>
        <li className="list-group-item" onClick={() => { sort(2) }}>Z to A</li>
        <li className="list-group-item" onClick={() => { sort(3) }}>Low to High</li>
        <li className="list-group-item" onClick={() => { sort(4) }}>High to Low</li>
      </ul>

      <div className="search-container mb-3">
        <input
          type="text"
          className="form-control"
          id="search-input"
          placeholder="Search here..."
          onChange={(e) => { setSearchQuery(e.target.value) }}
        />
      </div>
    </div>

    {/* Menu Items Section */}
    <div className="menu-items-container">
      {menuitems.filter((item) => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      }).map(menuItem => {
        return (
          <>
          <MenuItems
            name={menuItem.name}
            price={menuItem.price}
            description={menuItem.description}
            image={menuItem._links.self.href}
            menuItem_link={menuItem._links.self.href}
            
          />
          
          </>
        );
      })}
    </div>
  </div>
  )
}

export default Menu

