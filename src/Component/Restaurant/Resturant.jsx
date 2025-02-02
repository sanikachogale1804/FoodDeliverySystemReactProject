import React, { useEffect, useState } from 'react'
import { getRestaurants } from './RestaurantService';
import { data } from 'react-router-dom';
import RestuarantItem from './RestuarantItem';

function Resturant({name,address}) {
  let[restaurants,setRestaurants]=useState([]);
 
  useEffect(()=>{
    getRestaurants().then(data=>{
      console.log(data);
      setRestaurants(data)
    })
  },[])

  return (
    <div className="resturant-items-container">
        {
          restaurants.map((r)=>{
            return (
              <>
               <RestuarantItem
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
