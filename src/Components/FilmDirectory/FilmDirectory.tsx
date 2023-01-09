import React from 'react';
import { useState, useEffect } from 'react';

import FilmItem from '../FilmCard/FilmItem';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms, addNewFilms } from '../../reducers/filmsSlice';
import { RootState, AppDispatch } from '../../store/store';
import { useLocation } from 'react-router-dom';

import styles from './FilmDirectory.module.scss';

interface FilmDirectoryProps {
    selectedGenre: string;
    searchValue: string;
    handleDetails: (arg: boolean, id: number) => void;
}

const useQuery = () => new URLSearchParams(useLocation().search);

export interface FilmData {
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

const FilmDirectory = ({ searchValue, handleDetails }: FilmDirectoryProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const films = useSelector((state: RootState) => state.films.films);
    const sort = useSelector((state: RootState) => state.filters.sortBy);
    const activeFilter = useSelector((state: RootState) => state.filters.activeFilter);
    const [filteredFilms, setFilteredFilms] = useState([]);
    const query = useQuery();
    const sortTest = query.get('sortBy');
    console.log(sortTest);

    const sortFilms = (filmArr: FilmData[], sort: string) => {
        switch (sort) {
            case 'vote_average':
                return [...filmArr].sort((a, b) => b.vote_average - a.vote_average);
            case 'budget':
                return [...filmArr].sort((a, b) => b.budget - a.budget);
            case 'vote_count':
                return [...filmArr].sort((a, b) => b.vote_count - a.vote_count);
            case 'release_date':
                return [...filmArr].sort((a, b) => {
                    return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
                });
            default:
                return filmArr;
        }
    };

    useEffect(() => {
        dispatch(fetchFilms());
        //   ;
    }, []);

    useEffect(() => {
        setFilteredFilms(
            sortFilms(films, sort).filter((film) =>
                !activeFilter || activeFilter === 'All'
                    ? film.title.toLowerCase().includes(searchValue.toLowerCase())
                    : film.title.toLowerCase().includes(searchValue.toLowerCase()) && film.genres.includes(activeFilter)
            )
        );
    }, [searchValue, activeFilter, sort, films]);

    const filmItems = filteredFilms.map((filmItem) => {
        return <FilmItem {...filmItem} key={filmItem.id} handleDetails={handleDetails} />;
    });

    return (
        <>
            {filteredFilms.length ? (
                <>
                    <div className={styles.searchResults}>
                        <span>{films.length}</span> movies found
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
