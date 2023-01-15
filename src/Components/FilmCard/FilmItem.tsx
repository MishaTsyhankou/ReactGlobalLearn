import React from 'react';
import { useState, useEffect } from 'react';
import ContextMenu from '../ContextMenu/ContexMenu';
import Modal from '../Modal/Modal';
import badLoad from '../../images/badLoad.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { activeFilm } from '../../reducers/filmsSlice';
import { BrowserRouter as Router, Route, Routes, Link, useSearchParams } from 'react-router-dom';

import styles from './FilmItem.module.scss';
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
    handleDetails: (arg: boolean, id: number) => void;
}

const FilmItem = ({ id, title, poster_path, release_date, genres, handleDetails }: FilmData) => {
    const [isModalOpen, setIsOpen] = useState<boolean>(false);
    const [isModalDelete, setIsDelete] = useState<boolean>(false);
    const [isEditModal, setIsEdit] = useState<boolean>(false);
    const releaseDate = new Date(release_date).getFullYear();
    const [imageFailed, setImageFailed] = useState(false);
    const dispatch = useDispatch();

    const handleModal = (arg0?: any, arg1?: any) => {
        setIsOpen(true);
        setIsEdit(arg0);
        setIsDelete(arg1);
    };
    const handleActiveFilm = (id: number) => {
        dispatch(activeFilm(id));
        handleDetails(true, id);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <ContextMenu id={id} handleModal={handleModal} />
                {isModalOpen && (
                    <Modal id={id} setIsOpen={setIsOpen} modalTitle={'Edit'} isModalDelete={isModalDelete} />
                )}

                <Link onClick={() => handleActiveFilm(id)} to={`/movie/${id}`}>
                    {!imageFailed ? (
                        <img
                            src={poster_path}
                            className={styles.image}
                            alt={title}
                            onError={() => setImageFailed(true)}
                            loading="lazy"
                        />
                    ) : (
                        <img src={badLoad} alt={title} className={styles.badLoad} />
                    )}

                    <div className={styles.description}>
                        <div>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.genre}>{genres.join(', ')}</p>
                        </div>
                        <div className={styles.year}>{releaseDate}</div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default FilmItem;
