import React, { useState } from 'react';
import SearchComponent from './SearchComponent';

const Header = () => {
    return (
        <>
            <div className="header__wrap">
                <div className="logo__wrap">
                    <div className="netflix__logo">netflixroulette</div>
                    <div className="addMovie">
                        <div className="addMovie__button">+ ADD MOVIE</div>
                    </div>
                </div>

                <SearchComponent header={'Find Your Movie'} />
            </div>
        </>
    );
};

export default Header;
