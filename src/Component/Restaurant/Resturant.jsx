import React, { useEffect, useState } from 'react'
import { getRestaurants } from './RestaurantService';
import { data } from 'react-router-dom';
import RestuarantItem from './RestuarantItem';

function Resturant({id,name,address}) {
  let[restaurants,setRestaurants]=useState([]);
 
  useEffect(()=>{
    getRestaurants().then(data=>{
      console.log(data);
      setRestaurants(data)
    })
  },[])

  return (
    <div className="restaurant-list">
        {
          restaurants.map((r)=>{
            return (
              <>
               <RestuarantItem
               id={r.id}
               name={r.name}
               address={r.address}
               phoneNumber={r.phoneNumber}
               />

              </>
            )
          })
        }
          
       
      </div>
    
  )

}

export default Resturant
