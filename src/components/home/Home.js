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
// volunteers
import jovan from "../../images/Jovan.svg";
import kera from "../../images/Kera.svg";
import manuela from "../../images/Manuela.svg";
import marie from "../../images/Marie.svg";
import marta from "../../images/Marta.svg";
import michal from "../../images/Michal.svg";
import natasha from "../../images/Natasha.svg";
import pablo from "../../images/Pablo.svg";
import sidra from "../../images/Sidra.svg";
import tian from "../../images/Tian.svg";
// graphic designers
import elsa from "../../images/Elsa.svg";

function Homepage() {
  const navigate = useNavigate();

  const [showOurProjects] = useState(false);
  const [showComponents] = useState(true);

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
              Pensano Developers is a team of volunteer developers and UX/UI
              designers on a mission to create a positive impact through
              purposeful development.
            </p>
            <p className="pink-line"></p>
            <p className="text">
              {" "}
              Pensano is Italian for they think; and the volunteers at Pensano
              do just that: they are problem solvers, they think outside the
              box, and they are deliberate.
            </p>
            <p className="text">
              {" "}
              Each is skilled at working in agile environments, test-driven
              development, object-oriented and pair programming, and at quickly
              adapting to new tech stacks. We believe that technology has the
              power to change lives and make a difference, therefore, we
              actively seek out opportunities to collaborate with organizations
              that align with our values and share our vision for creating a
              better world.
            </p>
            <p className="text">
              {" "}
              This site is designed to showcase our work, so please take a look
              around.
            </p>
            <br></br>
          </div>

          {/*Co-Founders & Volunteer Developers */}
          <div className="coFoundersContainer">
            <p className="volunteersHeader">
              {" "}
              Co-Founders & Volunteer Developers
            </p>
          </div>

          {showComponents && (
            <div className="all-photos-container">
              <div className="photo">
                <a
                  href="https://github.com/josh-p-git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="photo-size"
                    src={josh}
                    alt="Joshs photo"
                  ></img>
                </a>
                <a
                  href="https://github.com/josh-p-git"
                  target="_blank"
                  rel="noreferrer"
                >
                  Josh Penney
                </a>
              </div>

              <div className="photo">
                <a
                  href="https://github.com/junocchi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="photo-size"
                    src={juliana}
                    alt="Julianas photo"
                  ></img>
                </a>
                <a
                  href="https://github.com/junocchi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Juliana Nocchi
                </a>
              </div>

              <div className="photo">
                <a
                  href="https://github.com/santosluizfelipe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="photo-size"
                    src={luiz}
                    alt="Luizs photo"
                  ></img>
                </a>
                <a
                  href="https://github.com/santosluizfelipe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Luiz Santos
                </a>
              </div>

              <div className="photo">
                <a
                  href="https://github.com/rachelnewby"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="photo-size"
                    src={rachel}
                    alt="Rachels photo"
                  ></img>
                </a>
                <a
                  href="https://github.com/rachelnewby"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rachel Newby
                </a>
              </div>
            </div>
          )}

          {/* Volunteer Developers */}
          <div className="volunteersContainer">
            <p className="volunteersHeader"> Volunteer Developers</p>
          </div>

          <div className="all-photos-container">
            {/* Add new volunteers below in alphabetical order*/}

            <div className="photo-volunteers">
              <a
                href="https://github.com/Royalone94"
                target="_blank"
                rel="noreferrer"
              >
                <img src={jovan} alt="Keras photo" className="photo-size"></img>
              </a>
              <a
                href="https://github.com/Royalone94"
                target="_blank"
                rel="noreferrer"
              >
                Jovan Aleksic
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/Royalone94"
                target="_blank"
                rel="noreferrer"
              >
                <img src={jovan} alt="Keras photo" className="photo-size"></img>
              </a>
              <a
                href="https://github.com/Royalone94"
                target="_blank"
                rel="noreferrer"
              >
                Jovan Aleksic
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/Keremesh"
                target="_blank"
                rel="noreferrer"
              >
                <img src={kera} alt="Keras photo" className="photo-size"></img>
              </a>
              <a
                href="https://github.com/Keremesh"
                target="_blank"
                rel="noreferrer"
              >
                Kera Sultan
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/ManuelaIacobovici"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={manuela}
                  alt="Manuelas photo"
                  className="photo-size"
                ></img>
              </a>
              <a
                href="https://github.com/ManuelaIacobovici"
                target="_blank"
                rel="noreferrer"
              >
                Manuela Iacobovici
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/ChalkandFeather"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={marie}
                  alt="Manuelas photo"
                  className="photo-size"
                ></img>
              </a>
              <a
                href="https://github.com/ChalkandFeather"
                target="_blank"
                rel="noreferrer"
              >
                Marie Taylor
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://martabia.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={marta}
                  alt="Martas photo"
                  className="photo-size"
                ></img>
              </a>
              <a
                href="https://martabia.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                Marta Bianchini
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/MichalSmyk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={michal}
                  alt="Michals photo"
                  className="photo-size"
                ></img>
              </a>
              <a
                href="https://github.com/MichalSmyk"
                target="_blank"
                rel="noreferrer"
              >
                Michal Smyk
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/natashabuckham"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={natasha}
                  alt="Natashas photo"
                  className="photo-size"
                ></img>
              </a>
              <a
                href="https://github.com/natashabuckham"
                target="_blank"
                rel="noreferrer"
              >
                Natasha Buckham
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/pablisch"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={pablo}
                  alt="Pablos photo"
                  className="photo-size"
                ></img>
              </a>
              <a
                href="https://github.com/pablisch"
                target="_blank"
                rel="noreferrer"
              >
                Pablo Joyce
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/siqbal181"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={sidra}
                  alt="Sidras photo"
                  className="photo-size"
                ></img>
              </a>
              <a
                href="https://github.com/siqbal181"
                target="_blank"
                rel="noreferrer"
              >
                Sidra Iqbal
              </a>
            </div>

            <div className="photo-volunteers">
              <a
                href="https://github.com/Tian807"
                target="_blank"
                rel="noreferrer"
              >
                <img src={tian} alt="Tians photo" className="photo-size"></img>
              </a>
              <a
                href="https://github.com/Tian807"
                target="_blank"
                rel="noreferrer"
              >
                Tian Pan
              </a>
            </div>
          </div>

          {/* Volunteer Graphic Designers */}
          <div className="volunteersContainer">
            <p className="volunteersHeader"> Volunteer Graphic Designers</p>
          </div>

          <div className="all-photos-container">
            <div className="photo-volunteers">
              <a
                href="https://www.linkedin.com/in/elnafarlinkein/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={elsa} alt="Elsas photo" className="photo-size"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/elnafarlinkein/"
                target="_blank"
                rel="noreferrer"
              >
                Elsa Farmer
              </a>
            </div>
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
            <p className="footer-text-copyright">© Pensano Developers 2023</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
