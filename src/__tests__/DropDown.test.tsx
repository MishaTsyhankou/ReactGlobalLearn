import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Sorter from '../Components/Sorter/Sorter'
import {Dropdown} from '../Components/DropDown/DropDown'





jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn,
}));

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => jest.fn()),
    useSelector: jest.fn(() => ({ sortBy: 'vote_average' })),
  }));



  const options = [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' }
];

describe('Dropdown', () => {
    test('renders options correctly', () => {
        const { getByText } = render(<Dropdown options={options} selected="option1" onChange={() => {}} id="test-dropdown" />);

        options.forEach(option => {
            expect(getByText(option.text)).toBeInTheDocument();
        });
    });

    test('calls onChange when an option is selected', () => {
        const onChange = jest.fn();
        const { getByText } = render(<Dropdown options={options} selected="option1" onChange={onChange} id="test-dropdown" />);
        const option2 = getByText('Option 2');

        fireEvent.click(option2);

    });
});