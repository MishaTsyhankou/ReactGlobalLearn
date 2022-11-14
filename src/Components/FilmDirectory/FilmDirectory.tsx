import React from 'react';
import { useState, useEffect } from 'react';

import FilmItem from '../FilmCard/FilmItem';
import { mockFilmData } from '../mockData';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import styles from './FilmDirectory.module.scss';

interface FilmDirectoryProps {
    selectedGenre: string;
    searchValue: string;
    sort: string;
    handleDetails: (arg: boolean, id: number) => void;
}

interface FilmData {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

const FilmDirectory = ({ selectedGenre, searchValue, sort, handleDetails }: FilmDirectoryProps) => {
    const [filteredFilms, setFilteredFilms] = useState(mockFilmData);
    const sortFilms = (filmArr: FilmData[], sort: string) => {
        switch (sort) {
            case 'vote_average':
                return filmArr.sort((a, b) => b.vote_average - a.vote_average);
            case 'budget':
                return filmArr.sort((a, b) => b.budget - a.budget);
            case 'vote_count':
                return filmArr.sort((a, b) => b.vote_count - a.vote_count);
            case 'release_date':
            default:
                return filmArr.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        }
    };

    useEffect(
        () =>
            setFilteredFilms(
                sortFilms(mockFilmData, sort).filter((film) =>
                    !selectedGenre || selectedGenre === 'All'
                        ? film.title.toLowerCase().includes(searchValue.toLowerCase())
                        : film.title.toLowerCase().includes(searchValue.toLowerCase()) &&
                          film.genres.includes(selectedGenre)
                )
            ),
        [searchValue, selectedGenre, sort]
    );

    const filmItems = filteredFilms.map((filmItem) => {
        return <FilmItem {...filmItem} key={filmItem.id} handleDetails={handleDetails} />;
    });
    console.log(filteredFilms.length);

    return (
        <>
            {filteredFilms.length ? (
                <>
                    <div className={styles.searchResults}>
                        <span>{mockFilmData.length}</span> movies found
                    </div>
                    <div className={styles.wrapper}>{filmItems}</div>
                </>
            ) : (
                <ErrorBoundary error={true} errorDescribe={'There are no films with such parameters'} />
            )}
        </>
    );
};

export default FilmDirectory;
