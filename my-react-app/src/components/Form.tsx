import { FormProps, FormState } from 'interfaces/interfaces';
import React from 'react';

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      selectedOption: 'male',
      fileSelected: false,
      selectedFileName: '',
    };
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

  handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  render() {
    const {
      nameInput,
      birthdayInput,
      citySelect,
      consentCheckbox,
      maleGenderSwitch,
      femaleGenderSwitch,
      profilePictureInput,
      onFormSubmit,
      showErrorMessages,
    } = this.props;

    const { selectedOption, fileSelected, selectedFileName } = this.state;

    return (
      <div className="form-page">
        <form className="form" onSubmit={onFormSubmit}>
          <label className="name-input">
            Name*:
            <input type="text" ref={nameInput} />
          </label>
          {showErrorMessages?.username && (
            <span style={{ color: 'red' }}>
              Please enter a valid name (first letter capitalized, only letters)
            </span>
          )}
          <label className="birthday-input">
            Birthday*:
            <input type="date" ref={birthdayInput} />
          </label>
          {showErrorMessages?.birthdayInput && (
            <span style={{ color: 'red' }}>Please enter a valid date</span>
          )}
          <label className="city-select" htmlFor="city-dropdown">
            City:
            <select id="city-dropdown" ref={citySelect}>
              <option value="Minsk">Minsk</option>
              <option value="Brest">Brest</option>
              <option value="Gomel">Gomel</option>
              <option value="Grodno">Grodno</option>
              <option value="Vitebsk">Vitebsk</option>
              <option value="Mogilev">Mogilev</option>
            </select>
          </label>
          <div className="gender-input">
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                ref={maleGenderSwitch}
                checked={selectedOption === 'male'}
                onChange={this.handleRadioChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                ref={femaleGenderSwitch}
                checked={selectedOption === 'female'}
                onChange={this.handleRadioChange}
              />
            </label>
          </div>
          <label htmlFor="profile-picture-input" className="profile-input">
            Profile picture:
            <input
              id="profile-picture-input"
              type="file"
              ref={profilePictureInput}
              onChange={this.handleFileChange}
            />
            <span className="file-label">
              {fileSelected ? selectedFileName : 'File not selected'}
            </span>
          </label>
          <label className="consent-input">
            I consent to my personal data*
            <input type="checkbox" ref={consentCheckbox} />
          </label>
          {showErrorMessages?.consentCheckbox && (
            <span style={{ color: 'red' }}>You must agree to continue</span>
          )}
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
