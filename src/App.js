import "./App.css";
import ExperienceCard from "./components/ExperienceCard";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Header from "./components/Header";
import TechSkillsBar from "./components/TechSkillsBar";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2 id="about">ABOUT ME</h2>
        <AboutMe />
        <h2 id="skills">TECHNICAL SKILLS</h2>
        <section className="tech-skills">
          <ul>
            <TechSkillsBar name={"Javascript"} percentage={80} />
            <TechSkillsBar name={"React"} percentage={85} />
            <TechSkillsBar name={"Express - Node.js"} percentage={60} />
            <TechSkillsBar name={"PostgresSQL"} percentage={50} />
            <TechSkillsBar name={"HTML"} percentage={80} />
            <TechSkillsBar name={"CSS"} percentage={80} />
            <TechSkillsBar name={"Git"} percentage={70} />
            {/* <TechSkillsBar name={"Git"} percentage={70} /> */}
          </ul>
        </section>
        <section className="experiences-container">
          <h2 id="experiences">EXPERIENCES</h2>
          <ExperienceCard
            role={"Traniee Developer"}
            organization={"Code Your Future(CYF)"}
            startDate={"Dec 2020"}
            endDate={"Present"}
            location={"United Kingdom"}
            skills={[
              "JavaScript",
              "ReactJS",
              "Node.js",
              "ExpressJS",
              "PostgresSQL",
              "Git",
              "HTML",
              "CSS",
              "Figma",
            ]}
            explanations={[
              // "Code Your Future is not just an education but an amazing experience.",
              "Designing and developing front-end back-end applications.",
              "Working on weekly projects to solidify newly learned technologies.(All of my projects are available on my Github profile.)",
              "Putting my soft skills into practice through frequent pair programming sessions, enhancing my problem solving and presentation skills.",
              ,
            ]}
          />
          <ExperienceCard
            role={"Fighter Pilot & Instructor Pilot"}
            organization={"Turkish Air Force"}
            startDate={"Jun 2010"}
            endDate={"Jul 2019"}
            location={"Turkey"}
            skills={
              [
                // "Leadership",
                // "Multitasking",
                // "Problem Solving",
                // "Coordination",
                // "Critical Thinking",
                // "Working in a Team",
                // "Teamwork",
              ]
            }
            explanations={[
              "In highly dynamic and often stressful conditions, I have completed approximately 1000 hours of well-executed flight, focusing on accurate and continuous communications with my mission commander, whilst readily assimilating flight-critical procedures & operations, working with complex technologies that are continuously developing",
            ]}
          />
        </section>
        <h2 id="projects">PROJECTS</h2>
        <section className="project-container">
          <Projects
            imgLink={"htct.png"}
            explanation={
              "A group project that allows trainees to follow their daily stand-ups more effectively and retrospectively."
            }
            githubLink={
              "https://github.com/musayuksel/Goal-app-CYF-final-project"
            }
            liveLink={"https://goal-app-cyf-final-project.herokuapp.com"}
          />
          <Projects
            imgLink={"shoe.png"}
            explanation={
              "A full-stack e-commerce web application (MVP) that enables shoe shopping for users... "
            }
            githubLink={"https://github.com/musayuksel/golden-shoe"}
            liveLink={"https://musa-golden-shoe.herokuapp.com/"}
          />
          <Projects
            imgLink={"quote.png"}
            explanation={"Generate a random quote for yourself!"}
            githubLink={"https://github.com/musayuksel/quote-server-frontend"}
            liveLink={"https://musayuksel-quote-server.netlify.app/"}
          />
          <Projects
            imgLink={"hotel.png"}
            explanation={"A hotel booking application in React."}
            githubLink={"https://github.com/musayuksel/cyf-hotel-react"}
            liveLink={"https://cyf-musayuksel-hotel-react.netlify.app/"}
          />
          <Projects
            imgLink={"baby.png"}
            explanation={"Baby name picker in React."}
            githubLink={"https://github.com/musayuksel/baby-names-react"}
            liveLink={"https://cyf-musayuksel-baby-names.netlify.app/"}
          />
        </section>
        <h2 id="education">EDUCATION</h2>
        <section className="education-container">
          <ExperienceCard
            role={""}
            organization={"Code Your Future(CYF)"}
            startDate={"Dec 2020"}
            endDate={"Feb 2022"}
            location={"United Kingdom"}
            skills={[]}
            explanations={["Trainee Developer"]}
          />
          <ExperienceCard
            role={""}
            organization={"Flight School"}
            startDate={"Sep 2008"}
            endDate={"May 2010"}
            location={"Izmir, Turkey"}
            skills={[]}
            explanations={["Military Flight Training"]}
          />
          <ExperienceCard
            role={""}
            organization={"Turkish Air Force Acedemy"}
            startDate={"Sep 2004"}
            endDate={"AGU 2008"}
            location={"Istanbul, Turkey"}
            skills={[]}
            explanations={[
              "Bachelor's degree - Computer Engineering",
              "Military Officer",
            ]}
          />
        </section>
        <h2>VOLUNTEER EXPERIENCE</h2>
        <section className="volunteer">
          <ExperienceCard
            role={"Volunteer"}
            organization={"Code Your Future"}
            startDate={"Mar 2022"}
            endDate={"Recent"}
            location={"United Kingdom"}
            skills={["JavaScript", "HTML", "CSS"]}
            explanations={[
              "Helping the next intake of cohorts to complete the Intro to Digital application process.",
              " Reviewing HTML, CSS, JavaScript projects/stages and giving constructive feedback.",
            ]}
          />
          <ExperienceCard
            role={"Volunteer"}
            organization={"Driver Net"}
            startDate={"Jun 2021"}
            endDate={"Oct 2021"}
            location={"United Kingdom"}
            skills={["Figma"]}
            explanations={[
              "Concentrated on Figma and made UI/UX improvements in the product design process.",
              "Attended the business meeting as a motivational speaker.",
            ]}
          />
        </section>
        {/* <h2>OTHERS</h2>
        <section id="other">
          
        </section> */}
      </main>
      <footer>
        <section className="footer-links">
          <a
            href="https://www.linkedin.com/in/musa-yuksel-625838205/"
            target={"_blank"}
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/musayuksel" target={"_blank"}>
            <BsGithub />
          </a>
          <a href="https://twitter.com/MusaYuxel" target={"_blank"}>
            <BsTwitter />
          </a>
        </section>
        <p>© Copyright 2022 Musa Yuksel</p>
        <a href="https://github.com/musayuksel/CV" target={"_blank"}>
          Codebase
        </a>
      </footer>
    </div>
  );
}

export default App;
