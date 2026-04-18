import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/AuthPages/LoginPage';
import RegisterPage from './pages/AuthPages/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* 404 fallback */}
        <Route path="*" element={
          <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            paddingTop: '68px',
            fontFamily: 'Syne, sans-serif'
          }}>
            <span style={{ fontSize: '64px', color: 'var(--text-dim)' }}>◎</span>
            <h1 style={{ fontSize: '48px', fontWeight: 800, color: 'var(--text)', letterSpacing: '-2px' }}>404</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>Page not found.</p>
            <a href="/" style={{
              marginTop: '8px', padding: '10px 24px', background: 'var(--accent)',
              borderRadius: '8px', color: '#fff', fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px', fontWeight: 600
            }}>Back to Library</a>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
