import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../Components/Footer/Footer'


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn,
}));


describe('<Footer />', () => {
  

  it('should match snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });

  it('Check Footer', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toHaveClass('wrapper')
    expect(container.firstChild.firstChild).toHaveClass('text')
  });

  
});