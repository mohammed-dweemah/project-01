import React from 'react';
import './GameCard.css';

const statusColors = {
  Available: { bg: 'rgba(106,255,218,0.1)', color: '#6affda' },
  Sale: { bg: 'rgba(255,106,155,0.1)', color: '#ff6a9b' },
  New: { bg: 'rgba(124,106,255,0.15)', color: '#a08cff' },
};

const StarRating = ({ rating }) => {
  const stars = Math.round(rating / 2);
  return (
    <div className="stars" aria-label={`Rating: ${rating}/10`}>
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`star ${i <= stars ? 'star--filled' : ''}`}>★</span>
      ))}
      <span className="stars__num">{rating}</span>
    </div>
  );
};

const GameCard = ({ game }) => {
  const status = statusColors[game.status] || statusColors.Available;

  return (
    <article className="game-card">
      <div className="game-card__accent" />
      <div className="game-card__header">
        <div className="game-card__cover">
          <img src={game.cover} alt={game.title} loading="lazy" />
        </div>
        <div className="game-card__meta">
          <div className="game-card__top">
            <span
              className="game-card__status"
              style={{ background: status.bg, color: status.color }}
            >
              {game.status}
            </span>
            <span className="game-card__year">{game.year}</span>
          </div>
          <h3 className="game-card__title">{game.title}</h3>
          <p className="game-card__developer">{game.developer}</p>
        </div>
      </div>

      <p className="game-card__description">{game.description}</p>

      <div className="game-card__tags">
        {game.tags.map(tag => (
          <span key={tag} className="game-card__tag">{tag}</span>
        ))}
      </div>

      <div className="game-card__footer">
        <div className="game-card__info">
          <span className="game-card__genre">{game.genre}</span>
          <StarRating rating={game.rating} />
        </div>
        <span className="game-card__price">${game.price}</span>
      </div>
    </article>
  );
};

export default GameCard;
