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
  const [counter, setCounter] = useState(null);

  function handleClick(path) {
    navigate(path);
  }

  async function getSessionStorage() {
    const existingSession = sessionStorage.getItem("session");

    // If session exists
    if (existingSession) {
      console.log("Existing session detected:", existingSession);

      // Verify if session exists in Supabase
      const { data: sessionData, error: sessionError } = await supabase
        .from("sessionStorage")
        .select("*")
        .eq("session_id", existingSession);

      if (sessionError) {
        console.error("Error getting session:", sessionError.message);
      } else if (sessionData.length === 0) {
        console.error("No session found with session_id:", existingSession);
      } else {
        console.log("Session already stored in Supabase.");
      }

      // Fetch and set the counter value without incrementing
      const { data, errorCounter } = await supabase
        .from("pensanoCounter")
        .select("count")
        .eq("id", 1);

      if (errorCounter) {
        console.error("Error fetching counter:", errorCounter.message);
      } else if (data.length === 0) {
        console.error("No counter found with id 1");
      } else {
        setCounter(data[0].count);
      }
      return; // Stop execution here to prevent new session creation
    }

    // If sessionStorage is empty, create a new session
    const newSessionId = JSON.stringify(new Date().getTime());
    sessionStorage.setItem("session", newSessionId);

    // Add new session to Supabase
    const { errorSession } = await supabase
      .from("sessionStorage")
      .insert([{ session_id: newSessionId }]);

    if (errorSession) {
      console.error("Error inserting new session:", errorSession.message);
    } else {
      console.log("New session inserted:", newSessionId);
    }

    // Fetch the counter and increment it only for new sessions
    const { data, errorCounter } = await supabase
      .from("pensanoCounter")
      .select("count")
      .eq("id", 1);

    if (errorCounter) {
      console.error("Error fetching counter:", errorCounter.message);
    } else if (data.length === 0) {
      console.error("No counter found with id 1");
    } else {
      let currentCount = data[0].count;
      console.log("Current counter value:", currentCount);

      // Increment the counter value
      currentCount += 1;

      // Update the counter value in the table
      const { errorUpdate } = await supabase
        .from("pensanoCounter")
        .update({ count: currentCount })
        .eq("id", 1);

      if (errorUpdate) {
        console.error("Error updating counter:", errorUpdate.message);
      } else {
        console.log("Updated counter value:", currentCount);
        setCounter(currentCount);
      }
    }
  }

  useEffect(() => {
    getSessionStorage();
  }, []);

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
              Here you can find a list of volunteers who have contributed to
              Pensano!{" "}
            </p>
          </div>

          {/* List of Volunteers */}
          <div>{showComponents && <VolunteerListByYear />}</div>

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
            <p className="counter">Visits: {counter}</p>
            <p className="footer-text-copyright">© Pensano Developers 2025</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
