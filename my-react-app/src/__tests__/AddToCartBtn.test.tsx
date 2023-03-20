import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import AddToCartBtn from '../components/AddToCartBtn';

describe('Add to cart button', () => {
  test('renders button', () => {
    const { getByText } = render(<AddToCartBtn />);
    const button = getByText('Add to cart');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('add-to-cart_btn');
  });
});
