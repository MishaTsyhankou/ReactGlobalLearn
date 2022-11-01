import React, { useState } from 'react';
import FilmDirectory from './FilmDirectory';
import Navigation from './Navigation';
import ErrorBoundary from './ErrorBoundary';

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
