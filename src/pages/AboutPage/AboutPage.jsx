import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main className="about-page">
      <h2 className="about-page__title">About This Project</h2>

      <div className="about-page__card">
        <h3>What is GameVault?</h3>
        <p>
          GameVault is a front-end web application built with React.js.
          It allows users to browse, search, filter, and sort a list of video games.
          This project was built as Project 1 for the Web Applications Programming course.
        </p>
      </div>

      <div className="about-page__card">
        <h3>Features</h3>
        <ul>
          <li>Browse a list of 15 video games</li>
          <li>Search by game title or developer</li>
          <li>Filter by genre</li>
          <li>Sort by rating, year, or price</li>
          <li>Fully responsive design for mobile and desktop</li>
        </ul>
      </div>

      <div className="about-page__card">
        <h3>Team Members</h3>
        <ul>
          <li>Member 1 — UI & Components</li>
          <li>Member 2 — Data & Logic</li>
          <li>Member 3 — Deployment</li>
        </ul>
      </div>

      <div className="about-page__card">
        <h3>Built With</h3>
        <ul>
          <li>React.js</li>
          <li>React Router v6</li>
          <li>Vite</li>
          <li>CSS3</li>
        </ul>
      </div>
    </main>
  );
};

export default AboutPage;
