import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('SearchBar component', () => {
  const searchValue = 'new-value';

  test('should update input value on change', () => {
    render(
      <Provider store={store}>
        <SearchBar handleSearchSubmit={() => {}} />
      </Provider>
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: searchValue } });
    expect(input.value).toBe(searchValue);
  });

  test('should load search value from localStorage on initial render', () => {
    localStorage.setItem('searchValue', searchValue);
    render(
      <Provider store={store}>
        <SearchBar handleSearchSubmit={() => {}} />
      </Provider>
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(searchValue);
  });
});
