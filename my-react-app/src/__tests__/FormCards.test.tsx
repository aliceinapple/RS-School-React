import React from 'react';
import { render } from '@testing-library/react';
import FormCards from '../components/FormCards';

const testData = {
  username: 'John Doe',
  birthdayInput: '1990-01-01',
  citySelect: 'New York',
  genderSwitch: 'Male',
  profilePictureInput: 'image.jpg',
};

describe('FormCards', () => {
  test('renders without crashing', () => {
    render(<FormCards data={testData} />);
  });

  test('displays the correct name', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('Name: John Doe')).toBeInTheDocument();
  });

  test('displays the correct birthday', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('Birthday: 1990-01-01')).toBeInTheDocument();
  });

  test('displays the correct city', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('City: New York')).toBeInTheDocument();
  });

  test('displays the correct gender', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('Gender: Male')).toBeInTheDocument();
  });

  test('displays the correct profile picture', () => {
    const { getByText } = render(<FormCards data={testData} />);
    expect(getByText('image.jpg')).toBeInTheDocument();
  });
});
