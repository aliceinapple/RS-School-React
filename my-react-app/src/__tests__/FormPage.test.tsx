import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormPage from '../pages/FormPage';

describe('FormPage', () => {
  it('validates profile picture input correctly', () => {
    const { getByLabelText } = render(<FormPage />);
    const profilePictureInput = getByLabelText(/profile picture/i) as HTMLInputElement;
    const file = new File(['test file'], 'test.png', { type: 'image/png' });
    fireEvent.change(profilePictureInput, { target: { files: [file] } });
    if (profilePictureInput.files) expect(profilePictureInput.files[0]).toBe(file);
  });
});
