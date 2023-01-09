import { ChangeEvent } from 'react';
import React from 'react';
import { Dropdown } from '../DropDown/DropDown';
import { sortChanged } from '../../reducers/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';

import styles from './Sorter.module.scss';

const Sorter = ({}) => {
    const sort = useSelector((state: RootState) => state.filters.sortBy);
    const sortByParam = sort;
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        navigate(`?sortBy=${e.target.value}`);
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
