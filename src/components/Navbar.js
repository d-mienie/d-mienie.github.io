import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="navbar-content">
        <img src="/name.png" alt="Danté Mienie Logo" className="navbar-logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/photography">Photography</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
