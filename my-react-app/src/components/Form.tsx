import { FormProps } from 'interfaces/interfaces';
import React from 'react';

class Form extends React.Component<FormProps> {
  render() {
    const {
      nameInput,
      birthdayInput,
      citySelect,
      consentCheckbox,
      genderSwitch,
      profilePictureInput,
      onFormSubmit,
    } = this.props;
    return (
      <div className="form-page">
        <h2>Form Page</h2>
        <form className="form" onSubmit={onFormSubmit}>
          <label>
            Name:
            <input type="text" ref={nameInput} required />
          </label>
          <label>
            Birthday:
            <input
              type="date"
              ref={birthdayInput}
              required
              max={new Date().toISOString().split('T')[0]}
            />
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
            <input type="checkbox" ref={consentCheckbox} required />I consent to my personal data
          </label>
          <div>
            <label>
              Male
              <input type="radio" name="gender" value="male" ref={genderSwitch} required />
            </label>
            <label>
              Female
              <input type="radio" name="gender" value="female" ref={genderSwitch} required />
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
