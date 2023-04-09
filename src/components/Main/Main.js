import React, {  useContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import { Content, Projects } from '../../containers';
import { ComponentsContext } from '../../containers/ComponentsContext.js';

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
};

const Main = () => {
  const {active} = useContext(ComponentsContext);

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
              opacity: { duration: 0.7 }
            }}  className='content-container'>
            <Content key={"Hello and Welcome!"} title={"Hello and Welcome!"} text={"My name is Jakub and I am aspiring Full-Stack Developer born in the Czech Republic. I am currently approaching a Bachalor degree from Software Engineering at VIA University Horsens. I believe that I am a responsible, ambitious and result-oriented person, driven to learn something new every day. In my free time I like to go to the gym, play football, or just drink a beer with my friends."} text2={"Do you want to find out more about me? Check out my projects or get it touch with me via mail or LinkedIn!"}  />
          </motion.div>}
          {active === "Zealand" && <motion.div variants={variants}
            key="zealand"
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}  className='content-container'><Content key={"Zealand Marketplace"} title={"Zealand Marketplace"} text={"Blazor Web Application with C# and Azure Database, working as a second-hand marketplace. Other technologies used were Entity Framework Code First Approach and MySQL. Users can log in or register themselves, add items and create reviews. No payment methods were implemented."} text2={"View my Projects, Articles, Resumé, Contact Me, or send me an email at hellocodewonders@gmail.com."}/>
          </motion.div>}
          {active === "GPT3" && <motion.div variants={variants}
            key="gpt3"
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}  className='content-container'><Content key={"GPT3 - Recreation"} title={"GPT3 - Recreation"} text={["Following Figma design to create a fully responsive React Web Application was a great way to better understand ReactJS. You can visit the website at ",<span key="web" className='selection'>jakubcerovsky-gpt3.com</span>," or view the code at my GitHub profile."]}/></motion.div>}
          {active === "Paddle" && <motion.div variants={variants}
            key="paddle"
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}  className='content-container'><Content key={"Paddle Nation"} title={"Paddle Nation"} text={"As a part of a group created by students of VIA, I am working as a Full-Stack Developer with a focus on the front end. Paddle Nation is in the developing stage with the vision of creating a system with renting and payment methods. C#, React, and Rest API, the leading technologies used for the system functionality."} text2={"View my Projects, Articles, Resumé, Contact Me, or send me an email at hellocodewonders@gmail.com."} /></motion.div>}
          {active === "Contact" && <motion.div variants={variants}
            key="contact"
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}  className='content-container'><Content key={"Let's connect!"} title={"Let's connect!"} text={"Do you feel like I would be a match for your team? Or you just want to stay in touch?"} text2={["Let's connect on LinkedIn, or just send me an mail at ",<span key="mail" className='selection'>jacobcerovsky@gmail.com</span>,"."]} /></motion.div>}
        </AnimatePresence>
        <Projects/>
      </div>
  )
}

export default Main