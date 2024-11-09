"use strict";
import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaFolderOpen, FaBriefcase, FaGraduationCap, FaPhoneAlt, FaBars } from "react-icons/fa";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation-container d-flex justify-content-between align-items-center px-3 py-2">
      <h1 className="navigation-name">Jonas Sajonas</h1>

      <div className="burger-menu d-md-none" onClick={toggleMenu}>
        <FaBars size={24} />
      </div>

      <div className={`navigation-links d-none d-md-flex gap-1`}>
        <Link href="/" passHref>
          <span className="btn btn-sm btn-custom">
            <FaHome /> Home
          </span>
        </Link>
        <Link href="/project" passHref>
          <span className="btn btn-sm btn-custom">
            <FaFolderOpen /> Projects
          </span>
        </Link>
        <Link href="/experience" passHref>
          <span className="btn btn-sm btn-custom">
            <FaBriefcase /> Experience
          </span>
        </Link>
        <Link href="/education" passHref>
          <span className="btn btn-sm btn-custom">
            <FaGraduationCap /> Education
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span className="btn btn-sm btn-custom">
            <FaPhoneAlt /> Contact
          </span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu d-md-none">
          <Link href="/" passHref className="linkText">
            <span className="btn btn-sm btn-custom d-block">
              <FaHome /> Home
            </span>
          </Link>
          <Link href="/project" passHref className="linkText">
            <span className="btn btn-sm btn-custom text-decoration-none d-block">
              <FaFolderOpen /> Projects
            </span>
          </Link>
          <Link href="/experience" passHref className="linkText">
            <span className="btn btn-sm btn-custom text-decoration-none d-block">
              <FaBriefcase /> Experience
            </span>
          </Link>
          <Link href="/education" passHref className="linkText">
            <span className="btn btn-sm btn-custom d-block">
              <FaGraduationCap /> Education
            </span>
          </Link>
          <Link href="/contact" passHref className="linkText">
            <span className="btn btn-sm btn-custom d-block">
              <FaPhoneAlt /> Contact
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
