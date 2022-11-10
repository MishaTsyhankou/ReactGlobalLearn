import React from 'react';
import { useState } from 'react';
import ContextMenu from '../ContextMenu/ContexMenu';
import Modal from '../Modal/Modal';

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
}

const FilmItem = ({ id, title, poster_path, release_date, genres }: FilmData) => {
    const [isModalOpen, setIsOpen] = useState<boolean>(false);
    const [isDeleteModal, setIsDelete] = useState<boolean>(false);
    const [isEditModal, setIsEdit] = useState<boolean>(false);
    const releaseDate = new Date(release_date).getFullYear();
    return (
        <>
            <div className={styles.wrapper}>
                <ContextMenu setIsOpen={setIsOpen} />
                {isModalOpen && <Modal setIsOpen={setIsOpen} modalTitle={'Edit'} />}
                <a href="#">
                    <img src={poster_path} className={styles.image} alt={title} />
                    <div className={styles.description}>
                        <div>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.genre}>{genres.join(', ')}</p>
                        </div>
                        <div className={styles.year}>{releaseDate}</div>
                    </div>
                </a>
            </div>
        </>
    );
};

export default FilmItem;
