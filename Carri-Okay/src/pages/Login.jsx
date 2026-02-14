import '../styles/auth.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h1 className="auth-title">Login</h1>
        <p className="auth-sub">Access your dashboard</p>

        <form className="auth-form">
          <input className="auth-input" type="email" placeholder="Email" required />
          <input className="auth-input" type="password" placeholder="Password" required />

          <button className="btn btn-primary auth-btn">
            Login
          </button>
        </form>

        <p className="auth-switch">
          No account? <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
