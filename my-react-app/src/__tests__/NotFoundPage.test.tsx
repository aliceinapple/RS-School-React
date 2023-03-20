import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../pages/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';

describe('NotFoundPage', () => {
  test('should render Header and a heading', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: '404 Not Found' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: '404 Not Found' })).toHaveTextContent(
      '404 Not Found'
    );
  });
});
