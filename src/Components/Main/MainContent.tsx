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
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.contentWrapper}>
                    <Navigation selectedGenre={selectedGenre} handleToggle={setSelectedGenre} />
                    <FilmDirectory
                        handleDetails={handleDetails}
                        selectedGenre={selectedGenre}
                        searchValue={searchValue}
                    />
                </div>
            </div>
        </>
    );
};

export default MainContent;
