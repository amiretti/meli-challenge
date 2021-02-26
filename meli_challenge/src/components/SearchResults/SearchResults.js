import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import getItems from '../../services/getItems';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export default function SearchResults({query} = ""){
    const history = useHistory();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState();
    
    useEffect(function(){ 
      getItems({keyword: query})
      .then(products => {
            setProducts(products.items); 
            setCategories(products.categories);
        })
    }, [query]);

    return (
        <div data-testid="search-result" >
            <Breadcrumbs categories={categories}/>
            {
                products.map(prod => 
                    <section key={prod.id} onClick={()=> history.push(`/items/${prod.id}`)} className="container container-search-results">
                    <div className="columns colums-search-results">
                        <div className="column is-2 custom-img-container-results">
                            <img className="custom-img-results" alt={prod.title} src={prod.picture}></img>
                        </div>
                        <div className="column is-7">
                            <p className="price-search-results">
                                <span>${prod.price.amount}<sup>{prod.price.decimals !== 0 ? (prod.price.decimals * 100).toFixed():''}</sup></span>
                                { prod.free_shipping ? <img alt="Envío gratuito" src="../assets/img/ic_shipping.png"></img> : ''}
                            </p>
                            <p className="title-search-results">{prod.title}</p>
                        </div>
                        <div className="column is-3 location-search-results">
                            <p>{prod.location}</p>
                        </div>
                    </div>
                    <hr className="hr-search-results"/>
                </section>
                )
            }
        </div>
    ) 
}





