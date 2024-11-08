"use strict";
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
            <FaMapMarkerAlt color="#FF6347" />
            <a
              href="https://www.google.com/maps/place/Gold+Coast+QLD/@-27.9895492,153.3009375,12.11z/data=!4m6!3m5!1s0x6b911a472b5d60b7:0x302a35af3deaf70!8m2!3d-28.016667!4d153.4!16zL20vMGc0Zzc?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
              className="text-decoration-none text-reset ms-1"
            >
              Gold Coast
            </a>
          </span>
          <span>
            <a href="https://www.google.com/maps/place/Queensland/@-18.8314142,135.1134766,5z/data=!3m1!4b1!4m6!3m5!1s0x6bd4df247a62dcfd:0xf5f2d0227612be99!8m2!3d-22.575197!4d144.0847926!16zL20vMGczOWg?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
           className="text-decoration-none text-reset ms-1"> Queensland, Australia</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
