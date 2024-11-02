//Lluvia.jsx

import React, { useEffect } from 'react';


import '../css/Modal.css';

const Lluvia = () => {
  useEffect(() => {
    const symbols = ['<', '>', '{', '}', '(', ')', 'console.log', 'var', 'let', 'const', 'function', 'return', 'JS'];

    const createRaindrop = () => {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      raindrop.style.left = `${Math.random() * 100}vw`;
      raindrop.style.fontSize = `${Math.random() * 2 + 1}rem`;
      raindrop.style.animationDuration = `${Math.random() * 5 + 5}s`;

      document.getElementById('raindrops').appendChild(raindrop);

      raindrop.addEventListener('animationend', () => {
        raindrop.remove();
      });
    };

    const intervalId = setInterval(createRaindrop, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div id="raindrops"></div>
      <div id="contenedor-principal">
        <h1>Bienvenido a la Lluvia de Símbolos</h1>
        {/* Aquí puedes agregar más contenido como el formulario */}
      </div>
    </div>
  );
};

export default Lluvia;