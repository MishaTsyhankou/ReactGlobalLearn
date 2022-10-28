import React from 'react';
import { useState } from 'react';
const FilmItem = () => {
    return (
        <>
            <div className="filmItem__wrap">
                <div className="film__img">
                    <img src={require('/src/images/filmImage.png')} alt="filmImage" />
                </div>
                <div className="film__inform">
                    <div className="film__desc">
                        <div className="film__title">Pulp Fiction</div>
                        <div className="film__shrotDesc">Action and Adventure</div>
                    </div>
                    <div className="film__year">2004</div>
                </div>
            </div>
        </>
    );
};

export default FilmItem;
