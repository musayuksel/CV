import React, { useState } from "react";
import "../styles/navbar.css";
import { MdOutlineMenu, MdClose } from "react-icons/md";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={`${isMenuOpen ? "open" : ""}`}>
      <div
        className={`menu ${isMenuOpen ? "cross" : ""}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {!isMenuOpen ? <MdOutlineMenu /> : <MdClose />}
      </div>
      <ul onClick={() => setIsMenuOpen((prev) => !prev)}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#other">Other</a>
        </li>
      </ul>
    </nav>
  );
}
