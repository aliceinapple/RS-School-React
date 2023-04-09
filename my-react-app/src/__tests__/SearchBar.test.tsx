import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  const searchValue = 'test-value';

  afterEach(() => {
    localStorage.clear();
  });

  test('should render an input with correct value', () => {
    localStorage.setItem('searchValue', searchValue);
    render(<SearchBar searchValue={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(searchValue);
  });

  test('should update input value on change', () => {
    const searchValue2 = 'new-value';
    render(<SearchBar searchValue={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: searchValue2 } });
    expect(input.value).toBe(searchValue2);
  });

  test('should save input value to localStorage on submit', () => {
    const searchValue3 = 'submit-value';
    const searchValueSpy = (value: string) => {
      expect(value).toBe(searchValue3);
    };
    render(<SearchBar searchValue={searchValueSpy} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: searchValue3 } });
    fireEvent.submit(screen.getByRole('search-bar'));
    expect(localStorage.getItem('searchValue')).toBe(searchValue3);
  });

  test('should load search value from localStorage on initial render', () => {
    localStorage.setItem('searchValue', searchValue);
    render(<SearchBar searchValue={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(searchValue);
  });
});
