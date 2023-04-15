import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import fetchMock from 'fetch-mock';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('Card component', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  test('should render card with correct name and image', async () => {
    const name = 'Rick Sanchez';
    const image = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
    const id = 1;

    render(
      <Provider store={store}>
        <Card id={id} name={name} image={image} />
      </Provider>
    );

    const card = screen.getByRole('card');
    const cardImage = screen.getByRole('img');
    const cardName = screen.getByText(name);

    expect(card).toBeInTheDocument();
    expect(cardImage).toHaveAttribute('src', image);
    expect(cardName).toBeInTheDocument();
  });

  test('should hide pop-up when close button is clicked', async () => {
    const name = 'Rick Sanchez';
    const image = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
    const id = 1;
    const mockResult = {
      name,
      image,
      id,
    };
    fetchMock.mock(`https://rickandmortyapi.com/api/character/${id}`, mockResult);

    render(
      <Provider store={store}>
        <Card id={id} name={name} image={image} />
      </Provider>
    );

    const card = screen.getByRole('card');
    fireEvent.click(card);

    const popUp = await screen.findByRole('popup');
    const closeButton = screen.getByText('x');

    expect(popUp).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(popUp).not.toBeInTheDocument();
  });
});
