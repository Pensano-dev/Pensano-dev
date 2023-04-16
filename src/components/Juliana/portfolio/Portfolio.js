import React from "react";
import './Portfolio.css'
import { IconContext } from 'react-icons';

import Git from '../../personalInfo/Git';
import gifSolved from '../../../images/JuImagesAndVideos/Solved.svg'
import Bowling from '../../../images/JuImagesAndVideos/bowling.svg'
import bank from '../../../images/JuImagesAndVideos/bank.svg'
import CloudBnB from '../../../images/JuImagesAndVideos/CloudBnB.svg'
import AcebookAir from '../../../images/JuImagesAndVideos/Acebook-Air.svg'

export default function Portfolio() {
  return (
    <IconContext.Provider
      value={{ color: '#052d49', size: '30px'}}>
      
{/* Project Solved */}
      <div className="all-projects-containerJu">
        <div className="gif-containerJu">
          <img className="gifJu" src={gifSolved} alt="gif of the app Solved"/>
        </div>

        <div className="project-textJu">
          <h3>Solved</h3>
          <p>This mobile app consists of a live-action treasure hunting with clues 
            to help the user to search for five secret London landmarks. As part of a
            group of 5, I was involved in the ideation, designing the user 
            interface and images, prototyping the screens, implementing functionalities 
            on the front end, data manipulation, integration testing and styling.
            <br></br>
            <p style={{ fontSize: 14 }}> 
            ⚙️ Tech used: Node.js, Express, MongoDB Atlas, React Native, Expo Go 
            and Jest. API calls to 2 different services and image recognition
            </p>
          </p>
        </div>
        <div className="github-emoticon-container">
          <div className="github-child">
            <Git  git="https://github.com/junocchi/Solved-App" />
          </div>
        </div>
      </div>

{/* Project Acebook */}
      <div className="all-projects-containerJu">
        <div className="gif-containerJu">
          <img className="gifJu" src={AcebookAir} alt="gif of the Acebook-Air website"/>
        </div>
        <div className="project-textJu">
        <h3>Acebook Air</h3>
          <p>In this project, eight of us were tasked with working on an existing MERN 
            application with only the most basic signup, login and logout functions in place 
            and minimal other functionality. The challenge was to familiarise ourselves with an 
            unknown codebase with technologies we'd little to no previous experience in. We had 
            to improve and extend it into a fully functioning app that we could present to the stakeholders.
            You can view the fully deployed site at <a href='https://acebook-air-frontend.onrender.com/' target='_blank'>Acebook-Air</a>
            <br></br>
            <p style={{ fontSize: 14 }}> 
            ⚙️ Tech used: MERN - MongoDB, Express, React and Node
            </p>
          </p>
        </div>
        <div className="github-emoticon-container">
          <div className="github-child">
            <Git  git="https://github.com/junocchi/Acebook-Air" />
          </div>
        </div>
      </div>

{/* Project Cloud BnB */}
      <div className="all-projects-containerJu">
        <div className="gif-containerJu">
          <img className="gifJu" src={CloudBnB} alt="image of the CloudBnB homepage"/>
        </div>
          <div className="project-textJu">
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
              <Git  git="https://github.com/junocchi/Cloud-BnB" />
            </div>
        </div>
      </div>

{/* Project Bowling Scorecard Program */}
<div className="all-projects-containerJu">
        <div className="gif-containerJu">
          <img className="gifJu" src={Bowling} alt="image of a bowling points system"/>
        </div>
          <div className="project-textJu">
          <h3>Bowling Scorecard</h3>
            <p>This individual challenge consists of a Bowling Scorecard program that counts and sums the scores of a bowling 
              game, including strikes and spares.
            <br></br>
              <p style={{ fontSize: 14 }}> 
              ⚙️ Tech used: Ruby and RSpec 
              </p>
            </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
              <Git  git="https://github.com/junocchi/Bowling-Scorecard-Ruby" />
            </div>
        </div>
      </div>

{/* Project Bank Account Program */}
<div className="all-projects-containerJu">
        <div className="gif-containerJu">
          <img className="gifJu" src={bank} alt="image of a bank statement"/>
        </div>
          <div className="project-textJu">
          <h3>Bank Account</h3>
            <p>This bank account program accepts deposits, withdraws and prints 
              statements including the transactions date, type, amount and balance.
              
            <br></br>
              <p style={{ fontSize: 14 }}> 
              ⚙️ Tech used: Ruby and RSpec 
              </p>
            </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
            <Git  git="https://github.com/junocchi/bank_account_tech_test" />
            </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}