import Form from '../components/Form';
import React, { Fragment, RefObject } from 'react';
import { FormPageState, FormProps, FormState } from 'interfaces/interfaces';
import FormCards from '../components/FormCards';
import SuccessMessage from '../components/SuccessMessage';

class FormPage extends React.Component<FormProps, FormPageState> {
  nameInput: RefObject<HTMLInputElement>;
  birthdayInput: RefObject<HTMLInputElement>;
  citySelect: RefObject<HTMLSelectElement>;
  consentCheckbox: RefObject<HTMLInputElement>;
  maleGenderSwitch: RefObject<HTMLInputElement>;
  femaleGenderSwitch: RefObject<HTMLInputElement>;
  profilePictureInput: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);

    this.state = {
      formStateArray: [],
      showErrorMessages: {
        username: false,
        birthdayInput: false,
        consentCheckbox: false,
      },
      showSuccessMessage: false,
      profileImg: '',
      fileSelected: false,
      selectedFileName: '',
    };

    this.nameInput = React.createRef();
    this.birthdayInput = React.createRef();
    this.citySelect = React.createRef();
    this.consentCheckbox = React.createRef();
    this.maleGenderSwitch = React.createRef();
    this.femaleGenderSwitch = React.createRef();
    this.profilePictureInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length) {
      this.setState({
        fileSelected: true,
        selectedFileName: event.target.files[0].name,
      });
    } else {
      this.setState({
        fileSelected: false,
        selectedFileName: '',
      });
    }
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameInput = this.nameInput.current;
    const birthdayInput = this.birthdayInput.current;
    const citySelect = this.citySelect.current;
    const consentCheckbox = this.consentCheckbox.current;
    const maleGenderSwitch = this.maleGenderSwitch.current;
    const femaleGenderSwitch = this.femaleGenderSwitch.current;
    const profilePictureInput = this.profilePictureInput.current;

    if (
      !nameInput ||
      !birthdayInput ||
      !citySelect ||
      !consentCheckbox ||
      !maleGenderSwitch ||
      !femaleGenderSwitch ||
      !profilePictureInput
    ) {
      return;
    }

    const isNameValid = /^[A-Z][a-z]*$/.test(nameInput.value);
    const selectedDate = new Date(birthdayInput.value);
    const today = new Date();

    let hasErrors = false;
    const errors = {
      username: false,
      birthdayInput: false,
      consentCheckbox: false,
    };

    if (!isNameValid) {
      errors.username = true;
      hasErrors = true;
    }

    if (!birthdayInput.value || selectedDate > today) {
      errors.birthdayInput = true;
      hasErrors = true;
    }

    if (profilePictureInput.files) {
      const file = profilePictureInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const profileImg = reader.result;
        this.setState({ profileImg });
      };
      if (file) reader.readAsDataURL(file);
    }

    if (!consentCheckbox.checked) {
      errors.consentCheckbox = true;
      hasErrors = true;
    }

    if (hasErrors) {
      this.setState({ showErrorMessages: errors });
    } else {
      this.setState({
        showErrorMessages: { username: false, birthdayInput: false, consentCheckbox: false },
      });
      this.setFormState(
        nameInput,
        birthdayInput,
        citySelect,
        consentCheckbox,
        maleGenderSwitch,
        femaleGenderSwitch,
        profilePictureInput
      );
    }
  }

  setFormState(
    nameInput: HTMLInputElement,
    birthdayInput: HTMLInputElement,
    citySelect: HTMLSelectElement,
    consentCheckbox: HTMLInputElement,
    maleGenderSwitch: HTMLInputElement,
    femaleGenderSwitch: HTMLInputElement,
    profilePictureInput: HTMLInputElement
  ) {
    this.setState({ showSuccessMessage: true });

    setTimeout(() => {
      this.setState({
        showSuccessMessage: false,
        showErrorMessages: {
          username: false,
          birthdayInput: false,
          consentCheckbox: false,
        },
      });
      const formData: FormState = {
        username: nameInput.value,
        birthdayInput: birthdayInput.value,
        citySelect: citySelect.value,
        consentCheckbox: consentCheckbox.checked,
        genderSwitch: maleGenderSwitch.checked ? maleGenderSwitch.value : femaleGenderSwitch.value,
        profilePictureInput: this.state.profileImg,
      };

      this.setState((prevState) => ({
        formStateArray: [...prevState.formStateArray, formData],
      }));

      this.setState({
        fileSelected: false,
        selectedFileName: '',
        profileImg: '',
      });

      nameInput.value = '';
      birthdayInput.value = '';
      citySelect.value = 'Minsk';
      consentCheckbox.checked = false;
      if (profilePictureInput) profilePictureInput.value = '';
    }, 2000);
  }

  render() {
    const {
      formStateArray,
      showSuccessMessage,
      showErrorMessages,
      fileSelected,
      selectedFileName,
    } = this.state;

    return (
      <Fragment>
        <Form
          nameInput={this.nameInput}
          birthdayInput={this.birthdayInput}
          citySelect={this.citySelect}
          consentCheckbox={this.consentCheckbox}
          maleGenderSwitch={this.maleGenderSwitch}
          femaleGenderSwitch={this.femaleGenderSwitch}
          profilePictureInput={this.profilePictureInput}
          onFormSubmit={this.handleSubmit}
          showErrorMessages={showErrorMessages}
          fileSelected={fileSelected}
          selectedFileName={selectedFileName}
          handleFileChange={this.handleFileChange}
        />
        <div className="form-cards-area">
          {formStateArray.map((formState, index) => (
            <FormCards key={index} data={formState} />
          ))}
        </div>
        {showSuccessMessage && <SuccessMessage />}
      </Fragment>
    );
  }
}

export default FormPage;
