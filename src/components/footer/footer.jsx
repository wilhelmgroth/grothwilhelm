import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <p>
          <a href="https://www.linkedin.com/in/wilhelmgroth/">LinkedIn</a> /
          <a href="https://github.com/wilhelmgroth" target="_blank">
            GitHub
          </a>
          /
          <a href="https://www.instagram.com/wilhelmgroth" target="_blank">
            {" "}
            Instagram
          </a>
          / 2022
        </p>
      </footer>
    </div>
  );
};

export default Footer;
