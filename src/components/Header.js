import React from "react";
import "../styles/header.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header id="home">
      <NavBar />
      <img src="./musa.png" alt="picture of musa" />
      <h1>Musa Yuksel</h1>
      <p>Full Stack Web Devoloper</p>
    </header>
  );
}
