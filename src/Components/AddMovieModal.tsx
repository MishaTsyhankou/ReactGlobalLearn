import React from 'react';
import { forwardRef } from 'react';
import { useState } from 'react';
//@ts-ignore
import DatePicker from 'react-datepicker';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import 'react-datepicker/dist/react-datepicker.css';
import Multiselect from 'multiselect-react-dropdown';
interface options {
    'a-z': string[];
    'z-a': string[];
}

const AddMovieModal = ({ setIsModalOpen, modalTitle, addModal }) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting Name ${name}`);
    };

    const onSelect = (selectedList, selectedItem) => {};

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
            <div className="modal__wrapper" onClick={() => setIsModalOpen(false)}>
                <div onClick={(e) => e.stopPropagation()} className="modal__body">
                    <a href="#" onClick={() => setIsModalOpen(false)} className="close__button" role={'button'}></a>

                    <div className="modal__header">{modalTitle}</div>
                    {addModal && (
                        <form onSubmit={handleSubmit}>
                            <section className="modal__content__row">
                                <div>
                                    <label htmlFor="filmTitle" className="modal__iput__title">
                                        Title:
                                    </label>
                                    <input
                                        id="filmTitle"
                                        className="filmTitileInput"
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="datePicker" className="modal__iput__title__date">
                                        Relase Date:
                                    </label>
                                    <DatePicker
                                        id="datePicker"
                                        placeholderText="Select Date"
                                        className="DatePicker"
                                        selected={startDate}
                                        onChange={(date: Date) => setStartDate(date)}
                                    />
                                </div>
                            </section>

                            <section className="modal__content__row">
                                <div>
                                    <label htmlFor="filmUrl" className="modal__iput__title">
                                        Movie URl:
                                    </label>
                                    <input
                                        id="filmUrl"
                                        className="filmUrlnput"
                                        type="text"
                                        placeholder="https://"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="filmRate" className="modal__iput__title">
                                        Rating:
                                    </label>
                                    <input
                                        id="filmRate"
                                        className="filmRateInput"
                                        type="text"
                                        placeholder="rate"
                                        value={rate}
                                        onChange={(e) => setRate(e.target.value)}
                                    />
                                </div>
                            </section>

                            <section className="modal__content__row">
                                <div>
                                    <label htmlFor="filmUrl" className="modal__iput__title">
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
                                                width: 500,
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

                                <div className="runtime__block">
                                    <label htmlFor="filmRuntime" className="modal__iput__title">
                                        Runtime:
                                    </label>
                                    <input
                                        id="filmRuntime"
                                        className="filmRunTimeInput"
                                        type="text"
                                        placeholder="minutes"
                                        value={runtime}
                                        onChange={(e) => setRuntime(e.target.value)}
                                    />
                                </div>
                            </section>

                            <section className="modal__content__row">
                                <div>
                                    <label htmlFor="overview" className="modal__iput__title">
                                        Overview:
                                    </label>
                                    <textarea
                                        id="overview"
                                        className="filmOverviewInput"
                                        placeholder="movie description"
                                        draggable="false"
                                        value={overview}
                                        onChange={(e) => setOverwiew(e.target.value)}
                                    ></textarea>
                                </div>
                            </section>

                            <div className="modal__footer">
                                <section className="modal__buttons">
                                    <div onClick={() => setIsModalOpen(true)} className="modal__button">
                                        Reset
                                    </div>

                                    <div onClick={() => setIsModalOpen(true)} className="modal__button">
                                        Submit
                                    </div>
                                </section>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default AddMovieModal;
