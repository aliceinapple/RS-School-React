import { CardProps } from 'interfaces/interfaces';
import React, { Fragment, useState } from 'react';
import PopUp from './PopUp';

function Card(props: CardProps) {
  const { id, image, name } = props;
  const [popUpData, setPopUpData] = useState<CardProps | null>(null);
  const [isRender, setIsRender] = useState(false);

  const getInfo = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsRender(true);
    const parentNode = event.currentTarget as HTMLDivElement;
    fetch(`https://rickandmortyapi.com/api/character/${parentNode.id}`)
      .then((data) => data.json())
      .then((result) => {
        setPopUpData(result);
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
