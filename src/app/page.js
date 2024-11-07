"use client";
"use strict";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading"; // Import the Loading component
import { loadInitialData, loadAdditionalData } from "@/services/dataService";

export default function Home() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePageData = async () => {
      // Load initial 'about' section data and set the loading state
      const aboutData = await loadInitialData("about");
      setAbout(aboutData);
      setLoading(false); // Stop loading after fetching 'about' data

      // Load additional sections in the background
      loadAdditionalData(["projects", "experience", "education", "certifications", "contact"]);
    };

    initializePageData();
  }, []);

  // Display the Loading component while the 'about' data is still loading
  if (loading) {
    return (
      <main>
        <Navigation />
        <Loading />
      </main>
    );
  }

  // Main content after loading is complete
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
          <p>{about?.careerObjective || "Learn as much from all kinds of software development"}</p>
        </div>
        <div className="sub-section">
          <h3>Project Highlights</h3>
          {about?.projectHighlights?.map((highlight, index) => (
            <p key={index}>{highlight}</p>
          ))}
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
