"use client"; // Add this line to mark it as a Client Component

import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

const ExperiencePage = () => {
  const [experience, setExperience] = useState([]); // State to hold fetched data

  // Fetch experience data from sessionStorage or API on component mount
  useEffect(() => {
    const savedExperienceData = sessionStorage.getItem("experienceData");

    if (savedExperienceData) {
      setExperience(JSON.parse(savedExperienceData));
    } else {
      const fetchExperience = async () => {
        try {
          const response = await fetch("/api/data?section=experience");
          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();
          setExperience(data); // Update state with fetched data
          sessionStorage.setItem("experienceData", JSON.stringify(data)); // Save to sessionStorage
        } catch (error) {
          console.error("Error fetching experience data:", error);
        }
      };

      fetchExperience();
    }
  }, []);

  return (
    <main>
      <Navigation />
      <section className="container-fluid">
        <div className="container-fluid d-flex mb-4 justify-content-between">
          <h2>Work Experience</h2>
          <div className="btn btn-sm btn-outline-primary">Sort</div>
        </div>

        {/* Dynamically render experience data */}
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
