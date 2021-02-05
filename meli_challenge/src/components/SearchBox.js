import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchBox(){
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleSearchSubmit = e => {
            e.preventDefault();
            history.push(`/items?search=${query}`);
          }
    
    const handleSearchChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    return <form className="app-header" onSubmit={handleSearchSubmit}>
        <div className="container">
            <div className="columns">
                <div className="column is-1 is-mobile">
                    <a href="/">
                        <img className="img-logo" alt="Mercado Libre" src="../assets/Logo_ML.png"></img>
                    </a>
                </div>
                <div className="column is-11 is-mobile">
                    <div className="field has-addons">
                        <div className="control custom-control">
                            <input className="input" type="text" value={query} onChange={handleSearchChange} placeholder="Nunca dejes de buscar"/>
                        </div>
                        <div className="control">
                            <button className="button bg-gray">
                                <img className="img-logo" alt="Botón de búsqueda" src="../assets/ic_Search.png"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </form>
}