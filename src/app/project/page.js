"use client";
"use strict";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading"; 
import { loadInitialData } from "@/services/dataService";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeProjects = async () => {
      const data = await loadInitialData("projects");
      setProjects(data || []);
      setLoading(false);
    };

    initializeProjects();
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
      <section className="container-fluid">
        <div className="d-flex w-100 flex-column">
          <div className="container-fluid d-flex mb-4 justify-content-between">
            <h2>Projects</h2>
            <div className="btn btn-sm btn-outline-primary">Sort</div>
          </div>
          <div className="d-flex container-fluid flex-column align-items-center mb-5">
            {projects
              .filter((project) => project.category === "Professional")
              .map((project, index) => (
                <div key={index} className="card w-100 mb-3">
                  <div className="card-header d-flex">
                    <h4>{project.title}</h4>
                  </div>
                  <div className="card-body d-flex flex-column text-start">
                    <h5>{project.role}</h5>
                    <p>Type: {project.type}</p>
                    <p>
                      <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                    </p>
                    {project.description.map((desc, descIndex) => (
                      <p key={descIndex}>{desc}</p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="d-flex w-100 flex-column">
          <div className="container-fluid d-flex mb-2">
            <h2>University</h2>
          </div>
          <div className="d-flex container-fluid gap-2 flex-column mb-4">
            {projects
              .filter((project) => project.category === "University")
              .map((project, index) => (
                <div key={index} className="card w-100 mb-3">
                  <div className="card-header d-flex">
                    <h4>{project.title}</h4>
                  </div>
                  <div className="card-body d-flex flex-column text-start">
                    <h5>{project.role}</h5>
                    <p>Type: {project.type}</p>
                    <p>
                      <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                    </p>
                    {project.description.map((desc, descIndex) => (
                      <p key={descIndex}>{desc}</p>
                    ))}
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

export default ProjectPage;
