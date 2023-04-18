import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormPage from '../pages/FormPage';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('FormPage', () => {
  test('validates profile picture input correctly', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const profilePictureInput = getByLabelText(/profile picture/i) as HTMLInputElement;
    const file = new File(['test file'], 'test.png', { type: 'image/png' });
    fireEvent.change(profilePictureInput, { target: { files: [file] } });
    if (profilePictureInput.files) expect(profilePictureInput.files[0]).toBe(file);
  });

  test('submitting the form adds a new FormCards component', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const nameInput = screen.getByLabelText('Name:');
    const birthdayInput = screen.getByLabelText('Birthday:');
    const city = screen.getByLabelText('City:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(birthdayInput, { target: { value: '1996-05-07' } });
    fireEvent.change(city, { target: { value: 'Minsk' } });

    fireEvent.click(submitButton);

    const formCardsComponent = screen.getByRole('form');
    expect(formCardsComponent).toBeInTheDocument();
  });
});
