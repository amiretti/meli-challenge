import React from 'react';
import {Helmet} from 'react-helmet';

export default function Errors({errorType, errorMessage}){
    return (
        <>
            <Helmet>
                <title>{`${errorMessage} | MeLi Challenge`}</title>
                <meta name="description" content={`${errorType}: ${errorMessage} | MeLi Challenge`} />
            </Helmet>
            <div className="container container-errors" data-testid="custom-errors">
                <div className="columns">
                    <div className="column is-12">
                        <img className="errors-img" src={`../assets/img/errors/${errorType}.png`} alt={errorMessage}></img>
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column is-12 has-text-centered">
                        <h1 className="title is-4">{errorMessage}</h1>
                    </div>
                </div>
            </div>
        </>
    )}