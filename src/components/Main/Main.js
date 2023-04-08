import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import { Content, Projects } from '../../containers';
import './main.css';

const variants = {
  enter: {
    opacity: 0
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    opacity: 0
  }
}

const Main = ({contact}) => {
  const [active, setActive] = useState("Main");
  const [originalParentState, setOriginalParentState] = useState(null);


  useEffect(() => {
    if (contact !== null) {
      setActive(contact);
      setOriginalParentState(contact);
    }
  }, [contact]);

  const updateChildState = (newState) => {
    setActive(newState);
  };
  const resetChildState = () => {
    if (originalParentState !== null) {
      setActive(originalParentState);
    }
  };


  return (
    <div className='main-container'>

      <AnimatePresence mode="wait">
        {active === "Main" && <motion.div variants={variants}
          key="main"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}  className='content-container'>
          <Content title={"Hello!"} text={"Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow. Working with my hands to make magic happen on the internet."} text2={"View my Projects, Articles, Resumé, Contact Me, or send me an email at hellocodewonders@gmail.com."}  />
        </motion.div>}
        {active === "Zealand" && <motion.div variants={variants}
          key="zealand"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}  className='content-container'><Content title={"Zealand Marketplace"} text={"Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow. Working with my hands to make magic happen on the internet."} text2={"View my Projects, Articles, Resumé, Contact Me, or send me an email at hellocodewonders@gmail.com."}/>
        </motion.div>}
        {active === "GPT3" && <motion.div variants={variants}
          key="gpt3"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}  className='content-container'><Content title={"GPT3 - Recreation"} text={"Following Figma design to create a fully responsive React Web Application was a great way to better understand ReactJS. You can visit the website at jakubcerovsky-gpt3.com or view the code at my GitHub profile."}/></motion.div>}
        {active === "Paddle" && <motion.div variants={variants}
          key="paddle"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}  className='content-container'><Content title={"Hello!"} text={"Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow. Working with my hands to make magic happen on the internet."} text2={"View my Projects, Articles, Resumé, Contact Me, or send me an email at hellocodewonders@gmail.com."} /></motion.div>}
        {active === "Contact" && <motion.div variants={variants}
          key="contact"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}  className='content-container'><Content title={"Let's connect!"} text={"Do you feel like I would be a match for your team? Or do you just want to connect to stay in touch? I am always on LinkedIn or on my gmail."} text2={"Let's connect on LinkedIn, or just send me an email at jacobcerovsky@gmail.com."} /></motion.div>}

      </AnimatePresence>
      <Projects updateChildState={updateChildState}  resetChildState={resetChildState}/>
    </div>
  )
}

export default Main