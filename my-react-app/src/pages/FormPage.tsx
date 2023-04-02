import Form from '../components/Form';
import React, { Fragment, useRef, useState } from 'react';
import { FormInputs } from 'interfaces/interfaces';
import FormCards from '../components/FormCards';
import SuccessMessage from '../components/SuccessMessage';

function FormPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStateArray, setFormStateArray] = useState<FormInputs[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleSubmit(formData: FormInputs) {
    setFormStateArray((prevState) => [...prevState, formData]);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 2000);
  }

  return (
    <Fragment>
      <Form onFormSubmit={handleSubmit} formRef={formRef} />
      <div className="form-cards-area">
        {formStateArray.map((formState, index) => (
          <FormCards key={index} data={formState} />
        ))}
      </div>
      {showSuccessMessage && <SuccessMessage />}
    </Fragment>
  );
}

export default FormPage;
