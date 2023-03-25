import { FormCardData } from 'interfaces/interfaces';
import React from 'react';

class FormCards extends React.Component<FormCardData> {
  render() {
    const {
      username,
      birthdayInput,
      citySelect,
      consentCheckbox,
      genderSwitch,
      profilePictureInput,
    } = this.props.data;
    return (
      <div>
        <div>{username}</div>
        <div>{birthdayInput}</div>
        <div>{citySelect}</div>
        <div>{consentCheckbox ? 'Yes' : 'No'}</div>
        <div>{genderSwitch}</div>
        <div>{profilePictureInput}</div>
      </div>
    );
  }
}

export default FormCards;
