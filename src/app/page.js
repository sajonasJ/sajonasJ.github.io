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
            {[
              {
                name: "HTML",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
                experience: "3 years",
              },
              {
                name: "JavaScript",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
                experience: "2.5 years",
              },
              {
                name: "CSS",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                experience: "3 years",
              },
              {
                name: "Python",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                experience: "1 year",
              },
              {
                name: "C#",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
                experience: "1 year",
              },
              {
                name: "React",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                experience: "1 year",
              },
              {
                name: "PHP",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
                experience: "2 years",
              },
              {
                name: "Angular",
                imgSrc:
                  "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
                experience: "1 year",
              },
            ].map((skill, index) => (
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
                />{" "}
                {/* Optimized Image */}
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
