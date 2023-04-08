import { CardProps } from 'interfaces/interfaces';
import React, { Fragment, useState } from 'react';
import PopUp from './PopUp';

function Card(props: CardProps) {
  const { id, image, name } = props;
  const [popUp, setPopUp] = useState<CardProps | null>(null);
  const [error, setError] = useState<Error>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRender, setIsRender] = useState(false);

  const getInfo = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsRender(true);
    const parentNode = event.currentTarget as HTMLDivElement;
    fetch(`https://rickandmortyapi.com/api/character/${parentNode.id}`)
      .then((data) => data.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPopUp(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const handleClick = () => {
    setIsRender(false);
  };

  return (
    <Fragment>
      <div onClick={getInfo} id={`${id}`}>
        <p>{name}</p>
        <img src={image}></img>
      </div>
      {isRender && <PopUp hahdleClick={handleClick} popUp={popUp} />}
    </Fragment>
  );
}

export default Card;
