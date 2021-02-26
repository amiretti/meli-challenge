import rootUrl from "./rootUrl";
const fetch = require("node-fetch");

export default function getItemDetail(id){
    const url = rootUrl() + `items/${id}`;
    return fetch(url)
        .then(response => { 
            if(response.ok){
                return response.json();
            }
            else{
                window.location.assign("/404");
            }
        })
        .catch(err => console.log(err));
}