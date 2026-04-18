import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder - no backend yet
    alert('Login form is a placeholder (Project 1 - no backend).');
  };

  return (
    <main className="auth-page">
      <div className="auth-page__bg-glow auth-page__bg-glow--left" />
      <div className="auth-page__bg-glow auth-page__bg-glow--right" />

      <div className="auth-card">
        <div className="auth-card__header">
          <span className="auth-card__logo">◈</span>
          <h1 className="auth-card__title">Welcome Back</h1>
          <p className="auth-card__subtitle">Sign in to your GameVault account</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form__group">
            <label htmlFor="email" className="auth-form__label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="auth-form__input"
              autoComplete="email"
            />
          </div>

          <div className="auth-form__group">
            <label htmlFor="password" className="auth-form__label">
              Password
              <a href="#" className="auth-form__forgot">Forgot password?</a>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="auth-form__input"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="auth-form__submit">
            Sign In
          </button>
        </form>

        <p className="auth-card__footer">
          Don't have an account?{' '}
          <Link to="/register" className="auth-card__link">Create one</Link>
        </p>

        <div className="auth-card__divider"><span>or continue with</span></div>

        <div className="auth-card__socials">
          <button className="auth-social-btn">
            <span>G</span> Google
          </button>
          <button className="auth-social-btn">
            <span>⌘</span> Apple
          </button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
