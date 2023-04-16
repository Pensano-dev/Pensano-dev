import React from 'react';
import { useState } from 'react';
import './Josh.css'
import ProfilePic from '../ProfilePic/ProfilePic'
import ComingSoon from '../../images/JoshImagesAndVideos/coming-soon.pdf';
import josh from '../../images/Josh.svg'

import Layout from '../layout/layout';
import Portfolio from './portfolio/Portfolio';
import Email from '../personalInfo/Email';
import House from '../personalInfo/House';
import Git from '../personalInfo/Git';
import CV from '../CV/CV';


export default function Josh() {
  
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showCV, setShowCV] = useState(false)

  const handlePortfolio = () => {
    setShowPortfolio(!showPortfolio)
    setShowCV(false)
  }

  const handleCV = () => {
    setShowCV(!showCV)
    setShowPortfolio(false)
  }

  return (
    <Layout>
      <div className='pageContainerJosh'>
        <h1 className='name'>Josh Penney</h1>
          <div className='aboutContainerJosh'>
            <div className='profile-picJosh'>
              <ProfilePic imageProp={josh}/>
            </div>

            <div>
              <p className='aboutTextJosh'>
              I'm a Software Engineer, Makers graduate, with experience in Social Care.
              My combination of technical and social skills makes me a well-rounded professional, 
              capable of adapting to different environments and working effectively 
              with a variety of people.
              <br></br>
                <p style={{ fontSize: 14 }}>
                ⚙️ Tech Skills: HTML, CSS, Ruby, JavaScript, React, React Native, NodeJS, ExpressJS, 
                PostgreSQL, Jest, Cypress, Git and GitHub
                </p>
              </p>
            </div>
          </div>

            <div className='info-container'>
              <Git
                git={"https://github.com/josh-p-git"}
                />
                <House
                location={"Southampton"}
                />
                <Email
                email={"josh.penney@gmail.com"}
                />
              </div>

              <div className='buttons-container'>
            <button className='buttons' onClick={() => {
                handlePortfolio()
            }}>My Portfolio</button>
            
            <button className='buttons' onClick={() => {
              handleCV()
            }}>My CV</button>
          </div>
          
            {showPortfolio ? 
            <Portfolio />  
              : null}
            {showCV ? <CV pdf={ComingSoon}/> : null}
      </div>
    </Layout>
  );
}