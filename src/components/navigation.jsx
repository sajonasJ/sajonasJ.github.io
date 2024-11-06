import React from "react";
import Link from "next/link";
import { FaHome, FaFolderOpen, FaBriefcase, FaGraduationCap, FaPhoneAlt } from "react-icons/fa";


const Navigation = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mx-2 p-2">
      <div>
        <h1>Jonas Sajonas</h1>
      </div>
      <div className="d-flex justify-content-end align-items-center gap-1">
        <Link href="/" passHref>
          <span className="btn btn-sm  btn-custom">
            <FaHome /> Home
          </span>
        </Link>
        <Link href="/project" passHref>
          <span className="btn btn-sm  btn-custom">
          <FaFolderOpen /> Projects
            </span>
        </Link>
        <Link href="/experience" passHref>
          <span className="btn btn-sm  btn-custom">
          <FaBriefcase /> Experience
            </span>
        </Link>
        <Link href="/education" passHref>
          <span className="btn btn-sm  btn-custom">
          <FaGraduationCap /> Education
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span className="btn btn-sm btn-custom">
          <FaPhoneAlt /> Contact
            </span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
