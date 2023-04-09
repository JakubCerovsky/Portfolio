import React, {useContext} from 'react';
import { ComponentsContext } from '../ComponentsContext.js';
import './projects.css';



const Projects = () => {
  const {setActive} = useContext(ComponentsContext);


  return (
    <div className='projects-container'>
      <h2 className='projects-title bottom-border'>Projects</h2>
      <ul className="projects-links">
          <li>
            <button onClick={() => {setActive("Zealand")}}>Zealand Marketplace</button>
          </li>
          <li>
            <button onClick={() => {setActive("GPT3")}}>GPT3 - Recreation</button>
          </li>
          <li>
            <button onClick={() => {setActive("Paddle")}}>Paddle Nation</button>
          </li>
        </ul>
    </div>
  )
}

export default Projects