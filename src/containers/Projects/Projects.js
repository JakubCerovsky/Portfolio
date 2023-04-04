import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className='projects-container left-border'>
      <h2 className='projects-title'>Projects</h2>
      <ul className="projects-links">
          <li>
            <a href="/">Zealand Marketplace</a>
          </li>
          <li>
            <a href="/">GPT3 - Recreation</a>
          </li>
          <li>
            <a href="/">Paddle Nation</a>
          </li>
        </ul>
    </div>
  )
}

export default Projects