import { ChangeEvent } from 'react';
import Logo from '../Netflix/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import styles from './FilmDetails.module.scss';

interface FilmDetails {
    options?: {
        value: string;
        text: string;
    }[];
    selected?: string;

    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleDetails: (arg: boolean, id?: number) => void;
    id?: number;
    title?: string;
    tagline?: string;
    vote_average?: number;
    vote_count?: number;
    release_date?: string;
    poster_path?: string;
    overview?: string;
    budget?: number;
    revenue?: number;
    genres?: string[];
    runtime?: number;
}

const FilmDetails = ({
    handleDetails,
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    runtime,
    overview,
}: FilmDetails) => {
    // const optionItems = options.map((option) => (
    //     <option key={option.value} value={option.value}>
    //         {option.text}
    //     </option>
    // ));
    console.log(title);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.details__header__wrapp}>
                    <div>
                        <Logo />
                    </div>
                    <div className={styles.lookup} onClick={() => handleDetails(false)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} size="lg" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.details__description__wrapp}>
                        <img src={poster_path} className={styles.image} alt={title} />
                        <div className={styles.description__wrapp}>
                            <div className={styles.description__header}>
                                <div className={styles.filmTitle}>{title}</div>
                                <div className={styles.voteAverage}>
                                    <div className={styles.voteAverageStyle}>{vote_average}</div>
                                </div>
                            </div>
                            <div className={styles.genre}>{genres.join(', ')}</div>
                            <div className={styles.description__time}>
                                <div className={styles.year}>{release_date.slice(0, 4)}</div>
                                <div className={styles.voteAverage}>
                                    {Math.floor(runtime / 60)}h {runtime % 60} min
                                </div>
                            </div>
                            <div className={styles.description___article}>{overview}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilmDetails;
