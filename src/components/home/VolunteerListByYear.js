import React, { useState } from "react";
import VolunteerInfo from "./VolunteerInfo";
import volunteers from "../../data/volunteers.json";
import "./Home.css";

const VolunteerListByYear = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  // Filter and sort volunteers by selected year, then sort by name
  const filteredVolunteers = volunteers
    .filter((volunteer) =>
      Array.isArray(volunteer.year)
        ? volunteer.year.includes(selectedYear)
        : volunteer.year === selectedYear
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {/* Year selection buttons */}
      <div className="year-buttons-container">
        {[2025, 2024, 2023].map((year) => (
          <button
            key={year}
            className={`year-buttons ${selectedYear === year ? "active" : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Render the list of filtered and sorted volunteers; 
      Style for this is in VolunteerInfo.js */}
      <div className="volunteers-list">
        {filteredVolunteers.map((volunteer) => (
          <VolunteerInfo
            key={volunteer.name}
            name={volunteer.name}
            pronouns={volunteer.pronouns}
            githubPicture={volunteer.githubAvatar}
            linkedIn={volunteer.linkedIn}
            github={volunteer.github}
            jobTitle={volunteer.jobTitle}
            skills={volunteer.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default VolunteerListByYear;
