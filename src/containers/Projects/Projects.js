import React from 'react';
import './projects.css';

const Projects = ({updateChildState, resetChildState}) => {
 
  const handleState1Click = () => {
    resetChildState();
    updateChildState("Zealand");

  };

  const handleState2Click = () => {
    resetChildState();
    updateChildState("GPT3");

  };

  const handleState3Click = () => {
    resetChildState();
    updateChildState("Paddle");

  };

  return (
    <div className='projects-container left-border'>
      <h2 className='projects-title bottom-border'>Projects</h2>
      <ul className="projects-links">
          <li>
            <button onClick={handleState1Click}>Zealand Marketplace</button>
          </li>
          <li>
            <button onClick={handleState2Click}>GPT3 - Recreation</button>
          </li>
          <li>
            <button onClick={handleState3Click}>Paddle Nation</button>
          </li>
        </ul>
    </div>
  )
}

export default Projects