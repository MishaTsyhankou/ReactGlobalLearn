import { clsx } from 'clsx';
import React, { useState } from 'react';
import Sorter from '../Sorter/Sorter';
import { filtersChanged } from '../../reducers/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import styles from './Navigation.module.scss';

interface NavigationProps {
    selectedGenre?: string;

    handleToggle?: (toggle: string) => void;
}

const Navigation = ({ selectedGenre, handleToggle }: NavigationProps) => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state: RootState) => state.filters.activeFilter);
    const [active, setActive] = useState('inActive')
    const clickOnGenre =(arg: any)=> {

        return (event: React.MouseEvent) => {
            dispatch(filtersChanged(arg))
            setActive('active')
            event.preventDefault();
          }
       
    }
    const genres = [
        {
            id: 1,
            name: 'All',
            default: 'active'
        },
        {
            id: 2,
            name: 'Documentary',
            default: 'inActive'
        },
        {
            id: 3,
            name: 'Comedy',
            default: 'inActive'
        },
        {
            id: 4,
            name: 'Horror',
            default: 'inActive'
        },
        {
            id: 5,
            name: 'Crime',
            default: 'inActive'
        },
    ];

    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {genres.map((genre) => {
                    return (
                        <li
                            role="menuitem"
                            className={`${clsx(styles.item, activeFilter === genre.name && styles.active)} ${genre.default}`}
                            key={genre.id}
                            tabIndex={0}
                            onClick={clickOnGenre(genre.name)}
                            onKeyDown={() => handleToggle(genre.name)}
                        >
                            <a className={styles.link} >
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
