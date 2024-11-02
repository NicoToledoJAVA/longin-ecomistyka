//Login.jsx

import React, { useState } from 'react';
import '../css/Modal.css';

const LoginWindow = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        onClose();
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <form onSubmit={handleLogin}>
          <label htmlFor="username" className="elemento-texto" style={{ marginRight: '47px' }}>Usuario:</label>
          <input type="text" id="username" value={username} className="elemento-texto cuadros" placeholder="Usuario" onChange={handleUsernameChange} checked style={{ cursor: 'pointer' }}/>
          <label htmlFor="password" className="elemento-texto" style={{ marginRight: '14px' }}>Contraseña:</label>
          <input type="password" id="password" value={password} className="elemento-texto cuadros" placeholder="Contraseña" onChange={handlePasswordChange} />
          <button type="submit" className="button button-blue">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginWindow;