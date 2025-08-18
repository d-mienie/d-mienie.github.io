import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="content about">
      <div className="page-card about-card">
        {/* Profile header */}
        <header className="about-hero">
          <h1 className="page-title about-title">Hi, I'm Danté Mienie</h1>
          <p className="page-subtitle about-role">Software Engineer</p>
          <img src="/me.jpg" alt="Danté Mienie" className="about-avatar" />
        </header>

        {/* Tech bio */}
        <div className="about-prose">
          <p>
            I’m a software engineer passionate about building systems that solve real problems,
            from AI-powered applications and automation workflows to intuitive user interfaces.
            My experience spans full-stack web development, data analytics, and systems programming,
            with projects ranging from a 2D AI medical interview chatbot to automated scheduling
            tools used in production.
          </p>
          <p>
            I’m especially drawn to the intersection of technology and other fields—particularly
            finance and AI—and I thrive on turning complex challenges into scalable, impactful
            solutions.
          </p>
        </div>

<h3 className="section-title">A bit about me</h3>

<div className="story-grid">
  <div className="story">
    <span className="story-icon" aria-hidden>🇿🇦</span>
    <div className="story-text">
      <div className="story-title">From South Africa</div>
      <div className="story-sub">now living in the USA</div>
    </div>
  </div>

  <div className="story">
    <span className="story-icon" aria-hidden>🎓</span>
    <div className="story-text">
      <div className="story-title">BSc, Computer Science</div>
      <div className="story-sub">University of Arizona</div>
    </div>
  </div>

  <div className="story">
    <span className="story-icon" aria-hidden>✈️</span>
    <div className="story-text">
      <div className="story-title">Travel lover</div>
      <div className="story-sub">curious about people & places</div>
    </div>
  </div>

  <div className="story">
    <span className="story-icon" aria-hidden>📸</span>
    <div className="story-text">
      <div className="story-title">Always making</div>
      <div className="story-sub">photos, side projects, memories</div>
    </div>
  </div>
</div>



        {/* Skills */}
        <h3 className="section-title">Skills</h3>
        <ul className="chip-list">
          <li className="chip">Java</li>
          <li className="chip">Python</li>
          <li className="chip">JavaScript (React, Node)</li>
          <li className="chip">HTML/CSS</li>
          <li className="chip">R</li>
          <li className="chip">SQL</li>
          <li className="chip">C</li>
          <li className="chip">Rust</li>
          <li className="chip">MIPS</li>
          <li className="chip">Git & Linux</li>
          <li className="chip">Airtable API</li>
          <li className="chip">Google Apps Script</li>
          <li className="chip">ML & Data Analysis</li>
          <li className="chip">Automation</li>
        </ul>

        <div className="about-cta">
          <a className="btn-resume" href="/resume.pdf" download="Dante_Mienie_Resume.pdf">
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
