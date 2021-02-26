import express from 'express';
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 8686;
const rootUrl = "https://api.mercadolibre.com/";

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

app.get("/api/items", (req, res) => {

    try{
        var query = req.query.q;
        const urlSearch = rootUrl + `sites/MLA/search?q=${encodeURI(query)}&limit=4&FilterID=category`;
        fetch(urlSearch)
        .then(resp => resp.json())
        .then(response => {
            const items = response.results.map(prod => {
                return {
                    id: prod.id,
                    title: prod.title,
                    price:{
                        currency: prod.currency_id,
                        amount: formatPrice(Math.floor(prod.price)),
                        decimals: 0
                    },
                    picture: prod.thumbnail,
                    condition: prod.condition,
                    free_shipping: prod.shipping.free_shipping,
                    location: prod.address.state_name
                }
            });

            const filters = response.filters.find(filter => filter.id === "category");
            const responseArray = {
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
    const urlDetail = rootUrl + `items/${req.params.id}`;
    const urlDetailDescription = urlDetail + "/description";
    const urlCategories = rootUrl + "categories/";

    try{
        fetch(urlDetail)
        .then(resp => {
            if(resp.ok){
                return resp.json();
            }
            else{
                return res.status(resp.status).send(resp.message);
            }
        })
        .then(detail => {
            fetch(urlDetailDescription)
            .then(response => response.json())
            .then(detailDescription => {
                fetch(urlCategories + detail.category_id)
                .then(response => response.json())
                .then(categories => {
                    const objResponse = {
                        author: getAuthor(),
                        categories: categories.path_from_root,
                        item:{
                            id: detail.id,
                            title: detail.title,
                            price:{
                                currency: detail.currency_id,
                                amount: formatPrice(Math.floor(detail.price)),
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
            res.status(500).send(error);
        });
    })
    .catch(error => {
        res.status(500).send(error);
    });
    }
    catch(ex){
        res.status(500).send(ex.message);
    }
});

function getAuthor() {
    return {
        name: "Andrés",
        lastname: "Miretti"
    }
}

function formatPrice(price){
    return new Intl.NumberFormat("ar-AR").format(price).replace(",",".");
}