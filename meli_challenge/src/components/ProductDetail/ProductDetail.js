import React, { useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import getItemDetail from '../../services/getItemDetail'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export default function ProductDetail({ProductId} = ""){
    const [product, setProduct] = useState({});
    const [productLink, setProductLink] = useState({});
    const [description, setDescription] = useState({});
    const [categories, setCategories] = useState([]);

    const meliItemRoot = "https://articulo.mercadolibre.com.ar/";
    useEffect(function(){ 
        getItemDetail(ProductId)
        .then(x => {
            setProduct(x.item);
            setCategories(x.categories);
            var link = meliItemRoot + x.item.id.substring(0,3) + "-" + x.item.id.substring(3,x.item.id.length);
            setProductLink(link);
            setDescription(`Compralo en MeLi Challenge a $${x.item.price.amount} - Pagá en cuotas - Envío a todo el país.`);
        })
    },[]);
    
    return (
        <>
            <Helmet>
                <title>{`${product.title} | MeLi Challenge`}</title>
                <meta name="description" content={description}/>
            </Helmet>
            <Breadcrumbs categories={categories}/>
            <div className="container container-product-details">
                <div className="columns">
                    <div className="column is-8 is-centered"> 
                        <div className="column-img-detail">
                            <img className="custom-img-detail" alt={product.title} src={product.picture}></img>
                        </div>
                    </div>    
                    <div className="column is-4">
                        <section className="section section-detail">
                            <p className="product-detail-condition">{product.condition = 'new' ? 'Nuevo' : 'Usado'} - {product.sold_quantity} vendidos</p>
                            <p className="product-detail-title">{product.title}</p>
                            <p className="product-detail-price">
                                {product.price ? <span>${product.price.amount}<sup>{product.price.decimals}</sup></span> : ''}
                            </p>
                            <div className="control product-detail-btn-container">
                                <a className="button is-link product-detail-btn" href={productLink} target="_blank">Comprar</a>
                            </div>
                        </section>
                    </div>
                </div>
                <section>
                    <h1 className="product-description-title">Descripción del producto</h1>
                <pre className="description-text">{product.description}</pre> 
                </section>
            </div>
        </>
    );
}