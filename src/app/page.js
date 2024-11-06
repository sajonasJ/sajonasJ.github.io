"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

export default function Home() {
  const [about, setAbout] = useState(null);

  // Check sessionStorage first, then fetch from the server if necessary
  useEffect(() => {
    const savedAboutData = sessionStorage.getItem("aboutData");

    if (savedAboutData) {
      setAbout(JSON.parse(savedAboutData));
    } else {
      const fetchAboutData = async () => {
        try {
          const response = await fetch("/api/data?section=about");
          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();
          setAbout(data);
          sessionStorage.setItem("aboutData", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching about data:", error);
        }
      };
      fetchAboutData();
    }
  }, []);

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
