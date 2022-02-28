import "./App.css";
import ExperienceCard from "./components/ExperienceCard";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Header from "./components/Header";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import TechSkillsBar from "./components/TechSkillsBar";
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
          </ul>
        </section>
        <h2 id="experiences">EXPERIENCES</h2>
        <ExperienceCard
          role={"Traniee Developer"}
          organization={"Code Your Future(CYF)"}
          startDate={"Dec 2020"}
          endDate={"Feb 2022"}
          location={"United Kingdom"}
          skills={[
            "JavaScript",
            "React",
            "Express - Node.js",
            "PostgresSQL",
            "Git",
            "HTML",
            "CSS",
          ]}
          explanations={[
            "Appointed to lead the Product Management & Development of a decision engine to automate the suitability and eligibility assessments in the CYF appli- cation process using AI based knowledge map.",
            "Optimized the student selection procedure which will save hundreds of hours worth of volunteer time.",
          ]}
        />
        <ExperienceCard
          role={"Instructor Pilot & Senior Supervisor"}
          organization={"Turkish Air Force"}
          startDate={"Jun 2014"}
          endDate={"Jul 2019"}
          location={"Izmir,Turkey"}
          skills={[
            "Leadership",
            "Multitasking",
            "Problem Solving",
            "Coordination",
            "Critical Thinking",
            "Working in a Team",
            "Time managment",
          ]}
          explanations={[
            "As an instructor pilot, I was responsible for teaching candidates to simplify the problems and to correct the mistakes made with the most appropriate method.",
            "As Senior Supervisor, I had a wide range of responsibilities such as following the flight plans of the candidates, solving their personnel problems outside the flight.",
            "In these roles,  I demonstrated very important skills that are easily transferable to working in a tech team like Coordination, Leadership, Teamwork, Problem Solving etc.",
          ]}
        />
        <ExperienceCard
          role={"Fighter Pilot"}
          organization={"Turkish Air Force"}
          startDate={"Jun 2010"}
          endDate={"May 2014"}
          location={"Eskisehir,Turkey"}
          skills={[
            "Leadership",
            "Multitasking",
            "Problem Solving",
            "Coordination",
            "Critical Thinking",
            "Working in a Team",
            "Time managment",
          ]}
          explanations={[
            "Working as a pilot is very difficult but exciting and fulfilling.",
            "By serving as a pilot on a high-performance jet aircraft, I've gained many transferable skills such as leadership, teamwork, multitasking, communication.",
          ]}
        />
        <h2>VOLUNTEER EXPERIENCE</h2>
        <ExperienceCard
          role={"Designer"}
          organization={"Driver Net"}
          startDate={"Jun 2021"}
          endDate={"Oct 2021"}
          location={"United Kingdom"}
          skills={["Figma", "Git"]}
          explanations={[
            "Appointed to lead the Product Management & Development of a decision engine to automate the suitability and eligibility assessments in the CYF appli- cation process using AI based knowledge map.",
            "Optimized the student selection procedure which will save hundreds of hours worth of volunteer time.",
          ]}
        />
        <h2 id="projects">PROJECTS</h2>
        <section className="project-container">
          <ExperienceCard
            role={"Designer"}
            organization={"Driver Net"}
            startDate={"Jun 2021"}
            endDate={"Oct 2021"}
            location={"United Kingdom"}
            skills={["Figma", "Git"]}
            explanations={[
              "Appointed to lead the Product Management & Development of a decision engine to automate the suitability and eligibility assessments in the CYF appli- cation process using AI based knowledge map.",
              "Optimized the student selection procedure which will save hundreds of hours worth of volunteer time.",
            ]}
          />
          <ExperienceCard
            role={"Designer"}
            organization={"Driver Net"}
            startDate={"Jun 2021"}
            endDate={"Oct 2021"}
            location={"United Kingdom"}
            skills={["Figma", "Git"]}
            explanations={[
              "Appointed to lead the Product Management & Development of a decision engine to automate the suitability and eligibility assessments in the CYF appli- cation process using AI based knowledge map.",
              "Optimized the student selection procedure which will save hundreds of hours worth of volunteer time.",
            ]}
          />
        </section>

        <h2>LANGUAGES</h2>
        <section>
          <Skills skills={["English", "Turkish"]} />
        </section>
        <h2>LIFE PHILOSOPHY</h2>
        <section className="life-motto">
          <p>“Life is too short to be miserable.”</p>
        </section>
      </main>
    </div>
  );
}

export default App;
