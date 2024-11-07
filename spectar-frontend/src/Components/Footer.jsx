import { HiChevronRight } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialYoutube } from "react-icons/sl";

import '../css/footer.css'

function Footer() {
    return ( 
        <div className="footer-cont">
            <div className="footer-part-one">
                <p className="footer-tg-one">Talk to Us</p>
                <button className="footer-contact-btn">
                    <span>Contact</span><HiChevronRight/>
                </button>
                <p>c 2024 Spectar All Rights Reserved</p>
            </div>
            <div className="footer-part-two">
                <div className="footer-links">
                    <a href="/about" className="footer-link">About</a>
                    <a href="/services" className="footer-link">Services</a>
                    <a href="/tours" className="footer-link">Tours</a>
                    <a href="/visa" className="footer-link">Visa</a>
                </div>
                <div className="footer-address">
                    <p>45 Avenue, Coconut Street</p>
                    <p>Tema-Accra</p>
                    <p>GP 122-00-335</p>
                </div>
                <div className="footer-icons">
                    <div className="footer-icon"><FiFacebook size={25}/></div>
                    <div className="footer-icon"><AiOutlineInstagram size={25}/></div>
                    <div className="footer-icon"><FaXTwitter size={25}/></div>
                    <div className="footer-icon"><LuLinkedin size={25}/></div>
                    <div className="footer-icon"><SlSocialYoutube size={25}/></div>
                </div>
            </div>
        </div>
     );
}

export default Footer;