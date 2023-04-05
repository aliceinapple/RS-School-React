import { FormProps, FormState } from 'interfaces/interfaces';
import React from 'react';

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
  }

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
      fileSelected,
      selectedFileName,
      handleFileChange,
    } = this.props;

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
              <option value="Select city">Select city</option>
              <option value="Minsk">Minsk</option>
              <option value="Brest">Brest</option>
              <option value="Gomel">Gomel</option>
              <option value="Grodno">Grodno</option>
              <option value="Vitebsk">Vitebsk</option>
              <option value="Mogilev">Mogilev</option>
            </select>
          </label>
          {showErrorMessages?.citySelect && (
            <span style={{ color: 'red' }}>Please select city</span>
          )}
          <div className="gender-input">
            <label>
              Male
              <input type="radio" name="gender" value="male" ref={maleGenderSwitch} />
            </label>
            <label>
              Female
              <input type="radio" name="gender" value="female" ref={femaleGenderSwitch} />
            </label>
          </div>
          {showErrorMessages?.genderSwitch && (
            <span style={{ color: 'red' }}>Please select gender</span>
          )}
          <label htmlFor="profile-picture-input" className="profile-input">
            Profile picture:
            <input
              id="profile-picture-input"
              type="file"
              ref={profilePictureInput}
              onChange={handleFileChange}
            />
            <span className="file-label">
              {fileSelected ? selectedFileName : 'File not selected'}
            </span>
          </label>
          {showErrorMessages?.photoSelect && (
            <span style={{ color: 'red' }}>Please select photo</span>
          )}
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
