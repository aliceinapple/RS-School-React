import React from 'react';
import { render } from '@testing-library/react';
import FormCards from '../components/Form/FormCards';

describe('FormCards component', () => {
  interface FormInputs {
    profilePicture: FileList;
    name: string;
    birthday: string;
    city: string;
    consent: boolean;
    gender: 'male' | 'female';
  }

  const data: FormInputs = {
    profilePicture: new FileList(),
    name: 'John Doe',
    birthday: '01/01/2000',
    city: 'New York',
    consent: true,
    gender: 'male',
  };

  test('renders correct name', () => {
    const { getByText } = render(<FormCards data={data} />);
    expect(getByText(`Name: ${data.name}`)).toBeInTheDocument();
  });

  test('renders correct birthday', () => {
    const { getByText } = render(<FormCards data={data} />);
    expect(getByText(`Birthday: ${data.birthday}`)).toBeInTheDocument();
  });

  test('renders correct city', () => {
    const { getByText } = render(<FormCards data={data} />);
    expect(getByText(`City: ${data.city}`)).toBeInTheDocument();
  });

  test('renders correct gender', () => {
    const { getByText } = render(<FormCards data={data} />);
    expect(getByText(`Gender: ${data.gender}`)).toBeInTheDocument();
  });
});
