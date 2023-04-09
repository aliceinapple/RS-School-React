import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsBlock from '../components/CardsBlock';
import cardsData from '../data/cardsData.json';

describe('CardsBlock', () => {
  const mockProps = {
    dataApi: {
      info: { count: 10, next: 'string', pages: 1 },
      results: { id: 1, name: 'Vika', image: 'image' },
    },
    error: 'error message',
    isLoaded: false,
  };

  test('should render all cards', () => {
    render(<CardsBlock {...mockProps} />);
    const cards = screen.getAllByRole('card');

    expect(cards.length).toBe(cardsData.length);

    cardsData.forEach((card, index) => {
      expect(cards[index]).toHaveTextContent(card.name);
      expect(cards[index]).toHaveTextContent(`${card.weight} grams`);
      expect(cards[index]).toHaveTextContent(card.portion);
      expect(cards[index]).toHaveTextContent(`${card.price} $`);
    });
  });
});
