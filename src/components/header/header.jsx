import React from "react";
import Me from "../../assets/10pic.png";
import "./header.css";
import {useNavigate} from  "react-router-dom";

const Header = () => {

  let navigate = useNavigate();
  const routeChange = () => {
      let path = "./";
      navigate(path);
  }


  return (
    <div className="header-container">
      <div className="header-right">
        <img src={Me} alt="" className="header-img" onClick={routeChange}/>
        <div className="header-top-row">
          <p className="i-intro">
            <strong className="header-name">Hi there,   </strong>{" "}
          </p>
          <p className="i-name">My name is Will</p>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">a web developer</div>
              <div className="i-title-item">a father</div>
              <div className="i-title-item">trying to be good at FPL </div>
              <div className="i-title-item">
                won the Swedish championship in Bridge {" "}
              </div>
              <div className="i-title-item">a content creator</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
