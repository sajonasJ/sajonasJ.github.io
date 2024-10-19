import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.footerContent}>
        <div>
          <h3>Software Developer</h3>
          <h4>Jonas Sajonas &copy; 2024</h4>
        </div>
        <div style={styles.links}>
          <span>
            Email:{" "}
            <a href="mailto:your-email@example.com" style={styles.link}>
              your-email@example.com
            </a>
          </span>{" "}
          |
          <span>
            GitHub:{" "}
            <a href="https://github.com/your-github" style={styles.link}>
              your-github
            </a>
          </span>{" "}
          |
          <span>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/your-linkedin" style={styles.link}>
              your-linkedin
            </a>
          </span>
        </div>
        <div>Location: Your City, Your Country</div>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    // padding: '20px',
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.5)",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "#1e90ff",
    textDecoration: "none",
  },
};

export default Footer;
