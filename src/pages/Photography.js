// src/pages/Photography.js
import './Photography.css';

import elephant from '../photos/elephant.JPG';
import lion from '../photos/lion.JPG';
import hippo from '../photos/hippo.JPG';
import oldSanJuan2 from '../photos/old san juan 2.JPG';
import puertoRico1 from '../photos/Puerto rico 1.JPG';
import sorority from '../photos/sorority.jpg';

function Photography() {
  const photos = [
    { src: elephant, desc: 'Kruger National Park - South Africa' },
    { src: lion, desc: 'Kruger National Park - South Africa' },
    { src: hippo, desc: 'Pilanesberg National Park - South Africa' },
    { src: oldSanJuan2, desc: 'Old San Juan - Puerto Rico' },
    { src: puertoRico1, desc: 'Old San Juan - Puerto Rico' },
    { src: sorority, desc: 'U Arizona Phi Sigma Rho - USA' }
  ];

  return (
    <div className="content page-shell">
      <div className="page-card">
        <h1 className="page-title">Photography</h1>
        <p className="page-subtitle">Some photos I took.</p>

        <div className="photo-grid">
          {photos.map((p, i) => (
            <div key={i} className="photo-card">
              <img className="photo-thumb" src={p.src} alt={p.desc} loading="lazy" />
              <p className="photo-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="follow-text">
          Follow me on{' '}
          <a
            href="https://instagram.com/dantem.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{' '}
          for more!
        </p>
      </div>
    </div>
  );
}

export default Photography;
