import { useState } from 'react'
import Login from './components/Login.jsx'; // Cambia LoginWindow a Login
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <div className="App" style={{ position: 'relative' }}>
        <Router>
          <Login isOpen={isModalOpen} onClose={closeModal} className='modal' />
        </Router>
      </div>




    </>
  )
}

export default App
