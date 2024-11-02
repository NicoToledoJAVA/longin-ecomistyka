// RainBackground.jsx
import React, { useEffect } from 'react';
import '../css/Modal.css';

const RainBackground = () => {
  useEffect(() => {
    const raindropContainer = document.getElementById('raindrops');
    if (raindropContainer) {
      const createRaindrop = () => {
        const symbols = ['Caja', 'Proveedores', 'Dinero', 'Cierre de Caja', 'Stock', 'Faltantes', 'Margen de Ganancia', 'Ganancia', 'Margen', 'Costo', 'Precio', 'Descuento', '$'];
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.fontSize = `${Math.random() * 2 + 1}rem`;
        raindrop.style.animationDuration = `${Math.random() * 5 + 5}s`;

        raindropContainer.appendChild(raindrop);
        raindrop.addEventListener('animationend', () => raindrop.remove());
      };

      const interval = setInterval(createRaindrop, 100);
      return () => clearInterval(interval); // Limpieza al desmontar el componente
    }
  }, []);

  return <div id="raindrops" className="raindrops"></div>;
};

export default RainBackground;