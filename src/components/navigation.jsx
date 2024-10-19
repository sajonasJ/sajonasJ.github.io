import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="d-flex justify-content-end p-3">
      <Link href="/" passHref>
        <span className="btn btn-light btn-custom">Home</span>
      </Link>
      <Link href="/project" passHref>
        <span className="btn btn-light btn-custom">Projects</span>
      </Link>
      <Link href="/experience" passHref>
        <span className="btn btn-light btn-custom">Experience</span>
      </Link>
      <Link href="/education" passHref>
        <span className="btn btn-light btn-custom">Education</span>
      </Link>
      <Link href="/contact" passHref>
        <span className="btn btn-light btn-custom">Contact</span>
      </Link>
    </div>
  );
};

export default Navigation;
