import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navigate from '../Components/Navigation/Navigation'





jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn,
}));

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => jest.fn()),
    useSelector: jest.fn(() => ({ showByGenre: 'all' })),
  }));


describe('<Navigate />', () => {
  const TestGenreToggler = <Navigate  />;

  it('should match snapshot', () => {
    const { container } = render(<Navigate/>);

    expect(container).toMatchSnapshot();
  });

  it('All button should be active by default', () => {
    const { getByText } = render(TestGenreToggler);

    const allButton = getByText('All');

    expect(allButton.parentElement).toHaveClass('active');
  });

  
});