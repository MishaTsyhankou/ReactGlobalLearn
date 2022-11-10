import React from 'react';
import { useState } from 'react';
import * as events from 'events';
import styles from './Search.module.scss';

interface SearchProps {
    searchValue: string;
    handleSearch: (search: string) => void;
}

const Search = ({ searchValue, handleSearch }: SearchProps) => {
    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(event.target.value);
    };
    const onSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Find your movie</h1>
            <form className={styles.search} onSubmit={onSearchSubmit}>
                <input
                    className={styles.input}
                    type="search"
                    placeholder="What do you want to watch..."
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
                <button className={styles.button} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
