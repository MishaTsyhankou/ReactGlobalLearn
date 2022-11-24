import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../Main/MainContent';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.scss';
import FilmDetails from '../FilmDetails/FilmDetails';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const App = () => {
    const activeFilmId = useSelector((state: RootState) => state.films.activeFilmId);
    const currentFilms = useSelector((state: RootState) => state.films.films);
    const currentFilmDetails = currentFilms.filter((film: FilmDetails) => film.id === activeFilmId);

    const [searchValue, setSearchValue] = useState('');
    const [filmDetails, setfilmDetails] = useState(false);

    const handleDetails = (arg: boolean) => {
        setfilmDetails(arg);
    };
    return (
        <>
            <div className={styles.main}>
                {!filmDetails ? (
                    <Header handleSearch={setSearchValue} searchValue={searchValue} />
                ) : (
                    <FilmDetails {...currentFilmDetails[0]} handleDetails={handleDetails} />
                )}

                <MainContent handleDetails={handleDetails} searchValue={searchValue} />
                <Footer />
            </div>
        </>
    );
};

export default App;
