import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid m-2">
      <div className="container-fluidm me-2 p-0 d-flex flex-row justify-content-between">
        <h5>Software Developer</h5>
        <h5>Jonas Sajonas &copy; 2024</h5>
      </div>
      <div className="container-fluid d-flex mb-3 p-0 flex-row justify-content-between">
        <div className="d-flex m-0 flex-column">
          <span>
            Email: jonas.sajonas@gmail.com
          </span>
          <span>
            GitHub:
            <a href="https://github.com/sajonasJ">https://github.com/sajonasJ</a>
          </span>
          <span>
            LinkedIn:
            <a href="https://www.linkedin.com/in/sajonasj/">https://www.linkedin.com/in/sajonasj/</a>
          </span>
        </div>
        <div className="d-flex flex-column text-end me-2">
          <div>Gold Coast</div>
          <div>Queensland, Australia</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
