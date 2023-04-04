import React from 'react';
import './content.css';

const Content = ({title,text,text2}) => {
  return (
    <div className='content-container'>
      <h1 className='content-title'>{title}</h1>
      <p className='content-text'>{text}</p>
      <p className='content-text'>{text2}</p>
    </div>
  )
}

export default Content