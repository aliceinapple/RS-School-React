import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsBlock from '../components/CardsBlock';
import cardsData from '../data/cardsData.json';

describe('CardsBlock', () => {
  test('should render all cards', () => {
    render(<CardsBlock />);
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
