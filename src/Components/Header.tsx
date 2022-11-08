import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import AddMovieModal from './AddMovieModal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>
            <div className="header__wrap">
                <div className="logo__wrap">
                    <div className="logo">
                        <div className="netflix__logo__net">netflix</div>
                        <div className="netflix__logo__roul">roulette</div>
                    </div>

                    <div className="addMovie">
                        <div onClick={() => setIsModalOpen(true)} className="addMovie__button">
                            + ADD MOVIE
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <AddMovieModal addModal={true} modalTitle={'Add Movie'} setIsModalOpen={setIsModalOpen} />
                )}

                <SearchComponent header={'Find Your Movie'} />
            </div>
        </>
    );
};

export default Header;
