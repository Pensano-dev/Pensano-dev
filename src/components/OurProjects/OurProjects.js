import "./OurProjects.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { IconContext } from "react-icons";

import Git from "../personalInfo/Git";
import imgPensanoDevs from "../../images/OurProjectsImagesAndVideos/pensano.svg";
import imgHTMA from "../../images/OurProjectsImagesAndVideos/HTMA-report.png";

export default function OurProjects() {
  return (
    <IconContext.Provider value={{ color: "#052d49", size: "30px" }}>
      <div style={{ backgroundColor: "#E5EDEF" }}>
        <Navbar />
        <h2 className="title">Welcome to our projects page!</h2>

        {/* Project HTMA report */}
        <div className="our-projects-container">
          <div className="img-container-op">
            <img className="img-op" src={imgHTMA} alt="HTMA result" />
          </div>
          <div className="project-textAll">
            <h3>HTMA Report Generator (🚧 under construction)</h3>
            <p>
              This online, login-free, program is being developed to support
              Nutritional Therapy practitioners from the charity Jade's Soul and
              students from{" "}
              <a href="https://www.newschoolofnutrition.com/" target="_blank">
                The New School of Nutritional Medicine
              </a>{" "}
              analysing Hair Tissue Mineral Analysis results. After adding the
              test results, the program generates a comprehensive report that
              can be downloaded; leaving more time to the practitioners to focus
              on providing personalised recommendations for their patients.
              <br></br>
              <p style={{ fontSize: 14 }}>
                ⚙️ Tech used: MongoDB, Javascript, Jest, Cypress, HTML, CSS,
                Git, and GitHub.
              </p>
            </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
              <Git git="https://github.com/junocchi/Pensano-Devs/tree/main" />
            </div>
          </div>
        </div>

        {/* Project Pensano */}
        <div className="our-projects-container">
          <div className="img-container-op">
            <img
              className="img-op"
              src={imgPensanoDevs}
              alt="Gif showing Pensano website"
            />
          </div>
          <div className="project-textAll">
            <h3>Pensano Devs Website (🚧 under construction) </h3>
            <p>
              Our very first project working as Pensano Devs was to developed
              this website to showcase our work. It focuses on mobile
              responsiveness and has a consistent colour scheme and typography
              throughout. Thanks to your use of Excalidraw and Canva, we were
              able to create detailed diagrams and prototypes that helped guide
              the site's design and layout. We also used Trello and Slack to
              track progress and communicate with one another. This is a
              front-end project, built with React and CSS. It has different
              sections, including a "The Team" page that provides more
              information on its members, and a "Projects" page that showcases
              our accomplishments. The site's design is optimized for mobile
              devices, ensuring that visitors can easily access and navigate the
              site on their smartphones or tablets.
              <br></br>
              <p style={{ fontSize: 14 }}>
                ⚙️ Tech used: Git, GitHub, JavaScript, React, Cypress, CSS and
                HTML.
              </p>
            </p>
          </div>
          <div className="github-emoticon-container">
            <div className="github-child">
              <Git git="https://github.com/junocchi/Pensano-Devs/tree/main" />
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}