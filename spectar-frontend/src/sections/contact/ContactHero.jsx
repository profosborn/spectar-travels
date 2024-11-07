import Navbar from "../../Components/Navbar";

import '../../css/contact.css'

function ContactHero() {
  return (
    <div className="contact">
      <div className="nav">
        <Navbar />
      </div>
      <div className="hero-tagline">
        <p className="hero-t-one">Get In Touch</p>
      </div>
    </div>
  );
}

export default ContactHero;
