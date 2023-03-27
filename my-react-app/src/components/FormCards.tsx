import { FormCardData } from 'interfaces/interfaces';
import React from 'react';
import profile from '../assets/icons/ico_profile_picture.png';

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
        {profilePictureInput ? (
          <div
            className="profile-picture"
            style={{ backgroundImage: `url(${profilePictureInput as string})` }}
          ></div>
        ) : (
          <div className="profile-picture" style={{ backgroundImage: `url(${profile})` }}></div>
        )}
      </div>
    );
  }
}

export default FormCards;
