import React from "react";
import '../styles/Auth.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-footer">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
