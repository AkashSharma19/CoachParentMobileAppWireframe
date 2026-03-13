import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [studentId, setStudentId] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container animate-fade-in">
      <div className="login-header">
        <h1 className="gradient-text heading-xl">Coach Portal</h1>
        <p className="text-secondary">Stay connected with your child's progress</p>
      </div>

      <form className="login-form glass-card" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="text-small">Student ID / Email</label>
          <input 
            type="text" 
            placeholder="Enter Student ID" 
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="glass-input"
          />
        </div>

        <div className="input-group">
          <label className="text-small">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="glass-input"
          />
        </div>

        <button type="submit" className="btn-primary w-full shadow-lg">
          Sign In
        </button>

        <p className="forgot-pass text-small">Forgot Password?</p>
      </form>
      
      <div className="login-footer">
        <p className="text-muted text-small">Secured by Coach OS</p>
      </div>
    </div>
  );
};

export default Login;
