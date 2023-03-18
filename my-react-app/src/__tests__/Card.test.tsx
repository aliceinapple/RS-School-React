import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
  const mockProps = {
    id: 1,
    image: 'https://example.com/image.jpg',
    name: 'Test Item',
    weight: 100,
    portion: '1 portion',
    price: 10,
  };

  it('renders card with correct props', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.weight} grams`)).toBeInTheDocument();
    expect(screen.getByText(mockProps.portion)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.price} $`)).toBeInTheDocument();
  });
});
