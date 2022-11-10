import React, { Component } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../Main/MainContent';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from '../App/App.module.scss';
import AddMovieModal from '../Modal/Modal';

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <div className={styles.main}>
                <Header handleSearch={setSearchValue} searchValue={searchValue} />
                <MainContent searchValue={searchValue} />
                <Footer />
            </div>
        </>
    );
};

export default App;
