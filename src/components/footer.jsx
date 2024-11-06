import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid m-2">
      <div className="container-fluid me-2 p-0 d-flex flex-row justify-content-between">
        <h5>Software Developer</h5>
        <h5>Jonas Sajonas &copy; 2024</h5>
      </div>
      <div className="container-fluid d-flex mb-3 p-0 flex-row justify-content-between">
        <div className="d-flex m-0 flex-column">
          <span>
            <FaEnvelope color="#34A853" />
            <a
              href="mailto:jonas.sajonas@gmail.com"
              className="text-decoration-none text-reset ms-1"
            >
              sajonasj.work@gmail.com
            </a>
          </span>
          <span>
            <FaGithub color="#333" />
            <a
              href="https://github.com/sajonasJ"
              className="text-decoration-none text-reset ms-1"
            >
              github.com/sajonasJ
            </a>
          </span>
          <span>
            <FaLinkedin color="#0A66C2" />
            <a
              href="https://www.linkedin.com/in/sajonasj/"
              className="text-decoration-none text-reset ms-1"
            >
              linkedin.com/in/sajonasj/
            </a>
          </span>
        </div>
        <div className="d-flex flex-column text-end me-2">
          <span>
            <FaMapMarkerAlt color="#FF6347" /> Gold Coast
          </span>
          <span>Queensland, Australia</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
