import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='app'>
      <header className='navbar'>
        <nav>
          <ul>
            <li><a href="#hero" onClick={() => handleClick("hero")}>Home</a></li>
            <li><a href="#about" onClick={() => handleClick("about")}>About</a></li>
            <li><a href="#skills" onClick={() => handleClick("skills")}>Skills</a></li>
            <li><a href="#projects" onClick={() => handleClick("projects")}>Projects</a></li>
          </ul>
        </nav>
      </header>


  
        <section id="hero">
          <Hero />
        </section>
   

     
        <section id="about">
          <About />
        </section>
     

      
        <section id="skills">
          <Skills />
        </section>
     

      
        <section id="projects">
          <Projects />
        </section>

    </div>
  );
}

export default App;
