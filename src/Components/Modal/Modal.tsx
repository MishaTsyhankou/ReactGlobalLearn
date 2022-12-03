import React from 'react';

import { useState } from 'react';
import { useFormik, Field, Form, Formik, FormikProps, FormikProvider } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms, addNewFilms, removeFilms, updateFilm } from '../../reducers/filmsSlice';
import { RootState, AppDispatch } from '../../store/store';
import Multiselect from 'multiselect-react-dropdown';
import CustomSelect from './CustomSelect';

// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export interface FormValues {
    singleLanguage: string;
    multiLanguages: string[];
}

const defaultValues: FormValues = {
    singleLanguage: '',
    multiLanguages: [],
};

import styles from './Modal.module.scss';
import { FilmData } from '../FilmDirectory/FilmDirectory';

const GenreOptions = [
    {
        label: 'Documentary',
        value: 'Documentary',
    },
    {
        label: 'Comedy',
        value: 'Comedy',
    },
    {
        label: 'Horror',
        value: 'Horror',
    },
    {
        label: 'Crime',
        value: 'Crime',
    },
    {
        label: 'Action',
        value: 'Action',
    },
    {
        label: 'Science Fiction',
        value: 'Science Fiction',
    },
    {
        label: 'Adventure',
        value: 'Adventure',
    },
    {
        label: 'Mystery',
        value: 'Mystery',
    },
    {
        label: 'Family',
        value: 'Family',
    },
];

interface options {
    'a-z': string[];
    'z-a': string[];
}

// @ts-ignore
const AddMovieModal = ({ setIsOpen, modalTitle, isModalDelete, id }) => {
    const genres: string[] = ['Documentaruy', 'Comedy', 'Horror', 'Crime'];
    const dispatch = useDispatch<AppDispatch>();
    const currentFilm = useSelector((state: RootState) => state.films.films.filter((film: FilmData) => film.id === id));
    const validate = (values: any) => {
        const errors: any = {};
        if (!values.title) {
            errors.title = 'Cant be empty!!!';
        }
        if (!values.relaseDate) {
            errors.relaseDate = 'Cant be empty!!!';
        }
        if (!values.url) {
            errors.url = 'Cant be empty!!!';
        }
        if (!values.rating && !/^[0-9]+$/.test(values.rating) && Number(values.rating) < 10) {
            errors.rating = 'Cant be empty and should be number';
        }
        if (!values.runtime && !/^[0-9]+$/.test(values.runtime)) {
            errors.runtime = 'Cant be empty!!!';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            title: modalTitle === 'Add Movie' ? '' : currentFilm[0].title,
            relaseDate: modalTitle === 'Add Movie' ? '' : currentFilm[0].release_date,
            url: modalTitle === 'Add Movie' ? '' : currentFilm[0].poster_path,
            rating: modalTitle === 'Add Movie' ? '' : currentFilm[0].vote_average,
            genre: modalTitle === 'Add Movie' ? '' : currentFilm[0].genres,
            runtime: modalTitle === 'Add Movie' ? '' : currentFilm[0].runtime,
            overview: modalTitle === 'Add Movie' ? '' : currentFilm[0].overview,
            id: id,
        },
        validate,
        onSubmit: (values) => {
            dispatch(updateFilm(values));
            setIsOpen(false);
            console.log(values);
            dispatch(fetchFilms());
        },
    });

    const handleDelete = () => {
        dispatch(removeFilms(id));
        dispatch(fetchFilms());
        setIsOpen(false);
    };

    return (
        <FormikProvider value={formik}>
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

                                    <form onSubmit={formik.handleSubmit}>
                                        <section className={styles.modal__content__row}>
                                            <div>
                                                <label htmlFor="title" className={styles.modal__iput__title}>
                                                    Title:
                                                </label>
                                                <input
                                                    id="title"
                                                    className={styles.filmTitileInput}
                                                    name="title"
                                                    type="text"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.title}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.errors.title && formik.touched.title ? (
                                                    <div className={styles.errors}>{formik.errors.title}</div>
                                                ) : null}
                                            </div>

                                            <div>
                                                <label htmlFor="relaseDate" className={styles.modal__iput__title__date}>
                                                    Relase Date:
                                                </label>

                                                <input
                                                    id="relaseDate"
                                                    className={styles.filmDateInput}
                                                    placeholder="date"
                                                    type="text"
                                                    name="relaseDate"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.relaseDate}
                                                />
                                                {formik.errors.relaseDate && formik.touched.relaseDate ? (
                                                    <div className={styles.errors}>{formik.errors.relaseDate}</div>
                                                ) : null}
                                            </div>
                                        </section>

                                        <section className={styles.modal__content__row}>
                                            <div>
                                                <label htmlFor="url" className={styles.modal__iput__title}>
                                                    Movie URl:
                                                </label>
                                                <input
                                                    id="url"
                                                    className={styles.filmUrlnput}
                                                    type="text"
                                                    placeholder="https://"
                                                    name="url"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.url}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="rating" className={styles.modal__iput__title}>
                                                    Rating:
                                                </label>
                                                <input
                                                    id="rating"
                                                    className={styles.filmRateInput}
                                                    type="text"
                                                    placeholder="rate"
                                                    name="rating"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.rating}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.errors.rating && formik.touched.rating ? (
                                                    <div className={styles.errors}>{formik.errors.rating}</div>
                                                ) : null}
                                            </div>
                                        </section>

                                        <section className={styles.modal__content__row}>
                                            <div>
                                                <label htmlFor="genre" className={styles.modal__iput__title}>
                                                    Genre:
                                                </label>

                                                <Field
                                                    className={styles.filmGenreInput}
                                                    name="genre"
                                                    options={GenreOptions}
                                                    component={CustomSelect}
                                                    placeholder="Select Genre"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.genre}
                                                    isMulti={true}
                                                />
                                            </div>

                                            <div className={styles.runtime__block}>
                                                <label htmlFor="runtime" className={styles.modal__iput__title}>
                                                    Runtime:
                                                </label>
                                                <input
                                                    id="runtime"
                                                    className={styles.filmRunTimeInput}
                                                    type="text"
                                                    placeholder="minutes"
                                                    name="runtime"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.runtime}
                                                    onBlur={formik.handleBlur}
                                                />
                                                {formik.errors.runtime && formik.touched.runtime ? (
                                                    <div className={styles.errors}>{formik.errors.runtime}</div>
                                                ) : null}
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
                                                    name="overview"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.overview}
                                                ></textarea>
                                            </div>
                                        </section>
                                        <div className={styles.modal__footer}>
                                            <button
                                                className={styles.button}
                                                onClick={() => setIsOpen(false)}
                                                role={'button'}
                                            >
                                                Cancel
                                            </button>
                                            <button className={styles.button} role={'button'} type="submit">
                                                Submit
                                            </button>
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
                                    <div className={styles.modal__footer}>
                                        <button
                                            className={styles.button}
                                            onClick={() => setIsOpen(false)}
                                            role={'button'}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className={styles.button}
                                            onClick={handleDelete}
                                            role={'button'}
                                            type="submit"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </section>
                            </>
                        )}
                    </div>
                </div>
            </>
        </FormikProvider>
    );
};

export default AddMovieModal;
