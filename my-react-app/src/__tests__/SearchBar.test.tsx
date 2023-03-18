import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  const name = 'test-search';
  const searchValue = 'test-value';

  afterEach(() => {
    localStorage.clear();
  });

  test('should render an input with correct value', () => {
    localStorage.setItem(name, searchValue);
    render(<SearchBar name={name} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(searchValue);
  });

  test('should update input value on change', () => {
    render(<SearchBar name={name} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: searchValue } });
    expect(input.value).toBe(searchValue);
  });

  test('should save input value to localStorage on unmount', () => {
    render(<SearchBar name={name} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: searchValue } });
    fireEvent.blur(input);
    expect(localStorage.getItem(name)).toBe(searchValue);
  });

  test('should load search value from localStorage on initial render', () => {
    const name = 'test-name';
    const searchValue = 'test-value';
    localStorage.setItem(name, searchValue);
    render(<SearchBar name={name} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(searchValue);
  });
});
