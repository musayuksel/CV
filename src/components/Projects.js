import React from "react";
import "../styles/projects.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
// BsBoxArrowUpRight
export default function Projects({
  explanation,
  githubLink,
  liveLink,
  imgLink,
}) {
  const backgroundStyle = {
    backgroundImage: `url("../images/${imgLink}")`,
  };
  return (
    <div className="item clean" style={backgroundStyle}>
      <div className="overlay">
        <span>"</span>
        <span>{explanation}</span>
        <span></span>
        <div className="project-link-container">
          <a className="project-link" href={githubLink} target={"_blank"}>
            GitHub
            <BsBoxArrowUpRight />
          </a>
          <a className="project-link" href={liveLink} target={"_blank"}>
            Live
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}
