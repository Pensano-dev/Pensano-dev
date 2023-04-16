import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../../personalInfo/Git';

import CloudBnB from '../../../images/JuImagesAndVideos/CloudBnB.svg'

export default function Portfolio() {
  return (
    <IconContext.Provider
      value={{ color: '#052d49', size: '30px'}}>
  
{/* Project Makers BnB */}
      <div className="all-projects-containerRach">
        <div className="gif-containerRach">
          <img className="gifRach" src={CloudBnB} />
        </div>
          <div className="project-text">
          <h3>Cloud BnB</h3>
            <p>As an Airbnb clone, the six of us develop Cloud BnB is a week.
              Users can register, login, list their properties for rent, browse the listed properties, view the availability 
              of properties, and submit booking requests.
            <br></br>
              <p style={{ fontSize: 14 }}> 
              ⚙️ Tech used: Ruby, Active Record, Sinatra and RSpec 
              </p>
            </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
              <Git  git="https://github.com/rachelnewby/makers-bnb" />
            </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}