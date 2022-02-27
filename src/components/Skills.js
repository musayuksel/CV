import React from "react";

export default function Skills({ skills }) {
  const skillsList = skills.map((skill, index) => (
    <li key={index} className="skills">
      {skill}
    </li>
  ));
  return <ul className="skills-container">{skillsList}</ul>;
}
