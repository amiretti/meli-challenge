import rootUrl from "./rootUrl";
const fetch = require("node-fetch");

export default function getItemDetail({id}){
    const url = rootUrl() + `items/${id}`;
console.log(url);
    return fetch(url)
        .then(res => res.json())
        .then(response => { 
            return response;
        })
        .catch(err => console.log(err));
}