"use client";
"use strict";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading";
import { loadInitialData, loadAdditionalData } from "@/services/dataService";
import useLoadingTimeout from "../hooks/useLoadingTimeout";

const ExperiencePage = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const timeoutDone = useLoadingTimeout(200);

  useEffect(() => {
    const initializePageData = async () => {
      // Load initial 'experience' data and set the loading state
      const experienceData = await loadInitialData("experience");
      setExperience(experienceData);
      setLoading(false); // Stop loading after fetching 'experience' data

      // Load additional sections in the background
      loadAdditionalData([
        "projects",
        "education",
        "certifications",
        "contact",
        "about",
      ]);
    };

    initializePageData();
  }, []);

  // Show loading component while data is being fetched
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
        <div className="container-fluid d-flex mb-4 justify-content-between">
          <h2>Work Experience</h2>
          <div className="btn btn-sm btn-outline-primary">Sort</div>
        </div>

        <div className="d-flex container-fluid flex-column gap-3 align-items-center mb-4">
          {experience.map((job, index) => (
            <div key={index} className="card w-100 mb-3">
              <div className="card-header d-flex">
                <h5>{job.company}</h5>
              </div>
              <div className="card-body d-flex flex-column text-start">
                <h6>Role: {job.role}</h6>
                <p>Duration: {job.duration}</p>
                <p>Location: {job.location}</p>
                {job.specialties && (
                  <p>Specialties: {job.specialties.join(", ")}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ExperiencePage;
