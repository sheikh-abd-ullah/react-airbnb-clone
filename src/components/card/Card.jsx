import React from 'react';
import './card.css'

const Card = ({image, star, rating, country, description, price, available, quantity}) => {
  let sold;
  let backgroundColor;


  if (available === 0) {
    sold = "Sold Out"
    backgroundColor = false;
  } else {
    sold = "Online"
    backgroundColor = true;
  }
  return (
    <div className="card">
      <div className={backgroundColor ? 'green badge' : 'none badge'}>{sold}</div>
      <img className="person-image" src={image} alt="Swimmer" />
      <div className="star-section">
        <img className="star" src={star} alt="star" />
        <span className="space">{rating}</span>
        <span className="grey">{country}</span>
      </div>
      <div>
        <p className="card-para margining">{description}</p>
        <p className="card-para">
          <span className="bold">{price}</span>
          {quantity}
        </p>
      </div>
    </div>
  );
}

export default Card;
