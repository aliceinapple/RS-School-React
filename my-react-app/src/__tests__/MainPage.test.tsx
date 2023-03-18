import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from '../pages/MainPage';
import { BrowserRouter } from 'react-router-dom';

describe('MainPage', () => {
  test('should render Header, SearchBar, and CardsBlock', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
    const header = screen.getByRole('banner');
    const searchBar = screen.getByRole('textbox');
    const cardsBlock = screen.getByRole('main');

    expect(header).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(cardsBlock).toBeInTheDocument();
  });
});
