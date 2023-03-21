import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
  test('renders two links with correct text', () => {
    render(
      <BrowserRouter>
        <Header pageTitle="Test Page Title" />
      </BrowserRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('Main');
    expect(links[1]).toHaveTextContent('About');
    expect(links[2]).toHaveTextContent('Form');
  });
});
