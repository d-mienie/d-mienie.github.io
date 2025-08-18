import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="content contact">
      <header className="contact-header">
        <h1 className="page-title">Contact Me</h1>
        <p className="page-subtitle">
          Whether you’re hiring, looking for a collaborator, or just want to say hi — I’d love to hear from you.
        </p>
      </header>

      <div className="contact-grid">
        {/* Jobs */}
        <div className="contact-item">
          <span className="ci-emoji" aria-hidden>📩</span>
          <div className="ci-body">
            <div className="ci-label">Jobs</div>
            <a className="ci-link" href="mailto:dantemienie@gmail.com">dantemienie@gmail.com</a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="contact-item">
          <span className="ci-emoji" aria-hidden>💼</span>
          <div className="ci-body">
            <div className="ci-label">LinkedIn</div>
            <a
              className="ci-link"
              href="https://www.linkedin.com/in/dante-mienie"
              target="_blank"
              rel="noopener noreferrer"
            >
              dante-mienie
            </a>
          </div>
        </div>
      </div>

        {/* Freelance */}
        <div className="contact-item">
          <span className="ci-emoji" aria-hidden>💻</span>
          <div className="ci-body">
            <div className="ci-label">Freelance Coding</div>
            <a className="ci-link" href="mailto:codewithdante@gmail.com">codewithdante@gmail.com</a>
          </div>
        </div>

        {/* TikTok */}
        <div className="contact-item">
          <span className="ci-emoji" aria-hidden>🎥</span>
          <div className="ci-body">
            <div className="ci-label">TikTok</div>
            <a
              className="ci-link"
              href="https://www.tiktok.com/@dev.with.dante"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dev.with.dante
            </a>
          </div>
        </div>


    </section>
  );
}
