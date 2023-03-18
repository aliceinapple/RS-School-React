import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '../pages/AboutPage';
import { BrowserRouter } from 'react-router-dom';

describe('AboutPage', () => {
  test('should render Header and a heading', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );
    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'About' })).toHaveTextContent('About');
  });
});
