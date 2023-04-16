import './Rachel.css'
import Layout from '../layout/layout'
import React from 'react';
import { useState } from 'react';
import ProfilePic from '../ProfilePic/ProfilePic'
import Email from '../personalInfo/Email';
import House from '../personalInfo/House';
import Linkedin from '../personalInfo/Linkedin';
import Phone from '../personalInfo/Phone';
import Git from '../personalInfo/Git';
import CV from '../CV/CV';
import RachelNewbyCV from '../../images/RachelImagesAndVideos/RachelNewbyCV.pdf'
import RachelImage from '../../images/Rachel.svg'
import Portfolio from './Portfolio/Portfolio';

export default function Rachel() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const handlePortfolio = () => {
    setShowPortfolio(!showPortfolio);
    setShowCV(false);
  }

  const handleCV = () => {
    setShowCV(!showCV);
    setShowPortfolio(false);
  }

  return (
    <Layout>
      <div className='pageContainerRach'>
        <h1 className='name'>Rachel Newby</h1>
          <div className='aboutContainerRach'>
            <div className='profile-picRach'>
              <ProfilePic imageProp={RachelImage}></ProfilePic>
            </div>
            <div>
              <p className='aboutTextRach'>
              👩🏻‍💻 Hi, I'm Rachel. <br></br>
              <br></br>
              I love creative problem solving, making things, learning new skills, and methodical and logical processes. That's why I decided to become a software engineer.<br></br>
              <br></br>
              I'm really passionate about technology and how it has the power to transform the most everyday tasks, and how it can be used to make the world a more accessible place. <br></br>
              <br></br>
              When I'm not coding, you can find me playing a tenor bass in my steel drum band, trying to get out of an escape room, in the gym, or walking my miniature dachshund, Dotty. <br></br>
              <br></br>
              Take a look at my CV and portfolio below to see what I've been up to! You can find my full portfolio of work on GitHub.<br></br>
              <br></br>
              <p style={{ fontSize: 14 }}>
              ⚙️ Tech Skills: JavaScript, React, NextJS, NodeJS, ExpressJS, 
              PostgreSQL, MongoDB, Python, Flask, Ruby, RSpec, Pytest, Jest, Cypress, HTML, CSS, Git and GitHub
              </p>
              </p>
            </div>
          </div>
          <div className='info-containerRach'>
            <Git git={"https://github.com/rachelnewby"}></Git>
            <Linkedin linkedin={"https://www.linkedin.com/in/rachel-newby-uk/"}></Linkedin>
            <House location={"South East"}></House>
            <Email email={"rachelcnewby@gmail.com"}></Email>
          </div>
          <div className='buttons-container'>
            <button className='buttons' onClick={() => {
              handlePortfolio()
            }}>My Portfolio</button>
            <button className='buttons' onClick={() => {
              handleCV()
            }}>My CV</button>
          </div>
          {showPortfolio ? <Portfolio /> : null}
          {showCV ? <CV pdf={RachelNewbyCV}/> : null}
      </div>
    </Layout>
  )
}