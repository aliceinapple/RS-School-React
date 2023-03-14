import { CardProps } from 'interfaces/interfaces';
import React from 'react';

class Card extends React.Component<CardProps> {
  render() {
    const { image, name, weight, portion, price } = this.props;

    return (
      <div className="card">
        <div className="card_img" style={{ backgroundImage: `url(${image})` }}></div>
        <h2>{name}</h2>
        <p>{weight} grams</p>
        <p>{portion}</p>
        <p>{price} $</p>
      </div>
    );
  }
}

export default Card;
