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



describe('<Sorter />', () => {
  const TestComponent = <Sorter />;

  it('should match snapshot', () => {
    const { container } = render(<Sorter/>);

    expect(container).toMatchSnapshot();
  });

  it('default state', () => {
    const { container } = render(<Sorter/>);

    expect(container.firstChild).toHaveTextContent('Sort by');
    expect(container.firstChild).toHaveClass('sortingDropdown')
  });

  it('Click', () => {
    const { container } = render(<Sorter/>);

    expect(container.firstChild).toHaveTextContent('Sort by');
   fireEvent.click(container)
  });

  

  
  
});