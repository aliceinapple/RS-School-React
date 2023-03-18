import React from 'react';
import { render } from '@testing-library/react';
import HeaderTitle from '../components/HeaderTitle';

describe('Header title component', () => {
  test('should render "main" as the page title when on the main page', () => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/main',
      },
      writable: true,
    });

    const { getByText } = render(<HeaderTitle />);
    expect(getByText('Main page')).toBeInTheDocument();
  });

  test('should render "about" as the page title when on the about page', () => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/about',
      },
      writable: true,
    });

    const { getByText } = render(<HeaderTitle />);
    expect(getByText('About page')).toBeInTheDocument();
  });

  test('should render "404" as the page title when on an unknown page', () => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/unknown',
      },
      writable: true,
    });

    const { getByText } = render(<HeaderTitle />);
    expect(getByText('404 page')).toBeInTheDocument();
  });
});
