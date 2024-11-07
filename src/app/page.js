"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading";
import Image from "next/image";
import { loadInitialData, loadAdditionalData } from "@/services/dataService";

// Import images from the local images folder
import Anaconda from '../images/Anaconda.png';
import Angular from '../images/Angular.png';
import Apache from '../images/Apache.png';
import AWS from '../images/AWS.png';
import Bootstrap from '../images/Bootstrap.png';
import Confluence from '../images/Confluence.png';
import CSharp from '../images/CSharp.png';
import CSS from '../images/CSS.png';
import Docker from '../images/Docker.png';
import DockerCompose from '../images/DockerCompose.jpeg';
import HomeAssistant from '../images/HomeAssistant.png';
import HTML from '../images/HTML.png';
import JavaScript from '../images/JavaScript.png';
import Jira from '../images/Jira.png';
import Kubernetes from '../images/Kubernetes.svg';
import Laravel from '../images/Laravel.svg';
import Linux from '../images/Linux.jpg';
import MongoDB from '../images/MongoDB.png';
import MySQL from '../images/MySQL.png';
import NextJS from '../images/NextJS.png';
import NodeJS from '../images/NodeJS.svg';
import PHP from '../images/PHP.png';
import Python from '../images/Python.png';
import ReactLogo from '../images/React.png';
import ReduxSaga from '../images/Redux-Saga.svg';
import Redux from '../images/Redux.png';
import Sass from '../images/Sass.png';
import SQL from '../images/SQL.png';
import TypeScript from '../images/TypeScript.png';
import Unity from '../images/Unity.png';
import VSCode from '../images/VSCode.png';
import XCode from '../images/XCode.png';

export default function Home() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePageData = async () => {
      const aboutData = await loadInitialData("about");
      setAbout(aboutData);
      setLoading(false);

      loadAdditionalData([
        "projects",
        "experience",
        "education",
        "certifications",
        "contact",
      ]);
    };

    initializePageData();
  }, []);

  if (loading) {
    return (
      <main>
        <Navigation />
        <Loading />
      </main>
    );
  }

  // Define default skills array with experience set to "1 year" if not specified
  const skills = [
    { name: "Anaconda", imgSrc: Anaconda, experience: "2 years" },
    { name: "Angular", imgSrc: Angular, experience: "1 year" },
    { name: "Apache", imgSrc: Apache },
    { name: "AWS", imgSrc: AWS, experience: "2 years" },
    { name: "Bootstrap", imgSrc: Bootstrap, experience: "3 years" },
    { name: "Confluence", imgSrc: Confluence },
    { name: "C#", imgSrc: CSharp, experience: "2 years" },
    { name: "CSS", imgSrc: CSS, experience: "3 years" },
    { name: "Docker", imgSrc: Docker, experience: "1.5 years" },
    { name: "Docker Compose", imgSrc: DockerCompose },
    { name: "Home Assistant", imgSrc: HomeAssistant, experience: "6 months" },
    { name: "HTML", imgSrc: HTML, experience: "3 years" },
    { name: "JavaScript", imgSrc: JavaScript, experience: "2.5 years" },
    { name: "Jira", imgSrc: Jira },
    { name: "Kubernetes", imgSrc: Kubernetes, experience: "1 year" },
    { name: "Laravel", imgSrc: Laravel },
    { name: "Linux", imgSrc: Linux },
    { name: "MongoDB", imgSrc: MongoDB },
    { name: "MySQL", imgSrc: MySQL },
    { name: "Next.js", imgSrc: NextJS },
    { name: "Node.js", imgSrc: NodeJS },
    { name: "PHP", imgSrc: PHP },
    { name: "Python", imgSrc: Python, experience: "2 years" },
    { name: "React", imgSrc: ReactLogo },
    { name: "Redux Saga", imgSrc: ReduxSaga },
    { name: "Redux", imgSrc: Redux },
    { name: "Sass", imgSrc: Sass },
    { name: "SQL", imgSrc: SQL },
    { name: "TypeScript", imgSrc: TypeScript },
    { name: "Unity", imgSrc: Unity },
    { name: "VSCode", imgSrc: VSCode },
    { name: "XCode", imgSrc: XCode },
  ].map(skill => ({
    ...skill,
    experience: skill.experience || "1 year", // Set default experience if not provided
  }));

  return (
    <main>
      <Navigation />
      <section className="container-fluid d-flex flex-column justify-content-around">
        <div className="sub-section">
          <h1>Hi I&apos;m {about?.name || "Jonas"}</h1>
          <p>{about?.title || "Software Development Graduate"}</p>
          <p>I do Web Development</p>
          <p>I do Mobile App Development</p>
          <p>I do Games Development</p>
        </div>

        <div className="sub-section">
          <h3>Career Objective</h3>
          <p>
            {about?.careerObjective ||
              "Learn as much from all kinds of software development"}
          </p>
        </div>

        <div className="sub-section">
          <h3>Project Highlights</h3>
          {about?.projectHighlights?.map((highlight, index) => (
            <p key={index}>{highlight}</p>
          ))}
        </div>

        <div className="sub-section" id="skills">
  <h3>Skills</h3>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
    {skills.map((skill, index) => (
      <div
        key={index}
        style={{
          textAlign: "center",
          width: "120px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <Image
          src={skill.imgSrc}
          alt={`${skill.name} Logo`}
          width={50}
          height={50}
          style={{ objectFit: "contain" }} // Ensures the image fits within the bounds without stretching
        />
        <h6 style={{ marginTop: "0.5rem" }}>{skill.name}</h6>
        <p>{skill.experience} experience</p>
      </div>
    ))}
  </div>
</div>


        <div className="sub-section">
          <h3>Awards</h3>
          {about?.awards?.map((award, index) => (
            <p key={index}>{award}</p>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
