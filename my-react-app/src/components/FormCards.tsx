import { FormCardsProps } from 'interfaces/interfaces';
import React, { useEffect, useState } from 'react';

function FormCards({ data }: FormCardsProps) {
  const { name, birthday, city, gender, profilePicture } = data;
  const [fileUrl, setFileUrl] = useState<string>(() => {
    return profilePicture && profilePicture.length > 0
      ? URL.createObjectURL(profilePicture[0])
      : '';
  });

  useEffect(() => {
    if (profilePicture.length > 0) {
      setFileUrl(URL.createObjectURL(profilePicture[0]));
    }
  }, [profilePicture]);

  return (
    <div className="form-cards">
      <div>Name: {name}</div>
      <div>Birthday: {birthday}</div>
      <div>City: {city}</div>
      <div>Gender: {gender}</div>
      <div className="profile-picture" style={{ backgroundImage: `url(${fileUrl})` }}></div>
    </div>
  );
}

export default FormCards;
