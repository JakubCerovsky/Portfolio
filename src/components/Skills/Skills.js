import React from 'react';
import { IconContext } from "react-icons";
import {TbBrandCSharp} from 'react-icons/tb';
import {FaJava} from 'react-icons/fa';
import {SiJavascript, SiDotnet, SiReact, SiTailwindcss, SiPostgresql, SiBlazor, SiMicrosoftazure} from 'react-icons/si';
import {DiScrum} from 'react-icons/di';
import {AiOutlineCloudServer} from 'react-icons/ai';
import {GrMysql} from 'react-icons/gr';

import './skills.css';

const Skills = () => {
  return (
    <div className='skills-container'>
      <IconContext.Provider value={{ color: "var(--color-grey)", size: "3rem", className: "skills" }}>
        <FaJava />
        <TbBrandCSharp />
        <SiBlazor />
        <SiDotnet />
        <SiJavascript />
        <DiScrum />
        <SiReact />
        <SiTailwindcss />
        <SiMicrosoftazure />
        <SiPostgresql />
        <GrMysql />
        <AiOutlineCloudServer />
      </IconContext.Provider>
    </div>
  )
}

export default Skills