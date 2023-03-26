import { FormEvent, RefObject } from 'react';

export interface CardProps {
  id: number;
  image: string;
  name: string;
  weight: number;
  portion: string;
  price: number;
}

export interface SearchBarState {
  searchValue: string;
}

export interface SearchBarProps {
  name: string;
}

export interface TitleState {
  currentPageTitle: string;
}

export interface TitleProps {
  pageTitle?: string;
}

export interface SetPageTitle {
  setCurrentPageTitle: (title: string) => void;
}

export interface FormState {
  username?: string;
  birthdayInput?: string;
  citySelect?: string;
  consentCheckbox?: boolean;
  genderSwitch?: string;
  profilePictureInput?: string | ArrayBuffer | null;
  selectedOption?: string;
  fileSelected?: boolean;
  selectedFileName?: string;
}

export interface FormProps {
  nameInput?: RefObject<HTMLInputElement>;
  birthdayInput?: RefObject<HTMLInputElement>;
  citySelect?: RefObject<HTMLSelectElement>;
  consentCheckbox?: RefObject<HTMLInputElement>;
  maleGenderSwitch?: RefObject<HTMLInputElement>;
  femaleGenderSwitch?: RefObject<HTMLInputElement>;
  profilePictureInput?: RefObject<HTMLInputElement>;
  onFormSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  showErrorMessages?: {
    username?: boolean;
    birthdayInput?: boolean;
    consentCheckbox?: boolean;
  };
  fileSelected?: boolean;
  selectedFileName?: string;
  handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormPageState extends FormState {
  formStateArray: FormState[];
  showErrorMessages: {
    username?: boolean;
    birthdayInput?: boolean;
    consentCheckbox?: boolean;
  };
  showSuccessMessage: boolean;
  profileImg?: string | ArrayBuffer | null;
}

export interface FormCardData {
  data: FormState;
}
