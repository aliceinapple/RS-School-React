import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInputs, FormProps } from './interfaces';

function Form({ onFormSubmit, formRef }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ reValidateMode: 'onChange' });

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="form-page">
      <form className="form" role="form" onSubmit={handleSubmit(onFormSubmit)} ref={formRef}>
        <label className="name-input">
          Name:
          <input
            type="text"
            {...register('name', {
              required: true,
              pattern: /^[A-Z][a-z]*$/,
            })}
          />
        </label>
        {errors.name && errors.name.type === 'required' && (
          <span style={{ color: 'red' }}>Please enter your name</span>
        )}
        {errors.name && errors.name.type === 'pattern' && (
          <span style={{ color: 'red' }}>
            Please enter a valid name (first letter capitalized, only letters)
          </span>
        )}

        <label className="birthday-input">
          Birthday:
          <input
            type="date"
            {...register('birthday', {
              required: true,
              validate: {
                max: (value: string) =>
                  value <= today || 'Please enter a date that is not after today',
                future: (value: string) =>
                  new Date(value).getTime() <= new Date().getTime() ||
                  'Please enter a date that is not in the future',
              },
            })}
          />
        </label>
        {errors.birthday && errors.birthday.type === 'required' && (
          <span style={{ color: 'red' }}>Please enter your birthday</span>
        )}
        {errors.birthday && errors.birthday.type === 'max' && (
          <span style={{ color: 'red' }}>{errors.birthday.message}</span>
        )}
        {errors.birthday && errors.birthday.type === 'future' && (
          <span style={{ color: 'red' }}>{errors.birthday.message}</span>
        )}

        <label className="city-select" htmlFor="city-dropdown">
          City:
          <select id="city-dropdown" {...register('city', { required: true })}>
            <option value="">Select city</option>
            <option value="Minsk">Minsk</option>
            <option value="Brest">Brest</option>
            <option value="Gomel">Gomel</option>
            <option value="Grodno">Grodno</option>
            <option value="Vitebsk">Vitebsk</option>
            <option value="Mogilev">Mogilev</option>
          </select>
        </label>
        {errors.city && <span style={{ color: 'red' }}>Please select your city</span>}

        <div className="gender-input">
          <label>
            Male
            <input type="radio" value="male" {...register('gender', { required: true })} />
          </label>
          <label>
            Female
            <input type="radio" value="female" {...register('gender', { required: true })} />
          </label>
        </div>
        {errors.gender && <span style={{ color: 'red' }}>Please select your gender</span>}

        <label htmlFor="profile-picture-input" className="profile-input">
          Profile picture:
          <input
            id="profile-picture-input"
            type="file"
            accept=".jpg, .jpeg, .png, .svg"
            {...register('profilePicture', { required: true })}
          />
        </label>
        <span className="file-label">
          {errors.profilePicture && (
            <span style={{ color: 'red' }}>Please select your profile picture</span>
          )}
        </span>

        <label className="consent-input">
          I consent to my personal data
          <input type="checkbox" {...register('consent', { required: true })} />
        </label>
        {errors.consent && <span style={{ color: 'red' }}>You must agree to continue</span>}

        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
