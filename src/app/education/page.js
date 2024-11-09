"use client";
"use strict";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Image from "next/image";
import Loading from "@/components/loading";
import { loadInitialData, loadAdditionalData } from "@/services/dataService";
import useLoadingTimeout from "../hooks/useLoadingTimeout";

const EducationPage = () => {
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const timeoutDone = useLoadingTimeout(200);

  useEffect(() => {
    const initializePageData = async () => {
      // Load initial 'education' and 'certifications' data
      const educationData = await loadInitialData("education");
      const certificationsData = await loadInitialData("certifications");

      setEducation(educationData);
      setCertifications(certificationsData);
      setLoading(false);

     // Load additional sections in the background
     loadAdditionalData([
      "projects",
      "experience",
      "education",
      "certifications",
      "about",
    ]);
    };

    initializePageData();
  }, []);

  // Show loading component while initial data is being fetched
  if (loading || !timeoutDone) {
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
      <section className="container-fluid">
        <div className="d-flex w-100 flex-column">
          <div className="container-fluid d-flex mb-2 justify-content-between">
            <h2>Tertiary Education</h2>
            <div className="btn btn-sm btn-outline-primary">Sort</div>
          </div>
          <div className="d-flex container-fluid flex-column align-items-center mb-4">
            {education.map((edu, index) => (
              <div key={index} className="card w-100 mb-3">
                <div className="card-header card-head-left">
                  <h4>{edu.degree}</h4>
                </div>
                <div className="card-body d-flex flex-column text-start">
                  <h5>{edu.institution}</h5>
                  <h6>{edu.field}</h6>
                  <p>Duration: {edu.duration}</p>
                  <p>Location: {edu.location}</p>
                  {edu.specialties && (
                    <p>Specialties: {edu.specialties.join(", ")}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="custom-separator" />
        <div className="d-flex w-100 flex-column">
          <div className="container-fluid d-flex mb-2">
            <h2>Certifications</h2>
          </div>
          <div className="d-flex container-fluid flex-column mb-4">
            {certifications.map((cert, index) => (
              <div key={index} className="card w-100 mb-3">
                <div className="card-header d-flex align-items-center px-4 justify-content-between">
                  <div className="d-flex">
                    {cert.imgSrc && (
                      <Image
                        src={cert.imgSrc}
                        alt={`${cert.name} Logo`}
                        width={50}
                        height={50}
                        className="me-3"
                      />
                    )}
                    <h5>{cert.name}</h5>
                  </div>
                  <h6>Issued By: {cert.issuedBy}</h6>
                </div>
                <div className="card-body d-flex flex-column text-start">
                  <p>{cert.description}</p>
                  <p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex justify-content-end pe-3"
                    >
                      View Certification on Credly
                    </a>
                  </p>
                  {cert.specialties && (
                    <p>Specialties: {cert.specialties.join(", ")}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default EducationPage;
