import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card component', () => {
  const mockProps = {
    id: 1,
    image: 'https://example.com/image.jpg',
    name: 'Test Item',
  };

  test('renders card with correct props', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });
});
