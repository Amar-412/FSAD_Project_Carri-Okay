import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import './Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Carri-Okay</span>
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/career-paths" className="navbar-link">Career Paths</Link></li>
          <li><Link to="/counseling" className="navbar-link">Counseling</Link></li>
          <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
          <li><Link to="/admin" className="navbar-link">Admin</Link></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
