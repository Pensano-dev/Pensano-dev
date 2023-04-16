import React from 'react';
import { useState } from 'react';
import './Juliana.css'
import ProfilePic from '../ProfilePic/ProfilePic'
import JulianaCV from '../../images/JuImagesAndVideos/CVJuliana.pdf';
import Ju from '../../images/Ju.svg'

import Layout from '../layout/layout';
import Portfolio from './portfolio/Portfolio';
import Email from '../personalInfo/Email';
import House from '../personalInfo/House';
import Linkedin from '../personalInfo/Linkedin';
import Git from '../personalInfo/Git';
import CV from '../CV/CV';

export default function Juliana() {
  
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
      <div className='pageContainerJu'>
        <h1 className='name'>Juliana Nocchi</h1>
          <div className='aboutContainerJu'>
            <div className='profile-pic'>
              <ProfilePic imageProp={Ju} alt="Juliana's photo"/>
            </div>
            
            <div>
              <p className='aboutTextJu'>
              👩🏻‍💻 As a Software Engineer with a background in Animation and HR, I bring a 
              unique perspective to my work. I'm a positive, methodical, and highly organized 
              person who values continuous learning. <br></br>
              I'm passionate about building strong relationships with my colleagues and believe 
              that collaboration, communication, and respect are essential for any successful project. <br></br>
              In my free time, I enjoy exploring all that London has to offer, trying out new watercolor 
              painting techniques, and playing volleyball. I'm always looking for ways to improve my 
              skills both in and out of the office, and I'm excited to see where my passion 
              for technology will take me next.
              <br></br>
                <p style={{ fontSize: 14 }}>
                ⚙️ Tech Skills: C#, HTML, CSS, Ruby, JavaScript, React, React Native, NodeJS, ExpressJS, Expo Go, 
                PostgreSQL, MongoDB, Jest, Cypress, Git and GitHub
                </p>
              </p>
            </div>
          </div>
            
          <div className='info-containerJu'>
            <Git
              git={"https://github.com/junocchi"}
              />
            <Linkedin
              linkedin={"https://www.linkedin.com/in/juliana-nocchi/"}
              />
            <House
              location={"London"}
              />
            <Email
              email={"junocchi@gmail.com"}
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
            {showCV ? <CV pdf={JulianaCV}/> : null}
      </div>
    </Layout>
  );
}