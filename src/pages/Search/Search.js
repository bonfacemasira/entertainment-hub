import React, { useState, useEffect } from 'react';
import './Search.css';
import SingleContent from '../../components/SingleContent/SingleContent';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <div className="search">
            <form className="search">
                <input type="text" className="search-input" placeholder="Search..." />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search;