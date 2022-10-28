import React, { useState } from 'react';
import FilmDirectory from './FilmDirectory';
import Navigation from './Navigation';
import SearchComponent from './SearchComponent';

const MainContent = () => {
    return (
        <>
            <div className="mainContent__wrap">
                <Navigation />
                <FilmDirectory />
            </div>
        </>
    );
};

export default MainContent;
