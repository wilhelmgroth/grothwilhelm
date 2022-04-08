import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='header'>
    <nav className='navbar'>

   

        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li> <Link  to="/Portfolio">
              Portfolio
            </Link ></li>
          <li><Link  to="/Skills">
              Skills
            </Link> </li>
          <li><Link  to="/Employment">
              Employment
            </Link> </li>
          <li><Link  to="/Education">
              Education
            </Link> </li>
          <li><Link to="/">
              Home
            </Link> </li>

        </ul>
    </nav>
</div>

 
  );
};

export default Navbar;
