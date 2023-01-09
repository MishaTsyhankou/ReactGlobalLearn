import React from 'react';
import styles from './Page404.module.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import errorPage from '../../images/errorPage.jpeg';

const Page404 = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <div>Error 404</div>

                <div>This page not Found</div>
                <Link to="/">
                    <div>Back on Main</div> <img src={errorPage} alt={'Error page Image'} className={styles.badLoad} />
                </Link>
            </div>
        </div>
    );
};

export default Page404;
