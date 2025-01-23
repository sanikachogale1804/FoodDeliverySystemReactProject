import React, { useEffect, useState } from 'react'
import { getMenuItems } from './MenuItemsService';
import MenuItems from './MenuItems';


function Menu() {
  let [menuitems, setMenuItems] = useState([]);
 useEffect(() => {
     getMenuItems().then(data => {
     console.log(data);
       setMenuItems(data);
     })
   },[])

  return (
    <div>
      {
        menuitems.map(menuItem=>{
          return (
            <MenuItems
            name={menuItem.name}
            price={menuItem.price}
            description={menuItem.description}
            />
          )

        })
      }
    </div>
  )
}

export default Menu


// function Menu() {

//   let [menuItems, setMenuItems] = useState([]);
//   useEffect(() => {
//     getMenuItems().then(data => {
//       console.log(data);
//       setMenuItems(data);
//     })
//   })

  
//       return (

//         {
//           menuItems.map((m) => {
//         <MenuItems
//           name={m.name}
//           price={m.price}
//           description={m.description}
//         />
//       )
//     })
//   }

// }

// export default Menu
