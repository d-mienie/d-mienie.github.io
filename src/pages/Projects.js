// src/pages/Projects.js
import React from 'react';
import './Projects.css';
import kitpack from '../photos/kitpack.png';

function Projects() {
  const projects = [
    {
      type: 'youtube',
      title: '2048',
      id: 'Jyj3C8Cr3r4',
      desc: 'Classic 2048 implemented in Java with MVC architecture and a custom GUI.',
      stack: 'Java, Swing, OOP, MVC',
      links: [{ label: 'YouTube', href: 'https://youtu.be/Jyj3C8Cr3r4' }],
    },
    {
      type: 'youtube',
      title: 'Explore Arizona Website',
      id: 'T-84dj6MuM0',
      desc: 'Simple, responsive site highlighting Arizona attractions and trip ideas.',
      stack: 'HTML, CSS, JavaScript',
      links: [{ label: 'YouTube', href: 'https://youtu.be/T-84dj6MuM0' }],
    },
    {
      type: 'youtube',
      title: 'To-Do List',
      id: 'h308bYDqhDQ',
      desc: 'CLI to-do manager demonstrating Rust basics: ownership, structs, I/O.',
      stack: 'Rust',
      links: [{ label: 'YouTube', href: 'https://youtu.be/h308bYDqhDQ' }],
    },
    {
      type: 'image',
      title: 'Kit Checkout App',
      image: kitpack,
      alt: 'Kit checkout app UI',
      desc:
        'POS-style web app for checking out/returning kits & tech. Built for speed on iPad with Airtable and API automations. (Redacted demo to protect company info.)',
      stack: 'React, Node/Express, Airtable API',
      links: [],
    },
    {
      type: 'coming',
      title: 'InvestorAI — Coming Soon',
      desc:
        'FastAPI backend with financial APIs + ML models for AI-driven stock insights. Shipping cleaned demo shortly.',
      stack: 'FastAPI, Python, yFinance, Scikit-learn, Pandas',
    },
    {
      type: 'coming',
      title: 'Song App — Coming Soon',
      desc:
        'A lightweight app for finding new songs and interacting with friends.',
      stack: 'React, Node.js (WIP)',
    },
  ];

  return (
    <div className="content page-shell">
      <div className="page-card">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Selected work, demos, and what’s coming next.</p>

        {/* GitHub link */}
        <div style={{ marginBottom: '1.5rem' }}>
          <a
            className="btn-resume"
            href="https://github.com/d-mienie"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My GitHub
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div key={idx} className="project-card">
              <div className="project-media">
                {p.type === 'youtube' && (
                  <iframe
                    src={`https://www.youtube.com/embed/${p.id}?mute=1`}
                    title={p.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}

                {p.type === 'image' && (
                  <img src={p.image} alt={p.alt || p.title} loading="lazy" />
                )}

                {p.type === 'coming' && (
                  <div className="coming-soon">
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              {p.stack && <p className="project-stack">{p.stack}</p>}

              {/* {p.links && p.links.length > 0 && (
                <div className="project-links">
                  {p.links.map((link, i) => (
                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
