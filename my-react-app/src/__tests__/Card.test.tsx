import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from '../components/Card';
import fetchMock from 'fetch-mock';

describe('Card component', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  test('should render card with correct name and image', async () => {
    const name = 'Rick Sanchez';
    const image = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
    const id = 1;

    render(<Card id={id} name={name} image={image} />);

    const card = screen.getByRole('card');
    const cardImage = screen.getByRole('img');
    const cardName = screen.getByText(name);

    expect(card).toBeInTheDocument();
    expect(cardImage).toHaveAttribute('src', image);
    expect(cardName).toBeInTheDocument();
  });

  // test('should render card with name and image', async () => {
  //   const data = {
  //     id: 1,
  //     image: 'test-image',
  //     name: 'test-name',
  //   };
  //   fetchMock.getOnce(`https://rickandmortyapi.com/api/character/${data.id}`, {
  //     body: data,
  //     headers: { 'content-type': 'application/json' },
  //   });

  //   render(<Card {...data} />);
  //   const card = screen.getByRole('card');
  //   expect(card).toBeInTheDocument();
  //   expect(screen.getByText(data.name)).toBeInTheDocument();
  //   expect(screen.getByRole('img')).toHaveAttribute('src', data.image);

  //   await waitFor(() => {
  //     expect(fetchMock.calls()).toHaveLength(1);
  //   });
  // });

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

    render(<Card id={id} name={name} image={image} />);

    const card = screen.getByRole('card');
    fireEvent.click(card);

    const popUp = await screen.findByRole('popup');
    const closeButton = screen.getByText('x');

    expect(popUp).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(popUp).not.toBeInTheDocument();
  });
});
