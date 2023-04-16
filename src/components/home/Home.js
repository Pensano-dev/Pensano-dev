/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import Layout from "../layout/layout";

import OurProjects from "../OurProjects/OurProjects";
import josh from "../../images/Josh.svg";
import luiz from "../../images/Luiz.svg";
import juliana from "../../images/Ju.svg";
import rachel from "../../images/Rachel.svg";

function Homepage() {
  const navigate = useNavigate();

  const [showJosh, setShowJosh] = useState(false);
  const [showLuiz, setShowLuiz] = useState(false);
  const [showJuliana, setShowJuliana] = useState(false);
  const [showRachel, setShowRachel] = useState(false);
  const [showOurProjects, setShowOurProjects] = useState(false);
  const [showComponents, setShowComponents] = useState(true);

  const toggleComponents = (show) => {
    setShowComponents(show);
  };

  const handleJosh = () => {
    setShowJosh(false);
    setShowOurProjects(false);
  };

  const handleLuiz = () => {
    setShowLuiz(false);
  };

  const handleJuliana = () => {
    setShowJuliana(false);
  };

  const handleRachel = () => {
    setShowRachel(false);
  };

  const handleOurProjects = (show) => {
    setShowOurProjects(show);
  };

  function handleClick(path) {
    navigate(path);
  }

  return (
    <Layout>
      <div className="page-container">
        <div className="text-and-photos-container">
          <div className="text-container">
            <p className="header">
              {" "}
              Pensano Developers is a team of software engineers who are
              available to hire for job roles in the UK.
            </p>
            <p className="pink-line"></p>
            <p className="text">
              {" "}
              Pensano is Italian for they think; and the developers at Pensano
              Developers do just that: they are problem solvers, they think
              outside the box, and they are deliberate.
            </p>
            <p className="text">
              {" "}
              As graduates from{" "}
              <a href="https://makers.tech" target="_blank">
                Makers Academy
              </a>
              , each is skilled at working in agile environments, test-driven
              development, object-oriented programming, and at quickly adapting
              to new tech stacks. We believe that technology has the power to
              change lives and make a difference, therefore, we actively seek
              out opportunities to collaborate with organizations that align
              with our values and share our vision for creating a better world.
            </p>
            <p className="text">
              {" "}
              This site is designed to showcase our work both collectively, as
              Pensano Devs, and our individual projects. Please take a look
              around.
            </p>
            <br></br>
          </div>

          <div className="coFoundersContainer">
            <p className="headerCoFounders"> Co-Founders</p>
          </div>

          {showComponents && (
            <div className="all-photos-container">
              <div className="photo">
                <img
                  className="photo"
                  src={josh}
                  alt="Joshs photo"
                  onClick={() => handleClick("/josh")}
                />
                <p onClick={() => handleClick("/josh")}>Josh Penney</p>
              </div>

              <div className="photo">
                <img
                  className="photo"
                  src={juliana}
                  alt="Julianas photo"
                  onClick={() => handleClick("/juliana")}
                />
                <p onClick={() => handleClick("/juliana")}>Juliana Nocchi</p>
              </div>

              <div className="photo">
                <img
                  className="photo"
                  src={luiz}
                  alt="Luizs photo"
                  onClick={() => handleClick("/luiz")}
                />
                <p onClick={() => handleClick("/luiz")}>Luiz Santos</p>
              </div>

              <div className="photo">
                <img
                  className="photo"
                  src={rachel}
                  alt="Rachels photo"
                  onClick={() => handleClick("/rachel")}
                />
                <p onClick={() => handleClick("/rachel")}>Rachel Newby</p>
              </div>
            </div>
          )}

          {/* <p className="pink-line"></p> */}

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
            <p className="footer-text-copyright">© Pensano Developers 2023</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
