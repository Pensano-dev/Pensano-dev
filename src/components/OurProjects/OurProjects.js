import "./OurProjects.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function OurProjects() {
  return (
    <IconContext.Provider value={{ color: "#052d49", size: "30px" }}>
      <div style={{ backgroundColor: "#BBEBEA" }}>
        <Navbar />
        <h2 className="title">Welcome to our projects page!</h2>

        {/* Project AURA */}
        <div className="our-projects-container">
          <div className="project-textAll">
            <h3>🌈 Aura (🚧 under construction)</h3>
            <p>
              The idea was intially formed at the Athena Hackathon 2023 by Elsa,
              Ju, Natasha, Sidra and Tian, which was awarded both the Cisco
              prize: "Empowering Accessibility & Inclusion Through Innovation”
              and the Nationwide prize: “Highest Potential Impact”. This mobile
              app hopes to support social inclusion by helping users find venues
              catered to their specific needs, whether related to physical
              accessibility, neurological considerations, or creating the right
              ambience.
              <br></br>
              <p style={{ fontSize: 14 }}>
                ⚙️ Tech used: Figma, React Native and GitHub.
              </p>
            </p>
            <div className="github-child">
              <a href={"https://github.com/Pensano-dev/aura-mobile-app"} target="_blank" rel="noopener noreferrer">
                <FaGithub className="react-icons" />
              </a>
            </div>
          </div>
        </div>

        {/* Project Meal plan generator */}
        <div className="our-projects-container">
          <div className="project-textAll">
            <h3>🥙 7-day Meal Plan AI generated (🚧 under construction)</h3>
            <p>
              This web app is being developed to support Nutritional Therapy
              practitioners and students from{" "}
              <a href="https://www.newschoolofnutrition.com/" target="_blank">
                The New School of Nutritional Medicine.
              </a>{" "}
              After adding their client's preferences, allergies and/or
              intolerances, the program generates a 7-day meal plan that can be
              downloaded; leaving more time to the practitioners to focus on
              providing personalised recommendations for their patients.
              <br></br>
              <p style={{ fontSize: 14 }}>
                ⚙️ Tech used: MongoDB, Javascript, Jest, Cypress, HTML, CSS,
                Git, and GitHub.
              </p>
            </p>
            <div className="github-child">
              <a href={"https://github.com/Pensano-dev/meal-plan-generator"} target="_blank" rel="noopener noreferrer">
                <FaGithub className="react-icons" />
              </a>
              {/* <Git git="https://github.com/Pensano-dev/meal-plan-generator" /> */}
            </div>
          </div>
        </div>

        {/* Project HTMA report */}
        <div className="our-projects-container">
          <div className="project-textAll">
            <h3>🧪 HTMA Report Generator (🚧 under construction)</h3>
            <p>
              This online, login-free, program is being developed to support
              Nutritional Therapy practitioners and students from{" "}
              <a href="https://www.newschoolofnutrition.com/" target="_blank">
                The New School of Nutritional Medicine
              </a>{" "}
              analysing Hair Tissue Mineral Analysis results. After adding the
              test results, the program generates a comprehensive report that
              can be downloaded; leaving more time to the practitioners to focus
              on providing personalised recommendations for their patients.
              <br></br>
              <p style={{ fontSize: 14 }}>
                ⚙️ Tech used: React, Javascript, HTML, CSS, Chat GPT, Figma,
                Git, and GitHub.
              </p>
            </p>
            {/* <div className="github-child">
              <Git git="https://github.com/junocchi/Pensano-dev" />
            </div> */}
          </div>
        </div>

        {/* Project Pensano */}
        <div className="our-projects-container">
          <div className="project-textAll">
            <h3>💡 Pensano Devs Website</h3>
            <p>
              Our very first project working as Pensano Devs was to developed
              this website to showcase our work. It focuses on mobile
              responsiveness and has a consistent colour scheme and typography
              throughout. Thanks to the use of Excalidraw and Canva, we were
              able to create detailed diagrams and prototypes that helped guide
              the site's design and layout. We also used Trello and Slack to
              track progress and communicate with one another. This is a
              front-end project, built with React and CSS.
              <br></br>
              <p style={{ fontSize: 14 }}>
                ⚙️ Tech used: Git, GitHub, JavaScript, React, Cypress, CSS and
                HTML.
              </p>
            </p>
            <div className="github-child">
            <a href={"https://github.com/Pensano-dev/Pensano-dev"} target="_blank" rel="noopener noreferrer">
                <FaGithub className="react-icons" />
              </a>
              {/* <Git git="https://github.com/Pensano-dev/Pensano-dev" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Link to our projects */}
      <div className="link-our-projects">
        {/* <button
              className="link-text"
              onClick={() => handleClick("/our-projects")}
            >
              Check out our projects here.
            </button>
          </div>

          <div>{showOurProjects && <OurProjects />}</div> */}

        <div className="footer-container">
          <p className="footer-text-copyright">© Pensano Developers 2025</p>
        </div>
      </div>
    </IconContext.Provider>
  );
}
