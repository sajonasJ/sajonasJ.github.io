import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mx-2 p-2">
      <div>
        <h1>Jonas Sajonas</h1>
      </div>
      <div className="d-flex justify-content-end gap-1">
        <Link href="/" passHref>
          <span className="btn btn-sm  btn-custom">Home</span>
        </Link>
        <Link href="/project" passHref>
          <span className="btn btn-sm  btn-custom">Projects</span>
        </Link>
        <Link href="/experience" passHref>
          <span className="btn btn-sm  btn-custom">Experience</span>
        </Link>
        <Link href="/education" passHref>
          <span className="btn btn-sm  btn-custom">Education</span>
        </Link>
        <Link href="/contact" passHref>
          <span className="btn btn-sm btn-custom">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
