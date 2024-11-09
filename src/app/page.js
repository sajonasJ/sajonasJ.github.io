"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading";
import Image from "next/image";
import { loadInitialData, loadAdditionalData } from "@/services/dataService";
import useLoadingTimeout from "./hooks/useLoadingTimeout";

export default function Home() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const timeoutDone = useLoadingTimeout(200);

  useEffect(() => {
    const initializePageData = async () => {
      const aboutData = await loadInitialData("about");
      setAbout(aboutData);
      setLoading(false);

      // Load other sections
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

  if (loading || !timeoutDone) {
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
        <div className="intro-section">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 text-center text-md-end mb-4 mb-md-0">
              <h1 className="intro-title">Hi I&apos;m Jonas</h1>
              <div className="intro-div">
              <h5 className="intro-role">Software Developer</h5>
              <h5 className="intro-and">&&</h5>
              <h5 className="intro-role">Registered Nurse</h5>
              </div>
            </div>
            <div className="col-md-6 text-center d-flex justify-content-center">
              <p className="intro-text">{about?.intro}</p>
            </div>
          </div>
        </div>

        <hr className="custom-separator" />
        <div className="sub-section">
          <h2>Career Objective</h2>
          <div className="col-md-6 text-center px-3">
          <p>{about?.objective}</p>
        </div>
        </div>
        <hr className="custom-separator" />
        <div className="sub-section">
          <h2>Project Highlights</h2>
          {about?.projectHighlights?.map((highlight, index) => (
            <p key={index}>{highlight}</p>
          ))}
        </div>
        <hr className="custom-separator" />
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
                <p>
                  {skill.experience
                    ? `${skill.experience} experience`
                    : "Exposure"}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="custom-separator" />
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
        <hr className="custom-separator" />
        <div className="sub-section">
          <h2>Recommendations</h2>
          <div class="border cs-shadow justify-content-center align-items-center rounded mt-3">
            <a
              href="/images/Recommend.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-decoration-none text-reset justify-content-center px-4 py-2 gap-1"
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
        </div>
      </section>
      <Footer />
    </main>
  );
}
