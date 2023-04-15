import React from 'react';
import { render } from '@testing-library/react';
import { FormProps } from 'interfaces/interfaces';
import Form from '../components/Form/Form';

describe('Form', () => {
  const onSubmitMock = () => {};
  const formRefMock = { current: document.createElement('form') };

  const defaultProps: FormProps = {
    onFormSubmit: onSubmitMock,
    formRef: formRefMock,
  };

  test('should render all form elements correctly', () => {
    const { getByLabelText, getByText } = render(<Form {...defaultProps} />);

    expect(getByLabelText('Name:')).toBeInTheDocument();
    expect(getByLabelText('Birthday:')).toBeInTheDocument();
    expect(getByLabelText('City:')).toBeInTheDocument();
    expect(getByLabelText('Male')).toBeInTheDocument();
    expect(getByLabelText('Female')).toBeInTheDocument();
    expect(getByLabelText('Profile picture:')).toBeInTheDocument();
    expect(getByLabelText('I consent to my personal data')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });
});
