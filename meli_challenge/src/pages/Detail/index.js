import React from 'react';
import {useParams} from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Header from '../../components/Header/Header';
import './index.css';

export default function Detail(){

    let id = useParams().id;

    return(
        <>
            <Header/>
            <ProductDetail ProductId={id}/>
        </>
    )
}