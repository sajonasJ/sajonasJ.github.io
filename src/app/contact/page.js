"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

const ContactPage = () => {
  const [contact, setContact] = useState({});

  // Fetch contact data from sessionStorage or API
  useEffect(() => {
    const savedContactData = sessionStorage.getItem("contactData");

    if (savedContactData) {
      setContact(JSON.parse(savedContactData));
    } else {
      const fetchContactData = async () => {
        try {
          const response = await fetch("/api/data?section=contact");
          if (!response.ok) throw new Error("Failed to fetch contact data");

          const data = await response.json();
          setContact(data || {});
          sessionStorage.setItem("contactData", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching contact data:", error);
        }
      };

      fetchContactData();
    }
  }, []);

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
