import React from 'react';
import { useState } from 'react';
import FilmItem from './FilmItem';

const FilmDirectory = () => {
    return (
        <>
            <div className="sort_result">39 film founded</div>
            <div className="filmDirectory__wrap">
                <FilmItem />
                <FilmItem />
                <FilmItem />
                <FilmItem />
                <FilmItem />
                <FilmItem />
            </div>
        </>
    );
};

export default FilmDirectory;
