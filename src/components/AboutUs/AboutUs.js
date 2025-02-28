import "./AboutUs.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import OurProjects from "../OurProjects/OurProjects";
import ContactUs from "../ContactUs/ContactUs";
import React, { useState } from "react";
import coFounders from "../../images/co-founders.JPG";

export default function AboutUs() {
  const navigate = useNavigate();
  const [showOurProjects] = useState(false);

  function handleClick(path) {
    navigate(path);
  }
  return (
    <>
      <div className="about-page-container">
        <Navbar />
        <div className="content-container">
          <h2 className="title">About Us</h2>
          <div>
            <p className="about-text">
              Pensano was founded in 2023 by four graduates from
              <a href="https://makers.tech/"> Makers Academy</a>: Josh Penney,
              Juliana Nocchi, Luiz Santos, and Rachel Newby. Having met in 2022
              during the Software Development Bootcamp, we bonded over our
              shared passion for technology and our drive to make a positive
              impact. Each of us honed our skills in agile methodologies,
              test-driven development, and object-oriented programming while at
              Makers, and we have continually embraced new technologies and
              challenges.
            </p>
          </div>
          <p className="about-text">
            Our journey began with the intention of showcasing our collective
            work as Pensano Devs, alongside our individual projects. However, in
            just a few months, we found that others who were transitioning into
            tech shared our enthusiasm and wanted to join us. This transformed
            Pensano into what it is today—a community that welcomes individuals
            at the beginning of their tech careers, offering them opportunities
            to collaborate on meaningful projects and build their portfolios.
          </p>
          <p className="about-text">
            We believe that technology holds the potential to change lives and
            make a real difference. Pensano actively seeks out partnerships with
            organizations that align with our values, creating solutions that
            drive positive change in the world. Together, we continue to grow,
            innovate, and empower others to achieve their goals.
          </p>
          <figure style={{ marginBottom: "20px" }}>
            <img
              className="co-founders-picture"
              src={coFounders}
              alt="the four co-founders"
              width="350"
            />
            <figcaption className="figcaption">
              Pensano's four co-founders at Makers Academy in March 2023{" "}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* TODO: as this appears in other pages, 
      we could create a component and convert it to a link, not button */}
      {/* Link to our projects */}
      <div className="link-our-projects">
        <button
          className="link-text"
          onClick={() => handleClick("/our-projects")}
        >
          Check out our projects here
        </button>
      </div>

      <div>{showOurProjects && <OurProjects />}</div>

      {/* Footer */}
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text-copyright">© Pensano Developers 2025</p>{" "}
          <ContactUs /> {/* LinkedIn icon */}
        </div>
      </div>
    </>
  );
}
