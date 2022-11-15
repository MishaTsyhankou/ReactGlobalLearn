import { clsx } from 'clsx';
import React, { useState } from 'react';
import Sorter from '../Sorter/Sorter';
import styles from './Navigation.module.scss';

interface NavigationProps {
    selectedGenre: string;
    sort: string;
    handleToggle: (toggle: string) => void;
    handleSorting: (sorter: string) => void;
}

const Navigation = ({ selectedGenre, sort, handleToggle, handleSorting }: NavigationProps) => {
    const genres = [
        {
            id: 1,
            name: 'All',
        },
        {
            id: 2,
            name: 'Documentary',
        },
        {
            id: 3,
            name: 'Comedy',
        },
        {
            id: 4,
            name: 'Horror',
        },
        {
            id: 5,
            name: 'Crime',
        },
    ];

    const chosenGenre = selectedGenre ? selectedGenre : 'All';

    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {genres.map((genre) => {
                    return (
                        <li
                            role="menuitem"
                            className={clsx(styles.item, chosenGenre === genre.name && styles.active)}
                            key={genre.id}
                            tabIndex={0}
                            onClick={() => handleToggle(genre.name)}
                            onKeyDown={() => handleToggle(genre.name)}
                        >
                            <a className={styles.link} href="#genre.name">
                                {genre.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.selector}>
                <Sorter handleSorting={handleSorting} sort={sort} />
            </div>
        </div>
    );
};

export default Navigation;
