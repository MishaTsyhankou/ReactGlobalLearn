import { FieldProps } from 'formik';
import React from 'react';
import Select from 'react-select';
// @ts-ignore
import { OptionsType, ValueType } from 'react-select/lib/types';
import styles from './Modal.module.scss';

interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps extends FieldProps {
    options: OptionsType<Option>;
    isMulti?: boolean;
    className?: string;
    placeholder?: string;
}

export const CustomSelect = ({ className, placeholder, field, form, options, isMulti = false }: CustomSelectProps) => {
    const onChange = (option: ValueType<Option | Option[]>) => {
        form.setFieldValue(
            field.name,
            isMulti ? (option as Option[]).map((item: Option) => item.value) : (option as Option).value
        );
    };

    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter((option: any) => field.value.indexOf(option.value) >= 0)
                : options.find((option: any) => option.value === field.value);
        } else {
            return isMulti ? [] : ('' as any);
        }
    };

    const customStyles = {
        control: (base: any, state: any) => ({
            ...base,
            background: '#323232',
            borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
            borderColor: state.isFocused ? ' gray' : 'gray',
            boxShadow: state.isFocused ? null : null,
            '&:hover': {
                borderColor: state.isFocused ? 'gray' : 'gray',
            },
        }),
        menu: (base: any) => ({
            ...base,
            borderRadius: 4,
            // kill the gap
            marginTop: 0,
        }),
        menuList: (base: any) => ({
            ...base,
            padding: 0,
        }),
    };

    return (
        <Select
            className={styles.filmGenreInput}
            name={field.name}
            value={getValue()}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            isMulti={isMulti}
            styles={customStyles}
        />
    );
};

export default CustomSelect;
