import React from 'react';

export default function Breadcrumbs({categories} = []){
    return categories && categories.length > 0 ? <div data-testid="custom-breadcrumbs" className="container custom-breadcrumbs">
                <div className="columns">
                    <nav className="breadcrumb column is-12" aria-label="breadcrumbs">
                        <ul>
                            {
                                categories.map(
                                    category =>  <li key={`li-'${category.id}`}><a key={`a-'${category.id}`}>{category.name}</a></li>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            : <div data-testid="custom-breadcrumbs" className="custom-no-breadcrumbs"></div>
}