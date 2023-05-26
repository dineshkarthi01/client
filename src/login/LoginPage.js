import React, { useState } from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login');
  };

  const handleNewUser = () => {
    // Handle new user registration logic here
    console.log('New User');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot Password');
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <div className="extra-links-container">
          <span className="new-user-link" onClick={handleNewUser}>New User</span>
          <span className="forgot-password-link" onClick={handleForgotPassword}>Forgot Password</span>
        </div>
      </div>
      <div className="secure-icon-container">
        <FontAwesomeIcon icon={faLock} className="secure-icon" />
      </div>
    </div>
  );
};

export default LoginPage;
