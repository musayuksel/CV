import React from "react";

export default function Skills({ skills }) {
  const skillsList = skills.map((skill, index) => <li key={index}>{skill}</li>);
  return <ul>{skillsList}</ul>;
}
