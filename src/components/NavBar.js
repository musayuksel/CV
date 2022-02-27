import React from "react";
import "../styles/navbar.css";
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#others">Others</a>
        </li>
        <li>
          <a href="#footer">Other2</a>
        </li>
      </ul>
    </nav>
  );
}
