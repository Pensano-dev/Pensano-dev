import './OurProjects.css'
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { IconContext } from 'react-icons';

import Git from '../personalInfo/Git';
import imgPensanoDevs from '../../images/OurProjectsImagesAndVideos/logo-no-text.svg'
import imgHTMA from '../../images/OurProjectsImagesAndVideos/HTMA-report.png'

export default function OurProjects() {
  return (
    
    <IconContext.Provider
      value={{ color: '#052d49', size: '30px'}}>
      <div style={{ backgroundColor: '#E5EDEF' }}>
        <Navbar />
        <h2 className='title'>Welcome to our projects page!</h2>

      {/* Project HTMA report */}
      <div className="our-projects-container">
        <div className="gif-container">
          <img className="gif" src={imgHTMA} alt="HTMA result"/>
        </div>
          <div className="project-textAll">
            <h3>HTMA Report Generator (🚧 under construction)</h3>
              <p>This online, login-free, program is being developed to support Nutritional Therapy practitioners 
                from the charity Jade's Soul and students from <a href='https://www.newschoolofnutrition.com/' target="_blank">The New School of Nutritional Medicine</a> analysing
                Hair Tissue Mineral Analysis results. After adding the 
                test results, the program generates a comprehensive report that can be 
                downloaded; leaving more time to the practitioners to focus on providing personalised 
                recommendations for their patients. 
                <br></br>
                  <p style={{ fontSize: 14 }}> 
                  ⚙️ Tech used: Ruby on Rails, HTML, CSS, Git, GitHub, JavaScript, SQL and RSpec. 
                  </p>
                </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
            <Git  git="https://github.com/junocchi/Pensano-Devs/tree/main" />
            </div>
          </div>
          </div>

      {/* Project Pensano */}
      <div className="our-projects-container">
        <div className="gif-container">
          <img className="gif" src={imgPensanoDevs} alt="Gif showing Pensano website"/>
        </div>
          <div className="project-textAll">
            <h3>Pensano Devs Website (🚧 under construction) </h3>
              <p>Our very first project working as Pensano Devs was to developed this website to
              showcase our work both collectively, as Pensano Devs, and our individual projects.
              We are aiming for mobile responsiveness and +85% testing coverage.
                <br></br>
                  <p style={{ fontSize: 14 }}> 
                  ⚙️ Tech used: Git, GitHub, JavaScript, React, Cypress, CSS and HTML.  
                </p>
              </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
              <Git git="https://github.com/junocchi/Pensano-Devs/tree/main" />
          </div>
        </div>
      </div> 
    </div>
  </IconContext.Provider>
  );
}