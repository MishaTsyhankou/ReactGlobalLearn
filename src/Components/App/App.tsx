import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../Main/MainContent';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from '../App/App.module.scss';
import AddMovieModal from '../Modal/Modal';
import FilmDetails from '../FilmDetails/FilmDetails';
import { mockFilmData } from '../mockData';

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filmDetails, setfilmDetails] = useState(false);
    const [filmId, setFilmId] = useState(181808);
    const [filtredDetails, setFiltredDetails] = useState([]);
    const filterFilmDetails = mockFilmData.filter((film) => film.id === filmId)[0];

    useEffect(() => {}, [filmId, filmDetails]);

    const handleDetails = (arg: boolean, id?: number) => {
        setfilmDetails(arg);
        setFilmId(id);
    };
    return (
        <>
            <div className={styles.main}>
                {!filmDetails ? (
                    <Header handleSearch={setSearchValue} searchValue={searchValue} />
                ) : (
                    <FilmDetails {...filterFilmDetails} handleDetails={handleDetails} />
                )}

                <MainContent handleDetails={handleDetails} searchValue={searchValue} />
                <Footer />
            </div>
        </>
    );
};

export default App;
