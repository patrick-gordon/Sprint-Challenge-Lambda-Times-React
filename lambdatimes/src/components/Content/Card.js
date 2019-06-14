import React from 'react';
import { cardData } from '../../data';
import PropTypes from 'prop-types'

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="headline">{cardData.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} alt='author image' />
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  }).isRequired
}

export default Card;
