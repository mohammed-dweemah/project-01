import React from 'react';
import './AboutPage.css';

const team = [
  {
    name: 'Mohammed Dweemah',
    role: 'UI/UX & React Architecture',
    avatar: '◉',
    color: '#7c6aff',
    bio: 'Responsible for the component structure, routing, and overall design system.',
  },
  {
    name: 'Sara Martinez',
    role: 'Data Logic & State Management',
    avatar: '◈',
    color: '#ff6a9b',
    bio: 'Built the filtering, sorting algorithms, and React hooks integration.',
  },
  {
    name: 'David Chen',
    role: 'Deployment & Version Control',
    avatar: '◎',
    color: '#6affda',
    bio: 'Managed the GitHub workflow, CI pipeline, and Render.com deployment.',
  },
];

const techStack = [
  { name: 'React 18', desc: 'Functional components & hooks' },
  { name: 'React Router v6', desc: 'Client-side SPA routing' },
  { name: 'Vite', desc: 'Lightning-fast dev & build tool' },
  { name: 'CSS3', desc: 'Custom properties & responsive layout' },
  { name: 'Render.com', desc: 'Static site deployment' },
  { name: 'GitHub', desc: 'Version control & collaboration' },
];

const AboutPage = () => {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__glow" />
        <div className="about-hero__content">
          <span className="about-eyebrow">◈ About This Project</span>
          <h1 className="about-headline">
            GameVault
          </h1>
          <p className="about-tagline">
            A component-based React application built for the<br />
            <strong>Web Applications Programming &amp; Engineering</strong> course.
          </p>
        </div>
      </section>

      {/* Project Info */}
      <section className="about-section about-info">
        <div className="about-section__inner">
          <h2 className="about-section__title">Project Overview</h2>
          <div className="about-info__grid">
            <div className="about-info__card">
              <span className="about-info__icon" style={{ color: '#7c6aff' }}>⬡</span>
              <h3>What We Built</h3>
              <p>
                A fully responsive, multi-page Single Page Application (SPA) that lets users
                browse, search, filter, and sort a curated library of video games. Built
                entirely with client-side technologies — no backend required for Project 1.
              </p>
            </div>
            <div className="about-info__card">
              <span className="about-info__icon" style={{ color: '#ff6a9b' }}>⬡</span>
              <h3>Technical Focus</h3>
              <p>
                The project demonstrates mastery of ES6+ JavaScript, React functional components,
                the <code>useState</code> and <code>useMemo</code> hooks, native array methods
                (<code>.filter()</code>, <code>.sort()</code>), and responsive CSS design.
              </p>
            </div>
            <div className="about-info__card">
              <span className="about-info__icon" style={{ color: '#6affda' }}>⬡</span>
              <h3>Course Context</h3>
              <p>
                Submitted as <strong>Project 1</strong> for the MERN Stack module.
                Covers Topics 01–05. Deployed live on Render.com as a Static Site.
                The full MERN stack will be implemented in subsequent projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section about-team">
        <div className="about-section__inner">
          <h2 className="about-section__title">The Team</h2>
          <div className="about-team__grid">
            {team.map(member => (
              <div key={member.name} className="about-team__card">
                <div className="about-team__avatar" style={{ color: member.color, borderColor: member.color }}>
                  {member.avatar}
                </div>
                <h3 className="about-team__name">{member.name}</h3>
                <span className="about-team__role" style={{ color: member.color }}>{member.role}</span>
                <p className="about-team__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-section about-tech">
        <div className="about-section__inner">
          <h2 className="about-section__title">Tech Stack</h2>
          <div className="about-tech__grid">
            {techStack.map(tech => (
              <div key={tech.name} className="about-tech__item">
                <span className="about-tech__name">{tech.name}</span>
                <span className="about-tech__desc">{tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
