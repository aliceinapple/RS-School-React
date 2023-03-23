import Form from '../components/Form';
import React, { RefObject } from 'react';
import { FormPageState, FormProps, FormState } from 'interfaces/interfaces';

class FormPage extends React.Component<FormProps, FormPageState> {
  nameInput: RefObject<HTMLInputElement>;
  birthdayInput: RefObject<HTMLInputElement>;
  citySelect: RefObject<HTMLSelectElement>;
  consentCheckbox: RefObject<HTMLInputElement>;
  genderSwitch: RefObject<HTMLInputElement>;
  profilePictureInput: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);

    this.state = {
      formStateArray: [],
    };

    this.nameInput = React.createRef();
    this.birthdayInput = React.createRef();
    this.citySelect = React.createRef();
    this.consentCheckbox = React.createRef();
    this.genderSwitch = React.createRef();
    this.profilePictureInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameInput = this.nameInput.current;
    const birthdayInput = this.birthdayInput.current;
    const citySelect = this.citySelect.current;
    const consentCheckbox = this.consentCheckbox.current;
    const genderSwitch = this.genderSwitch.current;
    const profilePictureInput = this.profilePictureInput.current;
    if (
      !nameInput ||
      !nameInput.value ||
      !birthdayInput ||
      !birthdayInput.value ||
      !citySelect ||
      !citySelect.value ||
      !consentCheckbox ||
      !consentCheckbox.checked ||
      !genderSwitch ||
      !genderSwitch.value
    ) {
      return;
    }

    const formData: FormState = {
      username: nameInput.value,
      birthdayInput: birthdayInput.value,
      citySelect: citySelect.value,
      consentCheckbox: consentCheckbox.checked,
      genderSwitch: genderSwitch.value,
      profilePictureInput: profilePictureInput ? profilePictureInput.value : '',
    };

    this.setState((prevState) => ({
      formStateArray: [...prevState.formStateArray, formData],
    }));
  }
  render() {
    return (
      <Form
        nameInput={this.props.nameInput}
        birthdayInput={this.props.birthdayInput}
        citySelect={this.props.citySelect}
        consentCheckbox={this.props.consentCheckbox}
        genderSwitch={this.props.genderSwitch}
        profilePictureInput={this.props.profilePictureInput}
      />
    );
  }
}

export default FormPage;
