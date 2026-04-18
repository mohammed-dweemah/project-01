import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder - no backend yet
    alert('Registration form is a placeholder (Project 1 - no backend).');
  };

  return (
    <main className="auth-page">
      <div className="auth-page__bg-glow auth-page__bg-glow--left" />
      <div className="auth-page__bg-glow auth-page__bg-glow--right" />

      <div className="auth-card">
        <div className="auth-card__header">
          <span className="auth-card__logo">◈</span>
          <h1 className="auth-card__title">Create Account</h1>
          <p className="auth-card__subtitle">Join GameVault and start exploring</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form__group">
            <label htmlFor="name" className="auth-form__label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="auth-form__input"
              autoComplete="name"
            />
          </div>

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
            <label htmlFor="password" className="auth-form__label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimum 8 characters"
              className="auth-form__input"
              autoComplete="new-password"
            />
          </div>

          <div className="auth-form__group">
            <label htmlFor="confirm" className="auth-form__label">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Repeat your password"
              className="auth-form__input"
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="auth-form__submit auth-form__submit--register">
            Create Account
          </button>
        </form>

        <p className="auth-card__footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-card__link">Sign in</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
