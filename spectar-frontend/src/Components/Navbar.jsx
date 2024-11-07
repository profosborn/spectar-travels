import { AiOutlineMenu } from "react-icons/ai";
import spectarLogo from "../assets/images/spectar_logo.png";
import "../css/home.css";
import SideMenu from "./SideMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [display, setDisplay] = useState("hide");
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={spectarLogo} alt="" />
      </div>
      <div className="nav-link-cnt">
        <ul className="nav-link">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/tour">Tour</a></li>
          <li><a href="/visa">Visa</a></li>
        </ul>
      </div>
      <div className="contact-btn-cnt">
        <button className="contact-btn" onClick={()=>navigate('/contact')}>Contact Us</button>
      </div>
      <div className={display}>
        <AiOutlineMenu />
      </div>
      <div className={display}>
        <SideMenu />
      </div>
    </nav>
  );
}

export default Navbar;
