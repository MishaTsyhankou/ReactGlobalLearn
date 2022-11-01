import React from 'react';
import { useState } from 'react';
import FilmItem from './FilmItem';
import { mockFilmData } from './mockData';

const FilmDirectory = () => {
    const filmItems = mockFilmData.map((filmItem) => {
        return (
            <FilmItem
                release_date={filmItem.release_date}
                genres={filmItem.genres}
                id={filmItem.id}
                title={filmItem.title}
                key={filmItem.id}
                poster_path={filmItem.poster_path}
            />
        );
    });

    return (
        <>
            <div className="sort_result">
                <div className="film__count">{mockFilmData.length}</div>
                <div> film founded</div>
            </div>
            <div className="filmDirectory__wrap">{filmItems}</div>
        </>
    );
};

export default FilmDirectory;
