import React from 'react';
import SearchResults from '../../components/SearchResults/SearchResults';
import { useLocation } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Header from '../../components/Header/Header';
import './index.css';

export default function SearchResult(){

    let urlParams = new URLSearchParams(useLocation().search);
    let query = capitalizeFirstLetter(urlParams.get("search"));

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    return(
        <>
        <Helmet>
            <title>{ `${query} | MeLi Challenge`}</title>
            <meta name="description" content={`Encontrá ${query} en MeLi Challenge! Entrá y conocé nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online.`}/>
        </Helmet>
        <Header/>
        <SearchResults query={query}/>
        </>
    )
}