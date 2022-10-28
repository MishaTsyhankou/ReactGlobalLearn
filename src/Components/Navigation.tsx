import React, { useState } from 'react';
import SearchComponent from './SearchComponent';

const Navigation = () => {
    const genres: string[] = ['All', 'Documentaruy', 'Comedy', 'Horror', 'Crime'];

    const genresItems = genres.map((genre) => {
        return <div className="genre__block">{genre}</div>;
    });

    return (
        <>
            <div className="navigation__wrap">
                <div className="nav__wrap">
                    <div className="genres__sorter__wrap">
                        <div className="genre__block">All</div>
                        {genresItems}
                    </div>
                    <div className="usualSorter__wrap">
                        <div className="usualSorter__block">Sort By</div>
                        <div className="usualSorter__dropdown">Release Date</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
