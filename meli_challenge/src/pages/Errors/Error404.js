import React from 'react';
import Header from '../../components/Header/Header';
import Errors from '../../components/Errors/Errors';
import "./Errors.css";

export default function Error404(){
    return(
        <>
            <Header/>
            <Errors errorType="404" errorMessage="Parece que esta página no existe"/>
        </>
    )
}