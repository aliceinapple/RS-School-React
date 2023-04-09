import React from 'react';
import { render } from '@testing-library/react';
import MainPage from '../pages/MainPage';

describe('MainPage', () => {
  test('should render MainPage with SearchBar and CardsBlock', async () => {
    const { getByRole } = render(<MainPage />);

    expect(getByRole('main-page')).toBeInTheDocument();
    expect(getByRole('search-bar')).toBeInTheDocument();
    expect(getByRole('cards')).toBeInTheDocument();
  });
});
