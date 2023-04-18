import React from 'react';
import { FormCardsProps } from './interfaces';

function FormCards({ data }: FormCardsProps) {
  const { name, birthday, city, gender, profilePicture } = data;

  return (
    <div className="form-cards">
      <div>Name: {name}</div>
      <div>Birthday: {birthday}</div>
      <div>City: {city}</div>
      <div>Gender: {gender}</div>
      <div className="profile-picture" style={{ backgroundImage: `url(${profilePicture})` }}></div>
    </div>
  );
}

export default FormCards;
