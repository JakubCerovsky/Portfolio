import React from 'react';
import './content.css';



const Content = ({ title, text, text2 }) => {
  return (
      <div>
        <h1 className='content-title bottom-border'>{title}</h1>
        <div className='content-text-container'>
          <p className='content-text'>{text}</p>
          <p className='content-text'>{text2}</p>
        </div>
      </div>
  )
}

export default Content