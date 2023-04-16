import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../../personalInfo/Git';
import stepvideo from '../../../images/LuizImagesAndVideos/logo-no-text.svg'
import acevideo from '../../../images/LuizImagesAndVideos/logo-no-text.svg'
import makerspic from '../../../images/LuizImagesAndVideos/makersbnb.png'
// need to convert this component to be a dinamic component

export default function Portfolio({content, video, link}) {
  return (
    <IconContext.Provider
      value={{ color: 'white', size: '30px'}}>
      <div className="project-container">
          <div className="gif-container">
            <img className="gif" src={stepvideo} />
          </div>

        <div className="project-text">
          <h3>Step Free Gigs</h3>
          <p>A mobile app for finding wheelchair accessible gigs in London with step-free navigation
            <br/> Tech used: React Native, Expo, Node.js, Express.js, Jest </p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
          <Git  git="https://github.com/santosluizfelipe/StepFreeGigs" />
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="gif-container">
          <img className="gif" src={acevideo} />
        </div>

        <div className="project-text">
          <h3>Acebook</h3>
          <p>
              A social media web app which enables users to sign up, login, write, edit, and delete
              their own posts; like other posts; and add other users as friends.<br/>
              Tech used: 
              React, JavaScript, Jest, Mongodb, Node, Cypress, HTML, CSS, Express
            </p>
        </div>
        <div className="git-emoticon-container">
          <div className="git-child">
            <Git  git="https://github.com/santosluizfelipe/acebook-fire" />
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="gif-container">
          <img className="gif" src={makerspic} />
        </div>
          <div className="project-text">
          <h3>Makers-BnB</h3>
            <p>
              A booking app which enables users to sign up, login, view properties available to book,
              see booking availability, request to book, upload their own properties <br/>
              Tech used: Ruby, Active Record, RSpec, Rake, HTML, CSS
            </p>
          </div>
          <div className="git-emoticon-container">
            <div className="git-child">
            <Git  git="https://github.com/santosluizfelipe/makers-bnb" />
            </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

