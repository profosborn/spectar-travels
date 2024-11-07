import { GoLocation } from "react-icons/go";
import Footer from "../Components/Footer";
import ContactHero from "../sections/contact/ContactHero";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { GrPhone } from "react-icons/gr";

function Contact() {
  return (
    <div>
      <ContactHero />
      <div>
        <div className="contact-sect-one">
          <div className="contact-info-div">
            <div className="contact-loc">
                <pre><GoLocation size={20}/><h3> Location</h3></pre>
                <p>45 Avenue, Coconut Street</p>
                <p>Tema - Accra</p>
                <p>GP122-00-335</p>
            </div>
            <div className="contact-loc">
                <pre><MdOutlineEmail size={20}/><h3> Email</h3></pre>
                <p>info@spectartravel.com</p>
            </div>
            <div className="contact-loc">
                <pre><GrPhone size={20}/><h3> Phone</h3></pre>
                <p>+233 000 000 000</p>
                <p>+202 000 000 000</p>
            </div>
          </div>
          <div className="contact-form-cont">
            <h1>We would love to help</h1>
            <form action="">
              <div className="contact-form-div">
                <label htmlFor="">Full name</label>
                <input type="text" placeholder="Enter Name"/>
              </div>
              <div className="contact-form-div">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email Address"/>
              </div>
              <div className="contact-form-div">
                <label htmlFor="">Phone</label>
                <input type="phone" placeholder="Phone Number"/>
              </div>
              <div className="contact-form-div message">
                <label htmlFor="">Message</label>
                <textarea placeholder="Your Message"></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
