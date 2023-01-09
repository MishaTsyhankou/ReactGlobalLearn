import React from 'react';
import { useState, useEffect } from 'react';
import * as events from 'events';
import styles from './Search.module.scss';
import { BrowserRouter as Router, Route, Routes, useSearchParams, useNavigate, useLocation } from 'react-router-dom';

interface SearchProps {
    searchValue: string;
    handleSearch: (search: string) => void;
}

const Search = ({ searchValue, handleSearch }: SearchProps) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let location = useLocation();
    const searchTerm = searchParams.get('name');
    const navigate = useNavigate();
    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;

        setSearchParams(searchValue);
        handleSearch(searchValue);
    };
    const onSearchClick = () => {
        //setMovieDetails({ isMovieDetailsShowing: false, movieId: '' });
        navigate('/search');
    };

    const onSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        // Google Analytics
        console.log(location);
    }, [location]);
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Find your movie</h1>
            <form className={styles.search} onSubmit={onSearchSubmit}>
                <input
                    className={styles.input}
                    type="search"
                    placeholder="What do you want to watch..."
                    value={location.search}
                    onChange={onSearchValueChange}
                />
                <button onClick={onSearchClick} className={styles.button} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
