import React from "react";
import "./footer.css";
import Typewriter from "typewriter-effect";

const Footer = () => {
  return (
    // <div className="footer-container">
    //   <footer>
    //     <p>
    //       <a href="https://www.linkedin.com/in/wilhelmgroth/">LinkedIn</a> /
    //       <a href="https://github.com/wilhelmgroth" target="_blank">
    //         GitHub
    //       </a>
    //       /
    //       <a href="https://www.instagram.com/wilhelmgroth" target="_blank">
    //         {" "}
    //         Instagram
    //       </a>
    //       / 2022
    //     </p>
    //   </footer>
    // </div>
    <footer>
      <div className="footer-content">
        <div className="logo-footer"></div>
      </div>
      <div className="footer-bottom">
        <span className="span1">
          <Typewriter
            options={{
              strings: ["Check my social media "],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <span className="span2">
          <a href="https://www.linkedin.com/in/wilhelmgroth/">LinkedIn</a> /{" "}
          <a href="https://github.com/wilhelmgroth" target="_blank">
            GitHub/{" "}
          </a>{" "}
          <a href="https://www.instagram.com/wilhelmgroth" target="_blank">
            Instagram{" "}
          </a>{" "}
        </span>
        <p>© 2022 Wilhelm Groth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
