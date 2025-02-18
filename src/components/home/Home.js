/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Layout from "../layout/layout";
import IntroText from "./IntroText";

import OurProjects from "../OurProjects/OurProjects";
import VolunteerListByYear from "./VolunteerListByYear";
import supabase from "../../supabaseClient";

function Homepage() {
  const navigate = useNavigate();

  const [showOurProjects] = useState(false);
  const [showComponents] = useState(true);

  function handleClick(path) {
    navigate(path);
  }

  
 async function getSessionStorage() {
  //check if sessionStorage exists, if not create new one
    if (sessionStorage.getItem('session') === null) {
      const newSessionId = JSON.stringify(new Date().getTime());
      sessionStorage.setItem('session', newSessionId);
      //add new session to supabase
      const { error } = await supabase
        .from('sessionStorage')
        .insert([{ session_id: newSessionId}]);

      if (error) {
        console.error('Error inserting new session:', error.message);
      }
    } else {
      // check if session exists in supabase 
      const { data, error } = await supabase
        .from('sessionStorage')
        .select('*')
        .eq('session_id', sessionStorage.getItem('session'));

        if( error ) {
          console.error('Error getting session:', error.message);
        }

        console.log("data from supabse when session exists", data);
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
