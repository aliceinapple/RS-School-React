import { RefObject } from 'react';

export interface CardProps {
  id: number;
  image: string;
  name: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: {
    name: string;
  };
}

export interface PopUpProps {
  popUpData: CardProps | null;
  hahdleClick: () => void;
}

export interface SearchBarProps {
  searchValue: (value: string) => void;
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

export interface IApi {
  info: {
    count: number;
    next: string;
    pages: number;
  };
  results: {
    id: number;
    name: string;
    image: string;
  }[];
}

export interface CardsProps {
  dataApi: IApi | null;
  error: Error | undefined;
  isLoaded: boolean;
}
