import rootUrl from "./rootUrl";
const fetch = require("node-fetch");

export default function getItems({keyword}){
    const url = rootUrl() + `items?q=${keyword}`;
    return fetch(url)
        .then(res => res.json())
        .then(res => { 
            const data = res;
            return data;
        })
        .catch(err => console.log(err));
}