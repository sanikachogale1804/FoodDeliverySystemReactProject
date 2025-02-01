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

export const uploadProductImage=(menuItem_link,file)=>{
    let formData=new FormData();
    formData.append("menuItemsImage",file);
 
    return fetch(menuItem_link+"/image",
        {method:"POST",body:formData})
        .then(data=>data.text())
        .then(data=>data)
}


export const getMenuItemsById=(menuItem_link)=>{
    return fetch(menuItem_link)
    .then(data=>data.json())
    .then(data=>data)

}

export const updateMenuItem=(menuItem_link,menuItem)=>{
    return fetch(menuItem_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(menuItem)
    }).then(data=>data.json().then(data=>data))

}

export const deleteMenuItems=(menuItem_link)=>{
    // console.log(menuItem_link)
    return fetch(menuItem_link,{method:"DELETE"})
    .then(data=>data.json())
    .then(data=>data)
}

export const getMenuItemsByRange=(startPrice,endPrice)=>{
    return fetch(`${API_Link}/search/findByPriceBetween?startPrice=${startPrice}&endPrice=${endPrice}`) 
    .then(data=>data.json())
    .then(data=>data["_embedded"]["menuItems"])

}

