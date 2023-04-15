import React, { Fragment, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import { CardProps } from './interfaces';
import { useDispatch } from 'react-redux';
import { fetchCharacterData } from '../../requests';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Action } from 'interfaces/interfaces';

function Card(props: CardProps) {
  const { id, image, name } = props;
  const [popUpData, setPopUpData] = useState<CardProps | null>(null);
  const [isRender, setIsRender] = useState(false);

  const dispatch: ThunkDispatch<RootState, undefined, Action> = useDispatch();

  const getInfo = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsRender(true);
    const parentNode = event.currentTarget as HTMLDivElement;
    dispatch(fetchCharacterData(Number(parentNode.id))).then((result) => {
      setPopUpData(result.payload);
    });
  };

  const handleClick = () => {
    setIsRender(false);
  };

  return (
    <Fragment>
      <div role="card" className="card" onClick={getInfo} id={`${id}`}>
        <img className="card_img" src={image}></img>
        <p>{name}</p>
      </div>
      {isRender && <PopUp hahdleClick={handleClick} popUpData={popUpData} />}
    </Fragment>
  );
}

export default Card;
