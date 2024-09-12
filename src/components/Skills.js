import React from 'react';
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faHtml5} title="HTML5" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faCss3Alt} title="CSS3" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faJsSquare} title="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faReact} title="React" />
          <p>React</p>
        </div>
        {/* <img src="path/to/codeigniter-icon.svg" alt="CodeIgniter 3" width="40" height="40" /> */}
      </div>
    </section>
  );
};

export default Skills;
