import React, { useState } from 'react';
import FilmDirectory from './FilmDirectory';
import Navigation from './Navigation';
import ErrorBoundary from './ErrorBoundary';

const MainContent = () => {
    return (
        <>
            <div className="mainContent__wrap">
                <Navigation />
                <ErrorBoundary>
                    <FilmDirectory />
                </ErrorBoundary>
            </div>
        </>
    );
};

export default MainContent;
