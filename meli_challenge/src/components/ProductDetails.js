import React, { useEffect, useState} from 'react';
import getItemDetail from '../services/getItemDetail'
import {useParams} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default function ProductDetail(){
    const [product, setProduct] = useState({});
    let id = useParams().id;

    useEffect(function(){ 
        getItemDetail({id})
        .then(x => setProduct(x.item))
    },[]);

    return (<>
    <Breadcrumbs />
    <div className="container container-product-details">
            <div className="columns">
                <div className="column is-8 column-img-detail"> 
                    <img className="custom-img-detail" alt={product.title} src={product.picture}></img>
                </div>    
                <div className="column is-4">
                    <section className="section">
                        <p className="product-detail-condition">{product.condition = 'new' ? 'Nuevo' : 'Usado'} - {product.sold_quantity} vendidos</p>
                        <p className="product-detail-title">{product.title}</p>
                        <p className="product-detail-price">
                            {product.price ? <span>${product.price.amount}<sup>{product.price.decimals}</sup></span> : ''}
                        </p>
                        <div className="control product-detail-btn-container">
                            <button className="button is-link product-detail-btn">Comprar</button>
                        </div>
                    </section>
                </div>
            </div>
            <section className="section">
                <h1 className="product-description-title">Descripción del producto</h1>
            <p>{product.description}</p> 
            </section>
        </div>
    </>
);
}