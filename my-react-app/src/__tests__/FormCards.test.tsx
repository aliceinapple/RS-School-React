import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCards from '../components/FormCards';

const testData = {
  username: 'Homer Simpson',
  birthdayInput: '1990-01-01',
  citySelect: 'Springfield',
  genderSwitch: 'Male',
  profilePictureInput: 'image.jpg',
};

describe('FormCards', () => {
  test('renders without crashing', () => {
    render(<FormCards data={testData} />);
  });

  test('displays the correct name', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('Name: Homer Simpson')).toBeInTheDocument();
  });

  test('displays the correct birthday', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('Birthday: 1990-01-01')).toBeInTheDocument();
  });

  test('displays the correct city', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('City: Springfield')).toBeInTheDocument();
  });

  test('displays the correct gender', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('Gender: Male')).toBeInTheDocument();
  });
});
