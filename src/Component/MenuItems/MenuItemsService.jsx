import { data } from "react-router-dom";

const API_Link="http://localhost:8080/menuItems"

export const getMenuItems=()=>{
    return fetch(API_Link)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["menuItems"]);
}

export const findByOrderByNameAsc=()=>
{
    return fetch("http://localhost:8080/menuItems/search/findByOrderByNameAsc")
    .then(data=>data.json())  
    .then(data=>data["_embedded"]["menuItems"])
}

export const findByOrderByNameDesc=()=>
{
    return fetch("http://localhost:8080/menuItems/search/findByOrderByNameDesc")
    .then(data=>data.json())  
    .then(data=>data["_embedded"]["menuItems"])
}
export const findByOrderByPriceAsc=()=>
    {
        return fetch("http://localhost:8080/menuItems/search/findByOrderByPriceAsc")
        .then(data=>data.json())  
        .then(data=>data["_embedded"]["menuItems"])
    }

export const findByOrderByPriceDesc=()=>
        {
            return fetch("http://localhost:8080/menuItems/search/findByOrderByPriceDesc")
            .then(data=>data.json())  
            .then(data=>data["_embedded"]["menuItems"])
        }

export const addMenuItem=(menuItem)=>{
    return fetch(API_Link,{method:"POST",headers:{
        "Content-Type":"application/json"
    },body:JSON.stringify(menuItem)}).then(data=>data.json()).then(data=>data)
}
