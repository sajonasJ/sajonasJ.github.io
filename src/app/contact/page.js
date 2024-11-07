"use client";
"use strict";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading";
import { loadInitialData, loadAdditionalData } from "@/services/dataService";

const ContactPage = () => {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializePageData = async () => {
      // Load initial 'contact' data
      const contactData = await loadInitialData("contact");
      setContact(contactData);
      setLoading(false);

      // Load additional sections in the background
      loadAdditionalData(["projects", "experience", "education", "certifications", "about"]);
    };

    initializePageData();
  }, []);

  // Show loading component while initial data is being fetched
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
      <section className="container-fluid d-flex">
        <div className="d-flex flex-column align-items-start mt-5">
          <h2 className="my-3">Contact:</h2>
          <p>Email: {contact.email || "N/A"}</p>
          <p>
            LinkedIn:{" "}
            {contact.linkedIn ? (
              <a
                href={contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.linkedIn}
              </a>
            ) : (
              "N/A"
            )}
          </p>
          <p>
            GitHub:{" "}
            {contact.github ? (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.github}
              </a>
            ) : (
              "N/A"
            )}
          </p>
          <p>
            Send a Message:{" "}
            <button type="button" className="btn btn-primary">
              Button
            </button>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
