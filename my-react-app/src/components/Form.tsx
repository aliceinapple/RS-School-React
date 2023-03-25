import { FormProps, FormState } from 'interfaces/interfaces';
import React from 'react';

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      selectedOption: 'male',
    };
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

    const { selectedOption } = this.state;

    return (
      <div className="form-page">
        <h2>Form Page</h2>
        <form className="form" onSubmit={onFormSubmit}>
          <label>
            Name:
            <input type="text" ref={nameInput} />
            {showErrorMessages.username && (
              <span style={{ color: 'red' }}>
                Please enter a valid name (first letter capitalized, only letters)
              </span>
            )}
          </label>
          <label>
            Birthday:
            <input type="date" ref={birthdayInput} />
            {showErrorMessages.birthdayInput && (
              <span style={{ color: 'red' }}>Please enter a valid date</span>
            )}
          </label>
          <label>
            City:
            <select ref={citySelect}>
              <option value="Minsk">Minsk</option>
              <option value="Brest">Brest</option>
              <option value="Gomel">Gomel</option>
              <option value="Grodno">Grodno</option>
              <option value="Vitebsk">Vitebsk</option>
              <option value="Mogilev">Mogilev</option>
            </select>
          </label>
          <label>
            <input type="checkbox" ref={consentCheckbox} />I consent to my personal data
            {showErrorMessages.consentCheckbox && (
              <span style={{ color: 'red' }}>You must agree to continue</span>
            )}
          </label>
          <div>
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
          <label>
            Profile picture:
            <input type="file" ref={profilePictureInput} />
          </label>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
