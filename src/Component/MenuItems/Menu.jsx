import React, { useEffect, useState } from 'react'
import { findByOrderByNameAsc, findByOrderByNameDesc, findByOrderByPriceAsc, findByOrderByPriceDesc, getMenuItems, getMenuItemsByRange } from '../Services/MenuItemsService';
import MenuItems from './MenuItems';
import { data } from 'react-router-dom';
import { getCategory, getMenuItemsByCategory } from '../Services/CategoryService.jsx';

function Menu({ menuItem_link }) {
  let [menuitems, setMenuItems] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");
  let [from, setFrom] = useState("")
  let [to, setTo] = useState("")
  let [categories, setCategories] = useState([])

  const fetchCatgories = async () => {
    console.log("Hello")
    setCategories(await getCategory())
  }


  useEffect(() => {
    getMenuItems().then(data => {
      console.log(data);
      setMenuItems(data);
    })

    fetchCatgories();
  }, [])


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

  const handleFilterByPrice = async () => {
    if (from != '' && to != '')
      setMenuItems(await getMenuItemsByRange(parseInt(from), parseInt(to)))
  }


  //Category Start

  const handleCategeory = (category_link, menuItem_link) => {
    setCategories(menuItem_link + "/category", category_link)

    
  }
  // Category End

  const showMenuItemsBasedOnCategory=async (menuItem_link)=>{
    console.log("clicked",menuItem_link)
    setMenuItems(await getMenuItemsByCategory(menuItem_link))

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

        {/* Custom range start */}

        <div class="input-group mb-3">
          <span class="input-group-text">From</span>
          <span class="input-group-text">0.00</span>
          <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"
            value={from} onChange={(e) => { setFrom(e.target.value) }} />
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"
            value={to} onChange={(e) => { setTo(e.target.value) }} />
          <span class="input-group-text">To</span>
          <span class="input-group-text">0.00</span>
        </div>

        {/* Filter by price range button */}
        <button class="btn btn-primary mb-3" onClick={handleFilterByPrice}>Filter by Price</button>
        <br />

        {/* Custom range end */}

        <div className="search-container mb-3">
          <input
            type="text"
            className="form-control"
            id="search-input"
            placeholder="Search here..."
            onChange={(e) => { setSearchQuery(e.target.value) }}
          />
        </div>

        {/* Showing Category Start */}

        <ol class="list-group list-group-numbered">

          {
            categories.map((c) => {
              return (
                <li class="list-group-item d-flex justify-content-between align-items-start" onClick={()=>{
                  showMenuItemsBasedOnCategory(c._links.self.href)
                }}>   
                  <div class="ms-2 me-auto">
                  
                    <div class="fw-bold" >{c.categoryName}</div>
                    
                  </div>
                  <span class="badge bg-primary rounded-pill">14</span>
                </li>
              )
            })
          }

        </ol>
        {/* showing categories end======================== */}
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

