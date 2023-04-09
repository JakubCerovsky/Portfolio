import React, {useState} from 'react';
import './App.css';
import { Main, Navbar, Skills } from './components';
import { ComponentsContext } from './containers/ComponentsContext.js';


const App = () => {
  const [active, setActive] = useState("Main");

  
  return (
    <ComponentsContext.Provider value={{active, setActive}}>
       <div className='name-container'>
        <div className='name-subcontainer'>
          <div>
            <h1 className='name-container-text' id='name'>Jakub Cerovsky</h1>
            <h1 className='name-container-text'>Full-Stack Developer</h1>
            <p className='footer'>Designed & Built by</p>
            <h1 className='name-container-text' id='name'>Jakub Cerovsky</h1>
            <h1 className='name-container-text'>Full-Stack Developer</h1>
            <p className='footer'>Designed & Built by</p>
          </div>
        </div>
      </div>
    <div className='app-container'>
      <div className='app-container-skills'>
        <Skills />
      </div>
      <div className='app-container-content left-border'>
        <Navbar/>
        <Main/>
      </div>
        <div id="copyrights">
          <p>Designed & Built by Jakub Cerovsky</p>
        </div>
    </div>
    </ComponentsContext.Provider>
  )
}

export default App