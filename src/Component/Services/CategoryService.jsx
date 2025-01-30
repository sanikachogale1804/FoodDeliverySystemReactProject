import { data } from "react-router-dom"

const API_LINK="http://localhost:8080/categories"

export const getCategory=()=>{
    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["categories"])
}


export const setCategories=(menuItem_link,category_link)=>{
   return fetch(menuItem_link,
    {
        method:"PUT",headers:{
             "Content-Type":"text/uri-list"
        },body:category_link})

}