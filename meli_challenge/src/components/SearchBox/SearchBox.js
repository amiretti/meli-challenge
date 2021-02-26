import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchBox(){
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleSearchSubmit = e => {
            e.preventDefault();
            if(query.trim() !== "") history.push(`/items?search=${query}`);
          }
    
    const handleSearchChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
    }

    return <form onSubmit={handleSearchSubmit}>
                <div className="field has-addons">
                    <div className="control custom-control">
                        <input className="input" type="text" value={query} onChange={handleSearchChange} placeholder="Nunca dejes de buscar"/>
                    </div>
                    <div className="control">
                        <button className="button bg-gray">
                            <img className="img-logo" alt="Botón de búsqueda" src="../assets/img/ic_Search.png"></img>
                        </button>
                    </div>
                </div>
            </form>
}