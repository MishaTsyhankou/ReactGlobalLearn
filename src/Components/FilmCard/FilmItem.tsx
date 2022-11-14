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
    handleDetails: (arg: boolean, id: number) => void;
}

const FilmItem = ({ id, title, poster_path, release_date, genres, handleDetails }: FilmData) => {
    const [isModalOpen, setIsOpen] = useState<boolean>(false);
    const [isModalDelete, setIsDelete] = useState<boolean>(false);
    const [isEditModal, setIsEdit] = useState<boolean>(false);
    const releaseDate = new Date(release_date).getFullYear();
    const handleModal = (arg0?: any, arg1?: any) => {
        setIsOpen(true);
        setIsEdit(arg0);
        setIsDelete(arg1);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <ContextMenu handleModal={handleModal} />
                {isModalOpen && <Modal setIsOpen={setIsOpen} modalTitle={'Edit'} isModalDelete={isModalDelete} />}
                <a onClick={() => handleDetails(true, id)} href="#">
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
