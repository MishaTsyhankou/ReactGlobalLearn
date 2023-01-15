import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../Main/MainContent';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.scss';
import FilmDetails from '../FilmDetails/FilmDetails';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Route, Routes, useNavigate, useLocation, redirect, Navigate } from 'react-router-dom';
import FilmItem from '../FilmCard/FilmItem';
import Page404 from '../Page404/Page404';

const App = () => {
    const activeFilmId = useSelector((state: RootState) => state.films.activeFilmId);
    const currentFilms = useSelector((state: RootState) => state.films.films);
    const currentFilmDetails = currentFilms.filter((film: FilmDetails) => film.id === activeFilmId);
    let location = useLocation();
    const [searchValue, setSearchValue] = useState('');
    const [filmDetails, setfilmDetails] = useState(false);

    const sort = useSelector((state: RootState) => state.filters.sortBy);

    const handleDetails = (arg: boolean) => {
        setfilmDetails(arg);
    };

    const handleSearch = (arg: string) => {
        setSearchValue(arg);
    };

    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <>
            <div className={styles.main}>
                <Routes>
                    {!filmDetails ? (
                        <Route
                            path={`/search`}
                            element={
                                <>
                                    <Header handleSearch={setSearchValue} searchValue={searchValue} />

                                    <MainContent handleDetails={handleDetails} searchValue={searchValue} />
                                </>
                            }
                        />
                    ) : (
                        <Route
                            path={`movie/${activeFilmId}`}
                            element={<FilmDetails {...currentFilmDetails[0]} handleDetails={handleDetails} />}
                        />
                    )}

                    <Route
                        path="/main"
                        element={<MainContent handleDetails={handleDetails} searchValue={searchValue} />}
                    />
                    <Route path="/footer" element={<Footer />} />

                    <Route path="/" element={<Navigate to="/search" />} />

                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
