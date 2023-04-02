import Card from './Card';
import React from 'react';
import cardsData from '../data/cardsData.json';

function CardsBlock() {
  const cardsBlock = cardsData.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      image={card.image}
      name={card.name}
      weight={card.weight}
      portion={card.portion}
      price={card.price}
    />
  ));

  return (
    <div className="main-page_cards" role={'cards'}>
      {cardsBlock}
    </div>
  );
}

export default CardsBlock;
