import { data } from "react-router-dom"

const API_RestaurantLink="http://localhost:8080/restaurants"

export const getRestaurants=()=>{
    return fetch(API_RestaurantLink)
    // console.log(API_RestaurantLink)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["restaurants"])
}