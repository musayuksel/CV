import React from "react";
import "../styles/header.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header id="home">
      <NavBar />
      <h1>Musa Yuksel</h1>
      <p>Full Stack Web Devoloper</p>
      <a
        className="download-cv"
        href="https://drive.google.com/file/d/1oQ-KyjEeJ_wayq8xyo-2gYsRiqN7zfWZ/view?usp=sharing"
        target={"_blank"}
      >
        Download CV
      </a>
    </header>
  );
}
