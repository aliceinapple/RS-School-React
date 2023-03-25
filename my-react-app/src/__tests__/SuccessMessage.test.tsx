import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import SuccessMessage from '../components/SuccessMessage';

describe('Success message', () => {
  test('renders without crashing', () => {
    render(<SuccessMessage />);
  });

  test('renders the correct message', () => {
    const { getByText } = render(<SuccessMessage />);
    expect(getByText('Validation was successful')).toBeInTheDocument();
  });
});
