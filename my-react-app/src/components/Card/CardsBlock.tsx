import React from 'react';
import Card from './Card';
import { CardsProps } from './interfaces';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function CardsBlock(props: CardsProps) {
  const dataApi = useSelector((state: RootState) => state.data.dataApi);

  if (props.error) {
    return <div role="cards">Error: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div role="cards" className="loader"></div>;
  } else {
    return (
      <div className="main-page_cards" role="cards">
        {dataApi?.results ? (
          dataApi.results.map((data) => (
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
