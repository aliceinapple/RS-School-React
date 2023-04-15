import React from 'react';
import { render } from '@testing-library/react';
import MainPage from '../pages/MainPage';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('MainPage', () => {
  test('should render MainPage with SearchBar and CardsBlock', async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(getByRole('main-page')).toBeInTheDocument();
    expect(getByRole('search-bar')).toBeInTheDocument();
    expect(getByRole('cards')).toBeInTheDocument();
  });
});
