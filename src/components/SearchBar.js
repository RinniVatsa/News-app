// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return ( <
        div className = "search-bar" >
        <
        input type = "text"
        placeholder = "Search for articles..."
        value = { searchTerm }
        onChange = {
            (e) => setSearchTerm(e.target.value) }
        /> <
        /div>
    );
};

export default SearchBar;