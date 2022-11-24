import React from 'react';
import { forwardRef } from 'react';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import Multiselect from 'multiselect-react-dropdown';

import styles from './Modal.module.scss';

interface options {
    'a-z': string[];
    'z-a': string[];
}
// @ts-ignore
const AddMovieModal = ({ setIsOpen, modalTitle, isModalDelete, setIsModalOpen }) => {
    const [startDate, setStartDate] = useState(null);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [rate, setRate] = useState('');
    const [runtime, setRuntime] = useState('');
    const [overview, setOverwiew] = useState('');
    const genresSelect = [
        { name: 'Documentaruy', id: 1 },
        { name: 'Comedy', id: 2 },
        { name: 'Horror', id: 3 },
        { name: 'Crime', id: 4 },
    ];
    // @ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting Name ${name}`);
    };
    // @ts-ignore

    const onSelect = (selectedList, selectedItem) => {};
    // @ts-ignore
    const onRemove = (selectedList, removedItem) => {};

    const genres: string[] = ['Documentaruy', 'Comedy', 'Horror', 'Crime'];

    const genresItems = genres.map((genre) => {
        return (
            <option key={uuidv4()} value={genre}>
                {genre}
            </option>
        );
    });

    return (
        <>
            <div className={styles.modal__wrapper} onClick={() => setIsOpen(false)}>
                <div onClick={(e) => e.stopPropagation()} className={styles.modal__body}>
                    <div className={styles.modal__contetn_wrapper}>
                        <div className={styles.close_btn_block}>
                            <span className={styles.close_btn} onClick={() => setIsOpen(false)} role={'button'}>
                                &times;
                            </span>
                        </div>
                        {!isModalDelete && (
                            <>
                                <div className={styles.modal__header}>
                                    {modalTitle === 'Add Movie' ? 'Add Movie' : 'Edit Movie'}
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <section className={styles.modal__content__row}>
                                        <div>
                                            <label htmlFor="filmTitle" className={styles.modal__iput__title}>
                                                Title:
                                            </label>
                                            <input
                                                id="filmTitle"
                                                className={styles.filmTitileInput}
                                                type="text"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="datePicker" className={styles.modal__iput__title__date}>
                                                Relase Date:
                                            </label>

                                            <input
                                                id="filmRate"
                                                className={styles.filmDateInput}
                                                type="text"
                                                placeholder="date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                            />
                                        </div>
                                    </section>

                                    <section className={styles.modal__content__row}>
                                        <div>
                                            <label htmlFor="filmUrl" className={styles.modal__iput__title}>
                                                Movie URl:
                                            </label>
                                            <input
                                                id="filmUrl"
                                                className={styles.filmUrlnput}
                                                type="text"
                                                placeholder="https://"
                                                value={url}
                                                onChange={(e) => setUrl(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="filmRate" className={styles.modal__iput__title}>
                                                Rating:
                                            </label>
                                            <input
                                                id="filmRate"
                                                className={styles.filmRateInput}
                                                type="text"
                                                placeholder="rate"
                                                value={rate}
                                                onChange={(e) => setRate(e.target.value)}
                                            />
                                        </div>
                                    </section>

                                    <section className={styles.modal__content__row}>
                                        <div>
                                            <label htmlFor="filmUrl" className={styles.modal__iput__title}>
                                                Genre:
                                            </label>
                                            <Multiselect
                                                showArrow
                                                options={[
                                                    { name: 'Documentaruy', id: 1 },
                                                    { name: 'Comedy', id: 2 },
                                                    { name: 'Horror', id: 3 },
                                                    { name: 'Crime', id: 4 },
                                                ]}
                                                //selectedValues={selectedValue} // Preselected value to persist in dropdown
                                                onSelect={onSelect}
                                                onRemove={onRemove}
                                                displayValue="name"
                                                showCheckbox
                                                style={{
                                                    chips: {
                                                        background: 'none',
                                                    },
                                                    multiselectContainer: {
                                                        color: 'white',
                                                        background: '#333333',
                                                        height: 37,
                                                        width: 305,
                                                        borderRadius: 4,
                                                        fontFamily: 'generalFont',
                                                    },
                                                    searchBox: {
                                                        border: 'none',
                                                    },
                                                    optionContainer: {
                                                        // To change css for option container
                                                        background: '#232323',
                                                        border: 'none',
                                                        fontFamily: 'generalFont',
                                                    },
                                                }}
                                            />
                                        </div>

                                        <div className={styles.runtime__block}>
                                            <label htmlFor="filmRuntime" className={styles.modal__iput__title}>
                                                Runtime:
                                            </label>
                                            <input
                                                id="filmRuntime"
                                                className={styles.filmRunTimeInput}
                                                type="text"
                                                placeholder="minutes"
                                                value={runtime}
                                                onChange={(e) => setRuntime(e.target.value)}
                                            />
                                        </div>
                                    </section>

                                    <section className={styles.modal__content__row}>
                                        <div>
                                            <label htmlFor="overview" className={styles.modal__iput__title}>
                                                Overview:
                                            </label>
                                            <textarea
                                                id="overview"
                                                className={styles.filmOverviewInput}
                                                placeholder="movie description"
                                                draggable="false"
                                                value={overview}
                                                onChange={(e) => setOverwiew(e.target.value)}
                                            ></textarea>
                                        </div>
                                    </section>

                                    <div className={styles.modal__footer}>
                                        <section className={styles.modal__buttons}>
                                            <div onClick={() => setIsOpen(true)} className={styles.modal__button}>
                                                Reset
                                            </div>

                                            <div onClick={() => setIsOpen(true)} className={styles.modal__button}>
                                                Submit
                                            </div>
                                        </section>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>

                    {isModalDelete && (
                        <>
                            <div className={styles.modal__header}>DELETE MOVIE</div>
                            <section className={styles.modal__content__row}>
                                <div className={styles.delete__modal__text}>
                                    Are you sure you want to delete this movie?
                                </div>
                            </section>

                            <section className={styles.modal__buttons}>
                                <div onClick={() => setIsModalOpen(true)} className={styles.modal__button}>
                                    Confirm
                                </div>
                            </section>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default AddMovieModal;
