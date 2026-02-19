import '../styles/auth.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h1 className="auth-title">Create Account</h1>
        <p className="auth-sub">Register to get started</p>

        <form className="auth-form">

          <input className="auth-input" type="text" placeholder="Full Name" required />
          <input className="auth-input" type="email" placeholder="Email" required />
          <input className="auth-input" type="password" placeholder="Password" required />

          {/* Role Selection */}
          <select className="auth-select" required>
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button className="btn btn-primary auth-btn">
            Register
          </button>
        </form>

        <p className="auth-switch">
          Already registered? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
