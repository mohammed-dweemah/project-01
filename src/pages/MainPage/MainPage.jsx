import React, { useState, useMemo } from 'react';
import gamesData from '../../data/gamesData';
import GameCard from '../../components/GameCard/GameCard';
import './MainPage.css';

const GENRES = ['All', ...new Set(gamesData.map(g => g.genre))];
const SORT_OPTIONS = [
  { value: 'rating-desc', label: 'Highest Rated' },
  { value: 'rating-asc', label: 'Lowest Rated' },
  { value: 'year-desc', label: 'Newest First' },
  { value: 'year-asc', label: 'Oldest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'title-asc', label: 'A → Z' },
];

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating-desc');

  // Combined filter + sort logic using native JS array methods
  const processedGames = useMemo(() => {
    // Step 1: Filter
    const filtered = gamesData.filter(game => {
      const matchesSearch =
        game.title.toLowerCase().includes(search.toLowerCase()) ||
        game.developer.toLowerCase().includes(search.toLowerCase()) ||
        game.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesGenre = genre === 'All' || game.genre === genre;
      return matchesSearch && matchesGenre;
    });

    // Step 2: Sort
    const [field, dir] = sortBy.split('-');
    const sorted = filtered.sort((a, b) => {
      let valA = a[field];
      let valB = b[field];
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();
      if (valA < valB) return dir === 'asc' ? -1 : 1;
      if (valA > valB) return dir === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [search, genre, sortBy]);

  const handleClearFilters = () => {
    setSearch('');
    setGenre('All');
    setSortBy('rating-desc');
  };

  const hasActiveFilters = search !== '' || genre !== 'All' || sortBy !== 'rating-desc';

  return (
    <main className="main-page">
      {/* Hero */}
      <section className="main-page__hero">
        <div className="main-page__hero-glow" />
        <div className="main-page__hero-content">
          <span className="main-page__eyebrow">◈ Game Library</span>
          <h1 className="main-page__headline">
            Discover Your<br />
            <span className="main-page__headline-accent">Next Adventure</span>
          </h1>
          <p className="main-page__subheadline">
            {gamesData.length} handpicked titles across every genre
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="main-page__controls">
        <div className="main-page__controls-inner">
          {/* Search */}
          <div className="search-bar">
            <span className="search-bar__icon">⌕</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search games, developers, tags..."
              className="search-bar__input"
            />
            {search && (
              <button className="search-bar__clear" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {/* Genre Filter */}
          <div className="filter-group">
            <select
              value={genre}
              onChange={e => setGenre(e.target.value)}
              className="filter-select"
            >
              {GENRES.map(g => (
                <option key={g} value={g}>{g === 'All' ? 'All Genres' : g}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="filter-group">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="filter-select"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button className="clear-btn" onClick={handleClearFilters}>
              Clear Filters
            </button>
          )}
        </div>

        {/* Results count */}
        <div className="main-page__results-bar">
          <span className="main-page__count">
            {processedGames.length === 0
              ? 'No results found'
              : `Showing ${processedGames.length} of ${gamesData.length} games`}
          </span>
          {genre !== 'All' && (
            <span className="main-page__active-filter">
              Genre: <strong>{genre}</strong>
            </span>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="main-page__grid-section">
        {processedGames.length > 0 ? (
          <div className="main-page__grid">
            {processedGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="main-page__empty">
            <span className="main-page__empty-icon">◎</span>
            <h3>No games found</h3>
            <p>Try adjusting your search or filters.</p>
            <button className="clear-btn" onClick={handleClearFilters}>Reset Filters</button>
          </div>
        )}
      </section>
    </main>
  );
};

export default MainPage;
