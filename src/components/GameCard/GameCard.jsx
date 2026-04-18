import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <div className="game-card__header">
        <h3 className="game-card__title">{game.title}</h3>
        <span className="game-card__year">{game.year}</span>
      </div>

      <p className="game-card__developer">By: {game.developer}</p>
      <p className="game-card__genre">Genre: {game.genre}</p>
      <p className="game-card__description">{game.description}</p>

      <div className="game-card__footer">
        <span className="game-card__rating">⭐ {game.rating} / 10</span>
        <span className="game-card__price">${game.price}</span>
      </div>
    </div>
  );
};

export default GameCard;
