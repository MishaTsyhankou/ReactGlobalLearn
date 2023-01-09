import React, { useState } from 'react';
import SearchComponent from '../Search/SearchComponent';
import styles from './Header.module.scss';
import Logo from '../Netflix/Logo';
import Modal from '../Modal/Modal';
import { BrowserRouter as Router, Link } from 'react-router-dom';

interface HeaderProps {
    searchValue: string;
    handleSearch: (arg0: string) => void;
}

const Header = ({ searchValue, handleSearch }: HeaderProps) => {
    const [isModalOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <Logo />
                    <button onClick={() => setIsOpen(true)} className={styles.button}>
                        + Add movie
                    </button>
                </div>

                <SearchComponent searchValue={searchValue} handleSearch={handleSearch} />

                {isModalOpen && <Modal isModalDelete={false} id setIsOpen={setIsOpen} modalTitle={'Add Movie'} />}
            </div>
        </>
    );
};

export default Header;
