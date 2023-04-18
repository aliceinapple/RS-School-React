import Form from '../components/Form/Form';
import React, { Fragment, useRef, useState } from 'react';
import FormCards from '../components/Form/FormCards';
import SuccessMessage from '../components/SuccessMessage';
import { FormInputs } from 'components/Form/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { setFormCards, store } from '../store';

function FormPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const formStateArray = useSelector(
    (state: ReturnType<typeof store.getState>) => state.form.formStateArray
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleSubmit(formData: FormInputs) {
    const reader = new FileReader();
    reader.onload = () => {
      formData.profilePicture = reader.result as string;
      dispatch(setFormCards([...formStateArray, formData]));
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        if (formRef.current) {
          formRef.current.reset();
        }
      }, 2000);
    };
    if (formData.profilePicture && formData.profilePicture.length > 0) {
      reader.readAsDataURL(formData.profilePicture[0] as File);
    } else {
      formData.profilePicture = '';
      dispatch(setFormCards([...formStateArray, formData]));
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        if (formRef.current) {
          formRef.current.reset();
        }
      }, 2000);
    }
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
