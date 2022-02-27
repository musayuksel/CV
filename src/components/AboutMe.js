import React from "react";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../styles/aboutMe.css";

export default function AboutMe() {
  return (
    <section className="aboutme" id="about">
      <h3>About me</h3>
      <p className="aboutme-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eligendi
        harum itaque cumque nihil, enim possimus, eos qui porro aspernatur
        dignissimos impedit officia labore sit dolorum minima explicabo soluta
        placeat!
      </p>
      <section className="contact-infos">
        <div>
          <MdAlternateEmail />
          <a
            target={"blank"}
            href="mailto:musayuxel@gmail.com?subject=About%20job%20application"
          >
            musayuxel@gmail.com
          </a>
        </div>
        <div>
          <MdOutlineLocationOn />
          <p>United Kingdom</p>
        </div>
        <div>
          <BsLinkedin />
          <a
            href="https://www.linkedin.com/in/musa-yuksel-625838205/"
            target={"blank"}
          >
            musa-yuksel
          </a>
        </div>
        <div>
          <BsGithub />
          <a href="https://github.com/musayuksel" target={"blank"}>
            musa-yuksel
          </a>
        </div>
      </section>
    </section>
  );
}
