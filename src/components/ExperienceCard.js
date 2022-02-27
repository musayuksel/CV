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
    <section>
      <h2>{role}</h2>
      <h3>{organization}</h3>
      <DatesAndLocations
        startDate={startDate}
        endDate={endDate}
        location={location}
      />
      <Skills skills={skills} />
      <ul>{explanationList}</ul>
    </section>
  );
}
