import React from "react";
import DatesAndLocations from "./DatesAndLocations";
import Skills from "./Skills";

export default function ExperienceCard({
  role,
  organization,
  startDate,
  endDate,
  location,
  skills,
  explanations,
}) {
  const explanationList = explanations.map((explanation, index) => (
    <li key={index}>{explanation}</li>
  ));
  return (
    <section className="experience-card">
      <h3 className="role">{role}</h3>
      <h4 className="organization">{organization}</h4>
      <DatesAndLocations
        startDate={startDate}
        endDate={endDate}
        location={location}
      />
      <Skills skills={skills} />
      <ul className="explanation-container">{explanationList}</ul>
    </section>
  );
}
