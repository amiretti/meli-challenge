import React from 'react';
import SearchBox from '../SearchBox/SearchBox';

export default function Header(){

    return  <div className="app-header" data-testid="custom-header">
                <div className="container">
                    <div className="columns">
                        <div className="column is-1 is-mobile">
                            <a href="/">
                                <img className="img-logo" alt="Mercado Libre" src="../assets/img/Logo_ML.png"></img>
                            </a>
                        </div>
                        <div className="column is-11 is-mobile">
                            <SearchBox/>
                        </div>
                    </div>
                </div>
            </div>
}