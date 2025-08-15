// src/pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="content page-shell">
      <div className="page-card">
        <h1 className="page-title">Contact Me</h1>
        <p className="page-subtitle">
          Whether you’re hiring, looking for a collaborator, or just want to say hi, I’d love to hear from you!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
          <p>
            📩 <strong>Jobs:</strong>{' '}
            <a href="mailto:dantemienie@gmail.com">dantemienie@gmail.com</a>
          </p>
          <p>
            💻 <strong>Freelance Coding:</strong>{' '}
            <a href="mailto:codewithdante@gmail.com">codewithdante@gmail.com</a>
          </p>
          <p>
            🎥 <strong>TikTok:</strong>{' '}
            <a href="https://www.tiktok.com/@dev.with.dante" target="_blank" rel="noopener noreferrer">
              @dev.with.dante
            </a>
          </p>
          <p>
            📸 <strong>Instagram:</strong>{' '}
            <a href="https://www.instagram.com/devwithdante" target="_blank" rel="noopener noreferrer">
              @devwithdante
            </a>
          </p>
          <p>
            💼 <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/dante-mienie" target="_blank" rel="noopener noreferrer">
              dante-mienie
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
