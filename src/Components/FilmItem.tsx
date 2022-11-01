import React from 'react';
import { useState } from 'react';
interface FilmData {
    id?: number;
    title: string;
    tagline?: string;
    vote_average?: number;
    vote_count?: number;
    release_date: string;
    poster_path: string;
    overview?: string;
    budget?: number;
    revenue?: number;
    genres?: string[];
    runtime?: number;
}

const FilmItem = ({ id, title, poster_path, release_date, genres }: FilmData) => {
    return (
        <>
            <div className="filmItem__wrap">
                <div className="film__img">
                    <img className="poster" src={poster_path} alt="filmImage" />
                </div>
                <div className="film__inform">
                    <div className="film__desc">
                        <div className="film__title">{title}</div>
                        <div className="film__shrotDesc">
                            {genres[0]}, {genres[1]}
                        </div>
                    </div>
                    <div className="film__year">{release_date.slice(0, 4)}</div>
                </div>
            </div>
        </>
    );
};

export default FilmItem;
