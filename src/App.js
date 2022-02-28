import "./App.css";
import ExperienceCard from "./components/ExperienceCard";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2 id="about">ABOUT ME</h2>
        <AboutMe />
        <h2 id="experiences">EXPERIENCE</h2>
        <ExperienceCard
          role={"Traniee Developer"}
          organization={"Code Your Future(CYF)"}
          startDate={"Dec 2020"}
          endDate={"Current"}
          location={"United Kingdom"}
          skills={[
            "JavaScript",
            "React",
            "Express - Node.js",
            "PostgresSQL",
            "Git",
            "Heroku",
          ]}
          explanations={[
            "Appointed to lead the Product Management & Development of a decision engine to automate the suitability and eligibility assessments in the CYF appli- cation process using AI based knowledge map.",
            "Optimized the student selection procedure which will save hundreds of hours worth of volunteer time.",
          ]}
        />
        <ExperienceCard
          role={"Traniee Developer"}
          organization={"Code Your Future(CYF)"}
          startDate={"Dec 2020"}
          endDate={"Current"}
          location={"United Kingdom"}
          skills={["JavaScript", "React", "Express - Node.js", "PostgresSQL"]}
          explanations={[
            "Appointed to lead the Product Management & Development of a decision engine to automate the suitability and eligibility assessments in the CYF appli- cation process using AI based knowledge map.",
            "Optimized the student selection procedure which will save hundreds of hours worth of volunteer time.",
          ]}
        />
        <h2>VOLUNTEER EXPERIENCE</h2>
        <ExperienceCard
          role={"Traniee Developer"}
          organization={"Code Your Future(CYF)"}
          startDate={"Dec 2020"}
          endDate={"Current"}
          location={"United Kingdom"}
          skills={["Figma", "Git", "Heroku"]}
          explanations={[
            "Appointed to lead the Product Management & Development of a decision engine to automate the suitability and eligibility assessments in the CYF appli- cation process using AI based knowledge map.",
            "Optimized the student selection procedure which will save hundreds of hours worth of volunteer time.",
          ]}
        />
        {/* <aside className="aside-info-container"> */}
        <h2>TECHNICAL SKILLS</h2>
        <section className="tech-skills">
          <Skills
            skills={[
              "JavaScript",
              "React",
              "Express - Node.js",
              "PostgresSQL",
              "Git",
              "Heroku",
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
        {/* </aside> */}
      </main>
    </div>
  );
}

export default App;
