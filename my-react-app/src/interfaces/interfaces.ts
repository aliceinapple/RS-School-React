import { RefObject } from 'react';

export interface CardProps {
  id: number;
  image: string;
  name: string;
  weight: number;
  portion: string;
  price: number;
}

export interface SearchBarProps {
  name: string;
}

export interface TitleProps {
  pageTitle?: string;
}

export interface FormInputs {
  profilePicture: FileList;
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
