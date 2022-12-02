import "./home.css";
import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">
            Full-stack developer <br></br>& coffee enthusiast
          </h1>
          <p className="pl-desc">
            If you want to contact me, then check out my unorderded list below
            <ul className="contact-info">
              <li className="li-info">
                <span className="span-info">Email:</span>{" "}
                wilhelm.groth@edu.edugrade.se
              </li>
              <li className="li-info">
                <span className="span-info">Phone:</span> +46-72-512-8254
              </li>
              <li className="li-info">
                <span className="span-info">Location: </span> Hudiksvall, Sweden
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
