/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Layout from "../layout/layout";
import IntroText from "./IntroText";

import OurProjects from "../OurProjects/OurProjects";
import VolunteerListByYear from "./VolunteerListByYear";

function Homepage() {
  const navigate = useNavigate();

  const [showOurProjects] = useState(false);
  const [showComponents] = useState(true);

  function handleClick(path) {
    navigate(path);
  }

  //check if sessionStorage exists, if not create new one
  function getSessionStorage() {
    if (sessionStorage.getItem('session') === null) {
      console.log('sessionStorage is null');
      console.log('creating new sessionStorage');
      sessionStorage.setItem('session', JSON.stringify(new Date().getTime()));
      console.log("new sessionStorage created", sessionStorage.getItem('session'));
    }
  }

  useEffect(() => {
    getSessionStorage();
  },[])

  return (
    <Layout>
      <div className="page-container">
        <div className="text-and-photos-container">
          {/* Intro text */}
          <IntroText></IntroText>

          {/*Volunteers*/}
          <div className="volunteers-container">
            <p className="volunteers-list-header">
              {" "}
              Here you can find a list of volunteers who have contributed to Pensano!            </p>
          </div>

          {/* List of Volunteers */}
          <div>
            {showComponents && <VolunteerListByYear />}
          </div>
          
          {/* Link to our projects */}
          <div className="link-our-projects">
            <button
              className="link-text"
              onClick={() => handleClick("/our-projects")}
            >
              Check out our projects here.
            </button>
          </div>

          <div>{showOurProjects && <OurProjects />}</div>

          <div className="footer-container">
            <p className="footer-text-copyright">© Pensano Developers 2025</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
