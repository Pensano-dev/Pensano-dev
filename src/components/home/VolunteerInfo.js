import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Home.css";

const VolunteerInfo = ({ name, pronouns, githubPicture: githubAvatar, linkedIn, github, jobTitle, skills }) => {

  return (
    <div className="volunteer-info-container">
      <img
        src={githubAvatar}
        alt={`${name}'s profile`}
        className="avatar"
      />
      <div className="volunteer-details">
        <div className="name">
          {name} {pronouns}{" "}
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="react-icons" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="react-icons" />
          </a>
        </div>
        <p className="job-title-skills">{jobTitle}</p>
        <p className="job-title-skills">Skills: {skills.join(', ')}</p>
      </div>
    </div>
  );
};

export default VolunteerInfo;
