import React from "react";
import { useState } from "react";
import "./Luiz.css";
import ProfilePic from "../ProfilePic/ProfilePic";
import luizcv from "../../images/LuizCV.pdf";
import luiz from "../../images/Luiz.svg";

import Layout from "../../layout/layout";
import Portfolio from "./portfolio/Portfolio";
import Email from "../personalInfo/Email";
import House from "../personalInfo/House";
import Linkedin from "../personalInfo/Linkedin";
import Phone from "../personalInfo/Phone";
import Git from "../personalInfo/Git";
import CV from "../CV/CV";

export default function Luiz() {
  const content =
    "A mobile app for finding wheelchair accessible gigs in London with step-free navigation. Tech used: React Native, Expo, Node.js, Express.js, Jest";
  const link = "https://github.com/santosluizfelipe/StepFreeGigs";

  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const handlePortfolio = () => {
    setShowPortfolio(!showPortfolio);
    setShowCV(false);
  };

  const handleCV = () => {
    setShowCV(!showCV);
    setShowPortfolio(false);
  };

  return (
    <Layout>
      <div className="pageContainer-luiz">
        <h1 className="name">Luiz Santos</h1>
        <div className="aboutContainer-luiz">
          <div className="profile-pic">
            <ProfilePic imageProp={luiz} />
          </div>

          <div>
            <p className="aboutText">
              Hi, I'm Luiz! I'm a Brazilian junior full-stack software engineer
              living in London. I've completed an internship at the legal
              consulting start-up LawAdvisor and recently graduated from the
              full-stack bootcamp Makers Academy. During my internship at
              LawAdvisor, I primarily used Elixir and Phoenix, but I feel
              comfortable working with JavaScript/React and Ruby/Rails.
            </p>
          </div>
        </div>

        <div className="info-container-luiz">
          <Git
            className="infoLuiz"
            git={"https://github.com/santosluizfelipe"}
          />
          <Linkedin
            className="infoLuiz"
            linkedin={"https://www.linkedin.com/in/luizfelipessantos/"}
          />
          <House className="infoLuiz" location={"London"} />
          <Phone className="infoLuiz" phone={"07940077958"} />
          <Email className="infoLuiz" email={"luizfelipe0598@icloud.com"} />
        </div>

        <div className="buttons-container">
          <button
            className="buttons"
            onClick={() => {
              handlePortfolio();
            }}
          >
            My Portfolio
          </button>

          <button
            className="buttons"
            onClick={() => {
              handleCV();
            }}
          >
            My CV
          </button>
        </div>
        {showPortfolio ? <Portfolio /> : null}
        {showCV ? <CV pdf={luizcv} /> : null}
      </div>
    </Layout>
  );
}
