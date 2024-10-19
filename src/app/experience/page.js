import React from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

const experiencePage = () => {
  return (
    <main>
      <Navigation />
      <section className="container-fluid d-flex flex-column justify-content-around">
        <h1>Work Experience</h1>
        <div>
          <h3>Software Development</h3>
          <div className="card">
            <div className="card-header">
              <h5>Cinefly</h5>
            </div>
            <div className="card-body">
              <h6>Role: Software Developer Intern</h6>
              <p>Duration: 3 months (March - May)</p>
              <p>Description:</p>
              <p>Tech Stack:</p>
            </div>
          </div>
        </div>
        <div>
        <h3>Registered Nurse</h3>
          <div className="card">
            <div className="card-header">
              <h5>Gold Coast University Hospital</h5>
            </div>
            <div className="card-body">
              <h6>Role: Operating Theatre Nurse</h6>
              <p>Duration: 3 months (March - May)</p>
              <p>Description:</p>
              <p>Tech Stack:</p>
            </div>
          </div>
          </div>
      </section>
      <Footer />
    </main>
  );
};

export default experiencePage;
