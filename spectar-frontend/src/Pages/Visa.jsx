import { useState } from "react";
import VisaHero from "../sections/Visa/VisaHero";
import Footer from "../Components/Footer";
import visaImg from "../assets/images/visa-img.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import VisaModal from "../Components/VisaModal";

function Visapage() {
  const [modalShow, setModalShow] = useState('none')
  return (
    <div>
      <div className="">
        <VisaHero />
      </div>
      <div>
        <div className="visa-req-portal">
          <div className="visa-img">
            <img src={visaImg} alt="" />
          </div>
          <div className="visa-portal-text">
            <h1>Visa Request Portal</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially
            </p>
          </div>
        </div>
        <div className="visa-req">
          <h1>Visa Requirement</h1>
          <pre>
            <IoIosCheckmarkCircleOutline className="visa-icon" /> Valid
            Passport: The expiring date in your passport must be 6 months or
            more from the date of travel
          </pre>
          <pre>
            <IoIosCheckmarkCircleOutline className="visa-icon" /> Passport-sized
            photographs
          </pre>
          <pre>
            <IoIosCheckmarkCircleOutline className="visa-icon" /> Marriage
            certificate, applicable if married
          </pre>
          <pre>
            <IoIosCheckmarkCircleOutline className="visa-icon" /> Personal Birth
            Certificate, mandatory for only specific Europe countries like
            Germany
          </pre>
          <pre>
            <IoIosCheckmarkCircleOutline className="visa-icon" /> Yellow Fever
            Certificate – Only South Africa and Malaysia visas need this
          </pre>
        </div>
        <div className="visa-pricing">
          <div>
            <h1>Visa Pricing</h1>
          </div>
          <div className="visa-table-cont">
            <div className="visa-table">
              <div className="th-row">
                <p className="col-1">COUNTRY</p>
                <p className="col-2">FEE</p>
              </div>
              <div className="row">
                <p className="col-1">South Africa</p>
                <p className="col-2">$140</p>
              </div>
              <div className="row">
                <p className="col-1">UAE-Dubai</p>
                <p className="col-2">$140</p>
              </div>
              <div className="row">
                <p className="col-1">Turkey</p>
                <p className="col-2">$140</p>
              </div>
              <div className="row">
                <p className="col-1">Kenya</p>
                <p className="col-2">$140</p>
              </div>
              <div className="row">
                <p className="col-1">UK</p>
                <p className="col-2">$140</p>
              </div>
              <div className="row">
                <p className="col-1">USA</p>
                <p className="col-2">$140</p>
              </div>
              <div className="row last-row">
                <p className="col-1">Canada</p>
                <p className="col-2">$140</p>
              </div>
            </div>
          </div>
        <div className={modalShow}><p onClick={()=>setModalShow('none')}>Close</p><VisaModal/></div>
          <div className="visa-btn">
            <button onClick={()=>{setModalShow('visa-modal-cont')}}>Apply for Visa Now</button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Visapage;
