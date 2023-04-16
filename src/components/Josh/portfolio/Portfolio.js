import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../../personalInfo/Git';
import construction from '../../../images/JoshImagesAndVideos/logo-no-text.svg'

export default function Portfolio() {
  return (
    <IconContext.Provider
      value={{ color: '#052d49', size: '30px'}}>
      
{/* Project Solved */}
      <div className="all-projects-containerJosh">
        <div className="gif-container">
          <img className="gif" src={construction} />
        </div>

        <div className="project-textJosh">
          <h3>Pensano Devs</h3>
          <p>This site is designed to showcase our work both collectively, as Pensano 
            Devs, and our individual projects.
            <br></br>
            <p style={{ fontSize: 14 }}> 
            ⚙️ Tech used: JavaScript, React, HTML and CSS
            </p>
          </p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
          <Git  git="https://github.com/josh-p-git/josh-p-git.github.io" />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}