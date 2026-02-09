import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Carri-Okay</h3>
          <p className="footer-description">
            Your trusted partner in career guidance and professional development.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/career-paths">Career Paths</Link></li>
            <li><Link to="/counseling">Counseling</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Resources</h4>
          <ul className="footer-links">
            <li><Link to="/career-paths">Explore Careers</Link></li>
            <li><Link to="/counseling">Book Session</Link></li>
            <li><Link to="/dashboard">My Resources</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-links">
            <li>Email: support@carriokay.com</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Carri-Okay. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

