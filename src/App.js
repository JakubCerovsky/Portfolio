import React, {useState} from 'react';
import './App.css';
import { Main, Navbar, Skills } from './components';

const App = () => {
  const [contact, setContact] = useState(null);

  const updateParentState = (newState) => {
    setContact(newState);
  };

  
  return (
    <div className='app-container'>
      <div className='app-container-skills'>
        <Skills />
      </div>
      <div className='app-container-content left-border'>
        <Navbar updateParentState={updateParentState}/>
        <Main contact={contact}/>
      </div>
      <div className='name-container'>
        <div className='name-container__title'>
          <div>
            <h1 className='name-container-text' id='name'>Jakub Cerovsky</h1>
            <h1 className='name-container-text'>Full-Stack Developer</h1>
            <h1 className='name-container-text' id='name'>Jakub Cerovsky</h1>
            <h1 className='name-container-text'>Full-Stack Developer</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App