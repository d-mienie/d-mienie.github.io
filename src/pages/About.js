// src/pages/About.js
function About() {
  return (
    <div className="content page-shell">
      <div className="page-card">
        <h1 className="page-title">Hi, I'm Danté Mienie</h1>
        <p className="page-subtitle">Software Engineer</p>

        <div className="about-row">
          {/* Text section */}
          <div className="about-text" style={{ textAlign: 'left', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '1.2rem' }}>
              I’m a software engineer passionate about building systems that solve real problems,
              from AI-powered applications and automation workflows to intuitive user interfaces.
              My experience spans full-stack web development, data analytics, and systems
              programming, with projects ranging from a 2D AI medical interview chatbot to automated
              scheduling tools used in production.
            </p>

            <p style={{ marginBottom: '1.8rem' }}>
              I’m especially drawn to the intersection of technology and other fields, particularly
              finance and AI, and I thrive on turning complex challenges into scalable, impactful
              solutions.
            </p>

            <h3 className="skills-heading" style={{ marginTop: '2rem', marginBottom: '0.8rem' }}>
              Skills
            </h3>
            <p className="skills-text" style={{ marginBottom: '2rem' }}>
              <strong>Programming & Frameworks:</strong> Java, Python, JavaScript (React, Node.js), HTML/CSS, R, SQL <br />
              <strong>Systems & Tools:</strong> C, Rust, MIPS Assembly, Git, Linux, Airtable API, Google Apps Script <br />
              <strong>Data & AI:</strong> Machine Learning, Data Analysis, Automation, Statistical Modeling
            </p>
            <a
              className="btn-resume"
              href="/resume.pdf"
              download="Dante_Mienie_Resume.pdf"
            >
              Download Résumé
            </a>
          </div>

          {/* Photo */}
          <img
            src="/me.jpg"
            alt="Danté Mienie"
            className="about-photo"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
