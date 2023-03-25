import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

describe('Form component', () => {
  it('renders all form elements', () => {
    const { getByLabelText, getByText } = render(<Form />);
    expect(getByLabelText('Name*:')).toBeInTheDocument();
    expect(getByLabelText('Birthday*:')).toBeInTheDocument();
    expect(getByLabelText('City:')).toBeInTheDocument();
    expect(getByLabelText('Male')).toBeInTheDocument();
    expect(getByLabelText('Female')).toBeInTheDocument();
    expect(getByLabelText('I consent to my personal data*')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('updates state when name input changes', () => {
    const { getByLabelText } = render(<Form />);
    const nameInput = getByLabelText('Name*:') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  it('shows error message when invalid name is entered', () => {
    const { getByLabelText, getByText } = render(<Form showErrorMessages={{ username: true }} />);
    const nameInput = getByLabelText('Name*:');
    fireEvent.change(nameInput, { target: { value: 'john doe' } });
    expect(
      getByText('Please enter a valid name (first letter capitalized, only letters)')
    ).toBeInTheDocument();
  });

  it('updates state when birthday input changes', () => {
    const { getByLabelText } = render(<Form />);
    const birthdayInput = getByLabelText('Birthday*:') as HTMLInputElement;
    fireEvent.change(birthdayInput, { target: { value: '1990-01-01' } });
    expect(birthdayInput.value).toBe('1990-01-01');
  });

  it('shows error message when invalid date is entered', () => {
    const { getByLabelText, getByText } = render(
      <Form showErrorMessages={{ birthdayInput: true }} />
    );
    const birthdayInput = getByLabelText('Birthday*:');
    fireEvent.change(birthdayInput, { target: { value: '2023-03-26' } });
    expect(getByText('Please enter a valid date')).toBeInTheDocument();
  });

  it('updates state when city is selected', () => {
    const { getByLabelText } = render(<Form />);
    const citySelect = getByLabelText('City:') as HTMLSelectElement;
    fireEvent.change(citySelect, { target: { value: 'Brest' } });
    expect(citySelect.value).toBe('Brest');
  });

  it('updates state when male gender is selected', () => {
    const { getByLabelText } = render(<Form />);
    const maleGenderSwitch = getByLabelText('Male') as HTMLInputElement;
    fireEvent.click(maleGenderSwitch);
    expect(maleGenderSwitch.checked).toBe(true);
  });
});
