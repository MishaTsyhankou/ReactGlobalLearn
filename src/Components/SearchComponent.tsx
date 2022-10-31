import React from 'react';
import { useState } from 'react';
import * as events from 'events';

interface SearchProps {
    header?: string;
}

const Search = ({ header }: SearchProps) => {
    const [searchValue, setSearch] = useState('');
    const [searchRequest, setSearchRequest] = useState('');
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };
    return (
        <>
            <div className="search__wrap">
                <div className="search__title">{header}</div>

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
            </div>
        </>
    );
};

export default Search;
