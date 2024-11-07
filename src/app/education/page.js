"use client";
"use strict";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading"; // Import the Loading component
import { loadInitialData, loadAdditionalData } from "@/services/dataService";

const EducationPage = () => {
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const initializePageData = async () => {
      // Load initial 'education' and 'certifications' data
      const educationData = await loadInitialData("education");
      const certificationsData = await loadInitialData("certifications");

      setEducation(educationData);
      setCertifications(certificationsData);
      setLoading(false); // Stop loading after fetching initial data

      // Load additional sections in the background
      loadAdditionalData(["projects", "experience", "contact", "about"]);
    };

    initializePageData();
  }, []);

  // Show loading component while initial data is being fetched
  if (loading) {
    return (
      <main>
        <Navigation />
        <Loading /> {/* Display Loading component here */}
      </main>
    );
  }

  return (
    <main>
      <Navigation />
      <section className="container-fluid">
        <div className="d-flex w-100 flex-column">
          <div className="container-fluid d-flex mb-4 justify-content-between">
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
                  {edu.specialties && <p>Specialties: {edu.specialties.join(", ")}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex w-100 flex-column">
          <div className="container-fluid d-flex mb-4">
            <h2>Certifications</h2>
          </div>
          <div className="d-flex container-fluid flex-column mb-4">
            {certifications.map((cert, index) => (
              <div key={index} className="card w-100 mb-3">
                <div className="card-header d-flex">
                  <h5>{cert.name}</h5>
                </div>
                <div className="card-body d-flex flex-column text-start">
                  <h6>{cert.institution}</h6>
                  <p>Duration: {cert.duration}</p>
                  <p>Location: {cert.location}</p>
                  {cert.specialties && <p>Specialties: {cert.specialties.join(", ")}</p>}
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
