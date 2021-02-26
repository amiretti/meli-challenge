import React from 'react';
import {Helmet} from 'react-helmet';
import Header from '../../components/Header/Header';

export default function Home(){
    return(
        <>
        <Helmet>
            <title>Bienvenido | MeLi Challenge</title>
            <meta name="description" content="Web site created for Mercado Libre challenge"/>
        </Helmet>
        <Header/>
        </>
    )
}