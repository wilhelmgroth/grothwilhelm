import "./home.css";
import React from "react";

const Home = () => {
  return (
    <div className="home-container">
    
     <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          "The result is irrelevant because the effort was there" - Félix Lengyel{" "}
        </h1>
        <p className="pl-desc">
          So, this is my portfolio, my first portfolio. Some journey it was.{" "}
          <br></br>
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
              <span className="span-info">Location: </span> Hudiksvall,
              Sweden
            </li>
          </ul>


     
        </p>
      </div>
    </div>
        </div>
   
  );
};

export default Home;
