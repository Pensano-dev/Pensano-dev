import "./OurProjects.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function OurProjects() {
  return (
    <IconContext.Provider value={{ color: "#052d49", size: "30px" }}>
      <div className="our-projects-container">
        <Navbar />
        <h2 className="title">Welcome to our projects page!</h2>

        {/* Project AURA */}
        <div className="our-projects-individual-containers">
          <div className="project-textAll">
            <h3 style={{ marginTop: 10 }}>
              🌈 Aura{" "}
              <a
                href="https://www.canva.com/design/DAFnaNSUH6c/3HwneJ2_axm4dUbXObnFIQ/view?utm_content=DAFnaNSUH6c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1"
                target="_blank"
                rel="noopener noreferrer"
              >
                (🚧 in progress)
              </a>
            </h3>

            <p>
              Aura is a mobile app that was conceived at the Athena Hackathon
              2023 by Elsa, Ju, Natasha, Sidra, and Tian, where it won both the
              Cisco prize for "Empowering Accessibility & Inclusion Through
              Innovation" and the Nationwide prize for "Highest Potential
              Impact." The app aims to promote social inclusion by helping users
              discover venues that meet their specific needs, such as physical
              accessibility, neurological considerations, or creating the right
              ambience. By offering tailored information, Aura empowers users to
              explore spaces that address their individual requirements.
              <br></br>
              <p style={{ fontSize: 14, marginTop: 10 }}>
                ⚙️ Tech: Google Maps API, NodeJS, React Native, and Supabase.
              </p>
            </p>
            <a
              href={"https://github.com/Pensano-dev/aura-new"}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="github-icon" />
            </a>
          </div>
        </div>

        {/* Project Meal plan generator */}
        <div className="our-projects-individual-containers">
          <div className="project-textAll">
            <h3 style={{ marginTop: 10 }}>
              🥙 7-day Meal Plan AI generated{" "}
              <a
                href="https://almost-meal-planner.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                (🚧 in progress)
              </a>
            </h3>
            <p>
              Meal Plan is a web app designed to assist Nutritional Therapy
              practitioners and students from{" "}
              <a
                href="https://www.newschoolofnutrition.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The New School of Nutritional Medicine.
              </a>{" "}
              By allowing users to input their client's dietary preferences,
              allergies, and intolerances, the app generates a personalized
              7-day meal plan that can be easily downloaded. This automation
              streamlines the planning process, freeing up more time for
              practitioners to focus on delivering tailored nutritional advice
              and personalized recommendations for their patients, enhancing
              both efficiency and client care.
              <br></br>
              <p style={{ fontSize: 14, marginTop: 10 }}>
                ⚙️ Tech: MongoDB, NodeJS, Jest, Cypress, HTML, CSS, and ChatGPT
                API.
              </p>
            </p>
            <a
              href={"https://github.com/Pensano-dev/meal-plan-generator"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="github-icon" />
            </a>
          </div>
        </div>

        {/* Project Pensano */}
        <div className="our-projects-individual-containers">
          <div className="project-textAll">
            <h3 style={{ marginTop: 10 }}>💡 Pensano Devs Website</h3>
            <p>
              The Pensano Devs website was our very first project as a team,
              created to showcase our work. We focused on mobile responsiveness
              and ensured a consistent color scheme and typography throughout
              the site. Over the years, many volunteers have come and gone,
              which led to continuous updates and improvements to keep the site
              aligned with our evolving team and projects. Now in its third
              version, this front-end project, built using React and CSS,
              reflects our collaborative approach and dedication to creating a
              polished, user-friendly experience.
              <br></br>
              <p style={{ fontSize: 14, marginTop: 10 }}>
                ⚙️ Tech: NodeJS, React, and CSS.
              </p>
            </p>
            <a
              href={"https://github.com/Pensano-dev/Pensano-dev"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="github-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <p className="footer-text-copyright">© Pensano Developers 2025</p>
      </div>
    </IconContext.Provider>
  );
}
