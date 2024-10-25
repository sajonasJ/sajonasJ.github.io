import React from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="container-fluid d-flex flex-column justify-content-around">
        <div className="sub-section">
          <h1>Hi I&apos;m Jonas</h1>
          <p>Software Development Graduate</p>
          <p>I do Web Development</p>
          <p>I do Mobile App Development</p>
          <p>I do Games Development</p>
        </div>
        <div className="sub-section">
          <h3>Career Objective</h3>
          <p>Learn as much from all kinds of software development</p>
        </div>
        <div className="sub-section">
          <h3>Project Highlights</h3>
          <p>Controls</p>
          <p>Web Development</p>
          <p>Software Development</p>
          <p>Mobile Development</p>
          <p>Game Development</p>
        </div>
        <div className="sub-section">
          <h3>Awards</h3>
          <p>Griffith Academic Excellence 2024</p>
          <p>Griffith Academic Excellence 2023</p>
          <p>Griffith Academic Excellence 2022</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
