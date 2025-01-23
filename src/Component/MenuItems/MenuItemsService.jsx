const API_Link="http://localhost:8080/menuItems"

export const getMenuItems=()=>{
    return fetch(API_Link)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["menuItems"]);
}

