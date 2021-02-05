import React from 'react';

export default function Breadcrumbs({categories} = []){
    return categories ? <div className="container custom-breadcrumbs">
                <div className="columns">
                    <nav className="breadcrumb column is-12" aria-label="breadcrumbs">
                        <ul>
                            {
                                categories.map(
                                    category =>  <li><a href="#">{category.name}</a></li>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            : <div className="custom-no-breadcrumbs"></div>
}