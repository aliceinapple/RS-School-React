import React from 'react';
import { CardsProps } from 'interfaces/interfaces';
import Card from './Card';

function CardsBlock(props: CardsProps) {
  if (props.error) {
    return <div>Ошибка: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="main-page_cards" role={'cards'}>
        {props.dataApi &&
          props.dataApi.results.map((data) => (
            <Card key={data.id} id={data.id} image={data.image} name={data.name} />
          ))}
      </div>
    );
  }
}

export default CardsBlock;
