import React, { useState } from 'react';
import Logo from '../Netflix/Logo';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Logo />
            </div>
        </>
    );
};

export default Footer;
