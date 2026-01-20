import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginComponent.css';

const LoginComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="form-center-wrapper">
      <h1 className="title">Hello!</h1>
      <p className="subtitle">
        Use your email or another service to continue with Coolors.
      </p>

      <div className="social-body">
        <button className="social-button">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="social-icon"
          />
          Continue with Google
        </button>

        <button className="social-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="social-icon"
          />
          Continue with Apple
        </button>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <button
          className="submit-button"
          onClick={() => navigate('/loginWithEmail')}
        >
          Continue with email
        </button>
      </div>

      <p className="login-link">
        Don't have an account yet? <Link to="/registration">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginComponent;