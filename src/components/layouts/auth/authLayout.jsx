import React from 'react';
import './authLayout.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-content-box">
          {children}
        </div>
        <footer className="auth-footer-legal">
          By continuing, you agree to our <strong>Terms of Service</strong>. Read our <strong>Privacy Policy</strong>.
        </footer>
      </div>
      <div className="auth-right">
        <img src="/bg.png" alt="Background" className="auth-bg-img" />
      </div>
    </div>
  );
};

export default AuthLayout;