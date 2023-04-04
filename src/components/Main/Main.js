import React from 'react';
import { Content, Projects } from '../../containers';

import './main.css';

const Main = () => {
  return (
    <div className='main-container'>
      <Content title={"Hello!"} text={"Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow. Working with my hands to make magic happen on the internet."} text2={"View my Projects, Articles, Resumé, Contact Me, or send me an email at hellocodewonders@gmail.com."}/>
      <Projects />
    </div>
  )
}

export default Main