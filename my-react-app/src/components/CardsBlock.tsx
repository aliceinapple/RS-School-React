import React from 'react';
import { CardsProps } from 'interfaces/interfaces';
import Card from './Card';

function CardsBlock(props: CardsProps) {
  if (props.error) {
    return <div role="cards">Error: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div role="cards" className="loader"></div>;
  } else {
    return (
      <div className="main-page_cards" role="cards">
        {props.dataApi?.results ? (
          props.dataApi.results.map((data) => (
            <Card key={data.id} id={data.id} image={data.image} name={data.name} />
          ))
        ) : (
          <p style={{ fontSize: '40px' }}>Nothing found</p>
        )}
      </div>
    );
  }
}

export default CardsBlock;
