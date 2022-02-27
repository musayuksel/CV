import React from "react";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <h1>Musa Yuksel</h1>
      <h2>Full Stack Web Developer</h2>
      <MdAlternateEmail />
      <a
        target={"blank"}
        href="mailto:musayuxel@gmail.com?subject=About%20job%20application"
      >
        musayuxel@gmail.com
      </a>
      <MdOutlineLocationOn />
      <p>United Kingdom</p>
      <BsLinkedin />
      <a
        href="https://www.linkedin.com/in/musa-yuksel-625838205/"
        target={"blank"}
      >
        musa-yuksel
      </a>
      <BsGithub />
      <a href="https://github.com/musayuksel" target={"blank"}>
        musa-yuksel
      </a>
    </header>
  );
}
