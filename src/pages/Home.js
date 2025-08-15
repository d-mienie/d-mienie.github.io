import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="video-header">
        <iframe
          src="https://www.youtube.com/embed/C4iy_3kLa84?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=C4iy_3kLa84&rel=0"
          title="Skydiving"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
      <div className="hero-overlay">
        <h1>Dive into getting to know me!</h1>
        <p>
          I'm Danté Mienie - a coder, adventurer and a curious human.<br />
          <br />
          Welcome to my portfolio!
        </p>
        <button className="hero-button" onClick={() => navigate('/about')}>
          About Me
        </button>
      </div>
    </div>
  );
}

export default Home;
  