import React, {useContext} from 'react';
import { ImGithub } from 'react-icons/im';
import {BsLinkedin, BsFillFileEarmarkPersonFill} from 'react-icons/bs';
import { IconContext } from "react-icons";
import { ComponentsContext } from '../../containers/ComponentsContext.js';

import './navbar.css';

const Navbar = () => {
  const {setActive} = useContext(ComponentsContext);

  return (
    <div className='navbar-container'>
      <div>
        <button onClick={() => setActive("Main")} id='logo'><img src="photo.png" alt='logo' className='navbar-photo'/></button>
      </div>
      <div className="intro_specials">
      <IconContext.Provider value={{ color: "var(--color-light)", size: "2.5rem", className: "icons" }}>
        <ul className="socials">
          <li>
            <a href="https://github.com/JakubCerovsky" target="_blank" rel="noreferrer"><ImGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jakub-cerovsky-20455a219/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
          </li>
          <li>
            <a href="CV.pdf" target="_blank" rel="noreferrer"><BsFillFileEarmarkPersonFill /></a>
          </li>
        </ul>
        </IconContext.Provider>
        <button onClick={() => {setActive("Contact")}} className='contact-me-btn'>Contact me!</button>
      </div>
    </div>
  )
}

export default Navbar