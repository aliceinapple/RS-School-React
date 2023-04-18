import { RefObject } from 'react';

export interface FormInputs {
  profilePicture: FileList | string;
  name: string;
  birthday: string;
  city: string;
  consent: boolean;
  gender: 'male' | 'female';
}

export interface FormCardsProps {
  data: FormInputs;
}

export interface FormProps {
  onFormSubmit: (data: FormInputs) => void;
  formRef: RefObject<HTMLFormElement>;
}

export interface FormState {
  formStateArray: FormInputs[];
}
