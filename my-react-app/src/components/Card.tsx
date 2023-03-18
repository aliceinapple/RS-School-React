import { CardProps } from 'interfaces/interfaces';
import React from 'react';
import AddToCartBtn from './AddToCartBtn';

class Card extends React.Component<CardProps> {
  render() {
    const { id, image, name, weight, portion, price } = this.props;

    return (
      <div className="card" id={`${id}`} role={'card'}>
        <div className="card_img" style={{ backgroundImage: `url(${image})` }}></div>
        <h2>{name}</h2>
        <p>{weight} grams</p>
        <p>{portion}</p>
        <p>{price} $</p>
        <AddToCartBtn />
      </div>
    );
  }
}

export default Card;
