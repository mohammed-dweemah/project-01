import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Library' },
    { to: '/about', label: 'About' },
    { to: '/login', label: 'Login' },
  ];

  return (
    <header className={`header `}>
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">◈</span>
          <span className="header__logo-text">GameVault</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`header__nav-link ${location.pathname === to ? 'header__nav-link--active' : ''}`}
            >
              {label}
              {location.pathname === to && <span className="header__nav-dot" />}
            </Link>
          ))}
          <Link to="/register" className="header__cta">
            Register
          </Link>
        </nav>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
