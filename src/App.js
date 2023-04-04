import React from 'react';
import './App.css';
import { Main,Navbar, Skills } from './components';

const App = () => {
  return (
    <div className='app-container'>
        <div className='app-container-content left-border'>
            <Navbar />
            <Main />
        </div>
        <div className='app-container-content app-container-skills left-border'>
            <Skills />
        </div>
        <div className='name-container'>
            <h1 className='name-container-text'>Jakub Cerovsky</h1>
        </div>
    </div>
  )
}

export default App