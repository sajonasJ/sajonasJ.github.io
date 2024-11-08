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
        <div className="sub-section box-center px-5 flex-row">
          <div className="container box-center flex-column">
            <h1>Hi I&apos;m {about?.name || "Jonas"}</h1>
            <h5>Software Developer</h5>
            <h5>&&</h5>
            <h5>Registered Nurse</h5>
          </div>
          <div className="container">
            <p>
              I&apos;m a recent graduate in Software Development from Griffith
              University, with a unique background as a registered nurse with
              over a decade of experience in the operating theatre. My passion
              for technology and desire to create solutions brought me to pursue
              a career in software development. As a versatile developer, I have
              experience across web development (front-end and back-end), mobile
              development, and software applications, and I&apos;ve even
              explored game development. I&apos;m driven by a commitment to
              delivering high-quality results, and I&apos;m a highly
              results-oriented individual who thrives on challenges. I&apos;m
              excited about new opportunities to leverage my diverse skills,
              contribute to innovative projects, and continue growing alongside
              my team.
            </p>
          </div>
        </div>

        <div className="container w-50">
          <h2>Career Objective</h2>
          <p>
            My goal is to become an expert in software engineering, enabling me
            to apply my skills across diverse scenarios and fields. I’m
            committed to a structured approach to growth—focusing deeply on one
            area until I master it, and then moving on to tackle the next
            challenge. This step-by-step progression not only fuels my passion
            for continuous learning but also allows me to build a versatile
            skill set to solve complex problems in various contexts.
          </p>
        </div>

        <div className="sub-section">
          <h2>Project Highlights</h2>
          {about?.projectHighlights?.map((highlight, index) => (
            <p key={index}>{highlight}</p>
          ))}
        </div>

        <div className="sub-section " id="skills">
          <h2>Technical Skills and Tools</h2>
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
          <div className="awards-container">
            {about?.awards?.map((award, index) => (
              <div key={index} className="award-item">
                <div className="d-flex flex-row mb-2 justify-content-between align-items-center gap-2">
                  <Image
                    src={award.imgSrc}
                    alt={`${award.name} Badge`}
                    width={100}
                    height={100}
                    className="award-badge"
                  />
                  <div>
                    <h5 className="award-name">{award.name}</h5>
                    <p className="award-issued-by">
                      Issued by: {award.issuedBy}
                    </p>
                  </div>
                </div>
                <div className="text-start ps-4">
                  <p className="award-description">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sub-section">
          <h2>Recommendations</h2>

          <a
            href="/images/Recommend.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-decoration-none text-reset justify-content-center mt-3 gap-1"
          >
            Griffith University Recommendation
            <Image
              src="/images/Pdf.png"
              alt="PDF Icon"
              width={32}
              height={32}
              className="me-2"
            />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
