import React from 'react';
import { useState } from 'react';

const Search = () => {
    const [searchValue, setSearch] = useState('');
    const [searchRequest, setSearchRequest] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    return (
        <>
            <h1>Search Component:</h1>

            <div className="search">
                <input
                    className="searchComponent"
                    type="text"
                    placeholder="What do you want to watch?"
                    value={searchValue}
                    onChange={handleSearch}
                />

                <div onClick={() => setSearchRequest(searchValue)} className="searchButton">
                    Search
                </div>
            </div>

            <div className="searchResult">Your search request: {searchRequest}</div>
        </>
    );
};

export default Search;
