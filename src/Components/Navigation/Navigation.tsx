import { clsx } from 'clsx';
import React, { useState } from 'react';
import Sorter from '../Sorter/Sorter';
import { filtersChanged } from '../../reducers/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import styles from './Navigation.module.scss';

interface NavigationProps {
    selectedGenre: string;

    handleToggle: (toggle: string) => void;
}

const Navigation = ({ selectedGenre, handleToggle }: NavigationProps) => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state: RootState) => state.filters.activeFilter);
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

    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {genres.map((genre) => {
                    return (
                        <li
                            role="menuitem"
                            className={clsx(styles.item, activeFilter === genre.name && styles.active)}
                            key={genre.id}
                            tabIndex={0}
                            onClick={() => dispatch(filtersChanged(genre.name))}
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
                <Sorter />
            </div>
        </div>
    );
};

export default Navigation;
