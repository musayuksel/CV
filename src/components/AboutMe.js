import React from "react";
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../styles/aboutMe.css";

export default function AboutMe() {
  return (
    <section className="aboutme">
      {/* <h3>About me</h3> */}
      <p className="aboutme-text">
        I am recent graduate of Code Your Future. Prior to CYF I was in the Air
        Force for 9 years as a Pilot and an Instructor Pilot. My passions
        include cycling as I love nature and all things that fly.
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
