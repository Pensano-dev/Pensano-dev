import React, { useState } from "react";
import VolunteerInfo from "./VolunteerInfo";
import volunteers from "../../data/volunteers.json";

const VolunteerListByYear = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  // Filter and sort volunteers by selected year, then sort by name
  const filteredVolunteers = volunteers
  .filter(volunteer => 
    Array.isArray(volunteer.year)
      ? volunteer.year.includes(selectedYear)
      : volunteer.year === selectedYear
  )
  .sort((a, b) => a.name.localeCompare(b.name)); // Sorting alphabetically by name


  return (
    <div className="volunteer-list">
      {/* Year selection buttons */}
      <div className="year-buttons flex space-x-4 justify-center mb-6">
        {[2025, 2024, 2023].map(year => (
          <button
            key={year}
            className={`p-2 rounded-lg ${selectedYear === year ? "bg-green-400" : "bg-gray-200"}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Render the list of filtered and sorted volunteers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredVolunteers.map(volunteer => (
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
