import { ChangeEvent } from 'react';
import React from 'react';
import { Dropdown } from '../DropDown/DropDown';
import { sortChanged } from '../../reducers/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Sorter.module.scss';

interface SortingProps {
    sort: string;
    handleSorting: (sorter: string) => void;
}

const Sorter = ({ sort, handleSorting }: SortingProps) => {
    const sortByParam = sort || 'release_date';
    const dispatch = useDispatch();

    const sortByOptions = [
        {
            value: 'release_date',
            text: 'release date',
        },
        {
            value: 'budget',
            text: 'budget',
        },
        {
            value: 'vote_average',
            text: 'rating',
        },
        {
            value: 'vote_count',
            text: 'popularity',
        },
    ];

    const onSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(sortChanged(e.target.value));
    };

    return (
        <div className={styles.sortingDropdown}>
            <label className={styles.label} htmlFor="sortingDropdown">
                Sort by:
            </label>
            <Dropdown options={sortByOptions} id="sortingDropdown" selected={sortByParam} onChange={onSortSelect} />
        </div>
    );
};

export default Sorter;
