"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

const EducationPage = () => {
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Check sessionStorage for existing data
    const savedEducationData = sessionStorage.getItem("educationData");
    const savedCertificationsData = sessionStorage.getItem("certificationsData");

    if (savedEducationData && savedCertificationsData) {
      // If data exists in sessionStorage, use it
      setEducation(JSON.parse(savedEducationData));
      setCertifications(JSON.parse(savedCertificationsData));
    } else {
      // Fetch data from the API if not in sessionStorage
      const fetchEducationData = async () => {
        try {
          const responseEdu = await fetch("/api/data?section=education");
          const dataEdu = await responseEdu.json();
          setEducation(dataEdu || []);
          sessionStorage.setItem("educationData", JSON.stringify(dataEdu));

          const responseCert = await fetch("/api/data?section=certifications");
          const dataCert = await responseCert.json();
          setCertifications(dataCert || []);
          sessionStorage.setItem("certificationsData", JSON.stringify(dataCert));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchEducationData();
    }
  }, []);

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
