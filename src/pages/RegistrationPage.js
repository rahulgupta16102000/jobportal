// frontend/src/pages/RegistrationPage.js
import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = ({ onRegister }) => {
  return (
    <div style={{position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'}}>
      <h2>Registration Page</h2>
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default RegistrationPage;
