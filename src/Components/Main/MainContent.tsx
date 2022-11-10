import React, { useState } from 'react';
import FilmDirectory from '../FilmDirectory/FilmDirectory';
import Navigation from '../Navigation/Navigation';
import NavigationTest from '../Navigation/Navigation';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from './MainContent.module.scss';

interface MainProps {
    searchValue: string;
}

const MainContent = ({ searchValue }: MainProps) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [sort, setSortType] = useState('release_date');
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.contentWrapper}>
                    {/* <Navigation /> */}
                    <Navigation
                        selectedGenre={selectedGenre}
                        sort={sort}
                        handleSorting={setSortType}
                        handleToggle={setSelectedGenre}
                    />
                    <FilmDirectory selectedGenre={selectedGenre} searchValue={searchValue} sort={sort} />
                </div>
            </div>
        </>
    );
};

export default MainContent;
