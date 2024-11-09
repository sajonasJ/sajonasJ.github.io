"use client";
"use strict";
import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
import Loading from "@/components/loading";
import { loadInitialData, loadAdditionalData } from "@/services/dataService";
import useLoadingTimeout from "../hooks/useLoadingTimeout";

const ContactPage = () => {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);
  const timeoutDone = useLoadingTimeout(200);

  useEffect(() => {
    const initializePageData = async () => {
      // Load initial 'contact' data
      const contactData = await loadInitialData("contact");
      setContact(contactData);
      setLoading(false);

      // Load additional sections in the background
      loadAdditionalData([
        "projects",
        "experience",
        "education",
        "certifications",
        "about",
      ]);
    };

    initializePageData();
  }, []);

  // Show loading component while initial data is being fetched
  if (loading || !timeoutDone) {
    return (
      <main>
        <Navigation />
        <Loading />
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navigation />
      <section className="container-fluid d-flex">
        <div className="d-flex flex-column align-items-start mt-5">
          <h2 className="my-3">Contact:</h2>
          {Object.entries(contact).map(([key, value]) => (
            <p key={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
              {value ? (
                key === "email" ? (
                  <span> {value}</span>
                ) : (
                  <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-1"
                  >
                    {value}
                  </a>
                )
              ) : (
                " N/A"
              )}
            </p>
          ))}
          <p>
            Send a Message:
            <button type="button" className="btn btn-primary ms-1">
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
