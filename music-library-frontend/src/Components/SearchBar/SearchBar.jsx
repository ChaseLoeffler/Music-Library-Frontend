import React, { useState } from 'react';
import './SearchBar.css'

const Search = (props) => {
    const [search, setSearch] = useState('');

    function handleSumbit(e){
        e.preventDefault();
        let newSearch = {
            search: search
        };
        props.searchByS(newSearch);
    }

    return (
        <div className='bar-centered'>
            <form onSubmit={handleSumbit}>
                <input type='text' value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search Songs'/>
            </form>
        </div>
    );
}
 
export default Search;