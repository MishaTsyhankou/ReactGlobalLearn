import { ChangeEvent } from 'react';
import React from 'react';
import ChevronDown from '../../images/chevron.svg';

import styles from './DropDown.module.scss';

interface DropdownProps {
    options?: {
        value: string;
        text: string;
    }[];
    selected?: string;
    id?: string;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown = ({ options, selected, onChange, id }: DropdownProps) => {
    const optionItems = options.map((option) => (
        <option key={option.value} value={option.value}>
            {option.text}
        </option>
    ));

    return (
        <div className={styles.dropdown}>
            <select className={styles.select} id={id} value={selected} onChange={onChange}>
                {optionItems}
            </select>
            <img className={styles.icon} src={ChevronDown} alt="" width={22} height={10} />
        </div>
    );
};
