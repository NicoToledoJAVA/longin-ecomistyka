import { useState } from 'react';
import Login from './components/Login.jsx';
import RainBackground from './components/RainBackground.jsx';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      <RainBackground />
      <Router>
        <Login isOpen={isModalOpen} onClose={closeModal} className="modal" />
      </Router>
    </div>
  );
}

export default App;