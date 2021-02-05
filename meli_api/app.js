import express from 'express';
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 8686;
const rootUrl = "https://api.mercadolibre.com/";

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));

app.use(function(req, res, next) {
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  // Pass to next layer of middleware
  next();
  });

app.get("/api/items", (req, res) => {

    try{
        var query = req.query.q;
        const urlSearch = rootUrl + `sites/MLA/search?q=${query}&limit=4&FilterID=category`;
        fetch(urlSearch)
        .then(resp => resp.json())
        .then(response => {
            let items = response.results.map(prod => {
                return {
                    id: prod.id,
                    title: prod.title,
                    price:{
                        currency: prod.currency_id,
                        amount: Math.floor(prod.price),
                        decimals: 0
                    },
                    picture: prod.thumbnail,
                    condition: prod.condition,
                    free_shipping: prod.shipping.free_shipping,
                    location: prod.address.state_name
                }
            });

            let filters = response.filters.find(filter => filter.id === "category");
            let responseArray = {
                author: getAuthor(),
                categories: filters ? filters.values[0].path_from_root : [],
                items
            }

            res.status(200).send(responseArray);
        }).catch(error => {
            console.log(error);
        });
    }
    catch(ex){
        console.log(ex);
    }
});

app.get("/api/items/:id", (req, res) => {
    const { id } = req.params;
    const urlDetail = rootUrl + `items/${id}`;
    const urlDetailDescription = urlDetail + "/description";

    try{
        fetch(urlDetail)
        .then(resp => resp.json())
        .then(detail => {
            fetch(urlDetailDescription)
            .then(response => response.json())
            .then(detailDescription => {
                let objResponse = {
                    author: getAuthor(),
                    item:{
                        id: detail.id,
                        title: detail.title,
                        price:{
                            currency: detail.currency_id,
                            amount: Math.floor(detail.price),
                            decimals: Math.floor(((detail.price % 1) * 100)).toString().padStart(2,"00")
                        },
                        picture: detail.pictures ?  detail.pictures[0].url : "",
                        condition: detail.condition,
                        free_shipping: detail.free_shipping,
                        sold_quantity: detail.sold_quantity,
                        description: detailDescription.plain_text
                    }
                };
                res.status(200).send(objResponse);
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
    catch(ex){
        console.log(ex);
    }
});

function getAuthor() {
    return {
        name: "Andrés",
        lastname: "Miretti"
    }
}