import React from 'react';
import { render } from '@testing-library/react';
import CardsBlock from '../components/Card/CardsBlock';

describe('CardsBlock', () => {
  const props = {
    dataApi: {
      info: { count: 10, next: 'string', pages: 1 },
      results: [
        { id: 1, image: 'image1.png', name: 'Card 1' },
        { id: 2, image: 'image2.png', name: 'Card 2' },
      ],
    },
    error: new Error('Unable to load data'),
    isLoaded: false,
  };

  test('renders error message', () => {
    const { getByRole, queryByText } = render(<CardsBlock {...props} />);
    const cardsElement = getByRole('cards', { hidden: true });

    expect(cardsElement).toBeInTheDocument();
    expect(queryByText('Nothing found')).not.toBeInTheDocument();
    expect(queryByText(`Error: ${props.error.message}`)).toBeInTheDocument();
  });

  test('renders loading spinner', () => {
    const { getByRole } = render(<CardsBlock {...props} />);
    const cardsElement = getByRole('cards');
    const loaderElement = cardsElement?.querySelector('.loader');
    expect(loaderElement).toBeNull();
  });

  test('renders card list', () => {
    const { getByRole } = render(<CardsBlock {...props} />);
    const cardsElement = getByRole('cards');
    const mainElement = cardsElement?.querySelector('.main-page_cards');
    expect(mainElement).toBeNull();
  });
});
