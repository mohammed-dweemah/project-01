import React, { useState, useMemo } from 'react';
import gamesData from '../../data/gamesData';
import GameCard from '../../components/GameCard/GameCard';
import './MainPage.css';

const GENRES = ['All', ...new Set(gamesData.map(g => g.genre))];

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating-desc');

  const processedGames = useMemo(() => {
    const filtered = gamesData.filter(game => {
      const matchesSearch =
        game.title.toLowerCase().includes(search.toLowerCase()) ||
        game.developer.toLowerCase().includes(search.toLowerCase());
      const matchesGenre = genre === 'All' || game.genre === genre;
      return matchesSearch && matchesGenre;
    });

    const [field, dir] = sortBy.split('-');
    const sorted = filtered.sort((a, b) => {
      if (a[field] < b[field]) return dir === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return dir === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [search, genre, sortBy]);

  return (
    <main className="main-page">
      <h2 className="main-page__title">🎮 Game Library</h2>

      <div className="main-page__controls">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search games..."
          className="main-page__search"
        />

        <select
          value={genre}
          onChange={e => setGenre(e.target.value)}
          className="main-page__select"
        >
          {GENRES.map(g => (
            <option key={g} value={g}>{g === 'All' ? 'All Genres' : g}</option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="main-page__select"
        >
          <option value="rating-desc">Highest Rated</option>
          <option value="rating-asc">Lowest Rated</option>
          <option value="year-desc">Newest First</option>
          <option value="year-asc">Oldest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc">A to Z</option>
        </select>
      </div>

      <p className="main-page__count">
        Showing {processedGames.length} of {gamesData.length} games
      </p>

      {processedGames.length > 0 ? (
        <div className="main-page__grid">
          {processedGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="main-page__empty">
          <p>No games found. Try a different search.</p>
          <button onClick={() => { setSearch(''); setGenre('All'); }}>
            Clear Filters
          </button>
        </div>
      )}
    </main>
  );
};

export default MainPage;
