import React, { useState } from 'react';
import FilmDirectory from '../FilmDirectory/FilmDirectory';
import Navigation from '../Navigation/Navigation';
import styles from './MainContent.module.scss';

interface MainProps {
    searchValue: string;
    handleDetails: (arg: boolean, id: number) => void;
}

const MainContent = ({ searchValue, handleDetails }: MainProps) => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [sort, setSortType] = useState('release_date');
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.contentWrapper}>
                    <Navigation
                        selectedGenre={selectedGenre}
                        sort={sort}
                        handleSorting={setSortType}
                        handleToggle={setSelectedGenre}
                    />
                    <FilmDirectory
                        handleDetails={handleDetails}
                        selectedGenre={selectedGenre}
                        searchValue={searchValue}
                        sort={sort}
                    />
                </div>
            </div>
        </>
    );
};

export default MainContent;
