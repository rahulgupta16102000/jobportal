// frontend/src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div  style={{position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'}}>
      <h2>Login Page</h2>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
