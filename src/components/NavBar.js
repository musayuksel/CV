import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { MdOutlineMenu, MdClose } from "react-icons/md";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [offset, setOffset] = useState(0);
  const [scrolled, setScrolled] = useState();
  // const classes = classNames("header", {
  //   scrolled: scrolled,
  // });
  useEffect((_) => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(offset);
  return (
    <nav
      className={`${isMenuOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}
    >
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
        {/* <li>
          <a href="#other">Other</a>
        </li> */}
      </ul>
    </nav>
  );
}
