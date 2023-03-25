import { FormCardData } from 'interfaces/interfaces';
import React from 'react';

class FormCards extends React.Component<FormCardData> {
  render() {
    const { username, birthdayInput, citySelect, genderSwitch, profilePictureInput } =
      this.props.data;
    return (
      <div className="form-cards">
        <div>Name: {username}</div>
        <div>Birthday: {birthdayInput}</div>
        <div>City: {citySelect}</div>
        <div>Gender: {genderSwitch}</div>
        <div>{profilePictureInput}</div>
      </div>
    );
  }
}

export default FormCards;
