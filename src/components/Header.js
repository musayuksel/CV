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
        href="https://drive.google.com/file/d/1T3Kff9q5IGl1SHwTc7YK2uNe71poy6io/view?usp=sharing"
        target={"_blank"}
      >
        Download CV
      </a>
    </header>
  );
}
