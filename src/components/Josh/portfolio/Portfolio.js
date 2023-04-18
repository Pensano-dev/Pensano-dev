import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../../personalInfo/Git';
import construction from '../../../images/OurProjectsImagesAndVideos/pensano.svg'

export default function Portfolio() {
  return (
    <IconContext.Provider
      value={{ color: '#052d49', size: '30px'}}>
      
{/* Project Solved */}
      <div className="all-projects-containerJosh">
        <div className="img-container-josh">
          <img className="img-josh" src={construction} />
        </div>

        <div className="project-textJosh">
          <h3>Pensano Devs (website)</h3>
          <p>
          I built this website with my peer-group friends to showcase our work. It focuses on 
          mobile responsiveness and has a consistent colour scheme and typography 
          throughout. Thanks to your use of Excalidraw and Canva, we were able to create 
          detailed diagrams and prototypes that helped guide the site's design and layout. 
          We also used Trello and Slack to track progress and communicate with one another.
          This is a front-end project, built with React and CSS.  It has different sections, 
          including a "The Team" page that provides more information on its members, and a 
          "Projects" page that showcases our accomplishments. The site's design is optimized 
          for mobile devices, ensuring that visitors can easily access and navigate the site 
          on their smartphones or tablets.
            <br></br>
            <p style={{ fontSize: 14 }}> 
            ⚙️ Tech used: JavaScript, React, HTML and CSS
            </p>
          </p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
          <Git  git="https://github.com/Pensano-dev/website" />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}