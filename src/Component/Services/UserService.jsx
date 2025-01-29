import { data } from "react-router-dom"

const API_LINK="http://localhost:8080/users"

export const addUsers=(user)=>{
    return fetch(API_LINK,{method:"POST",headers:{
        "Content-Type":"application/json"
    },body:JSON.stringify(user)}).then(data=>data.json()).then(data=>data)
}