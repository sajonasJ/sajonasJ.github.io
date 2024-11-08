"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading";
import Image from "next/image";
import { loadInitialData, loadAdditionalData } from "@/services/dataService";

export default function Home() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePageData = async () => {
      const aboutData = await loadInitialData("about");
      setAbout(aboutData);
      setLoading(false);

      // Load other sections in the background if needed elsewhere
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
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navigation />
      <section className="container-fluid d-flex flex-column justify-content-around">
        <div className="sub-section box-center flex-row">
          <div className="container box-center flex-column">
            <h1>Hi I&apos;m {about?.name || "Jonas"}</h1>
            <h5>Software Developer</h5>
            <h5>&&</h5>
            <h5>Registered Nurse</h5>
          </div>
          <div className="container">
            <p>{about?.title || "Software Development Graduate"}</p>
            <p>I do Web Development</p>
            <p>I do Mobile App Development</p>
            <p>I do Games Development</p>
          </div>
        </div>

        <div className="sub-section">
          <h2>Career Objective</h2>
          <p>
            {about?.careerObjective ||
              "Learn as much from all kinds of software development"}
          </p>
        </div>

        <div className="sub-section">
          <h2>Project Highlights</h2>
          {about?.projectHighlights?.map((highlight, index) => (
            <p key={index}>{highlight}</p>
          ))}
        </div>

        <div className="sub-section" id="skills">
          <h2>Skills</h2>
          <div className="skillContainer ">
            {about?.skills?.map((skill, index) => (
              <div className="skillImg" key={index}>
                <Image
                  className="imgStyle"
                  src={skill.imgSrc}
                  alt={`${skill.name} Logo`}
                  width={100}
                  height={100}
                />
                <h6 className="py-1">{skill.name}</h6>
                <p>{skill.experience || "Exposure"} experience</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sub-section">
          <h2>Awards</h2>
          {about?.awards?.map((award, index) => (
            <p key={index}>{award}</p>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
