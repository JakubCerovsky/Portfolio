import React, {useState} from 'react';
import { ImGithub } from 'react-icons/im';
import {BsLinkedin, BsFillFileEarmarkPersonFill} from 'react-icons/bs';
import { IconContext } from "react-icons";
import './navbar.css';

const Navbar = ({ updateParentState }) => {

  const [value, setValue] = useState(null);

  const handleButtonClick = () => {
    const newState = "Contact";
    setValue(newState);
    updateParentState(newState);
  };


  return (
    <div className='navbar-container'>
      <div>
        <img src="photo.png" alt='logo' className='navbar-photo'/>
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
        <button onClick={handleButtonClick} className='contact-me-btn'>Contact me!</button>
      </div>
    </div>
  )
}

export default Navbar