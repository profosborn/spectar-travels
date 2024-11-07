import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import tourbg from "../assets/images/services-bg.png";
import dubaibg from "../assets/images/dubaitour.png";
import { useContext, useState } from "react";
import { TourContext } from "../App";
import { useParams } from "react-router-dom";

import { GrLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { TiTime } from "react-icons/ti";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import "../css/tourdetail.css";
import BookingFormModal from "../Components/Modal";

function SingleTourPage() {
  const tour = useContext(TourContext);

  const { country } = useParams();

  const bg = {
    backgroundImage: `url(${dubaibg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    height: "50vw",
  };

  const [modalShow, setModalShow] = useState('none')
  return (
    <div>
      <div className="singleTour-hero" style={bg}>
        <div className="nav">
          <Navbar />
        </div>
        <div className="hero-tagline">
          <p className="hero-t-one">{country}</p>
        </div>
      </div>
      <div className={modalShow}><p onClick={()=>setModalShow('none')}>Close</p><BookingFormModal/></div>
      {country
        ? tour.tours.map((item, idx) =>
            item.tourTitle === country ? (
              <div key={idx} className="tourdetail-cont">
                <div className="td-div-one">
                  <div>
                    <p className="tc-title td-title">{item.tourTitle}</p>
                    <div className="tc-info">
                      <div className="tc-country">
                        <pre>
                          <GrLocation size={25} /> {item.country},{" "}
                          {item.continent}
                        </pre>
                      </div>
                      <div className="tc-duration">
                        <TiTime size={25} />
                        <pre> {item.duration}</pre>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="tc-date">
                      <MdDateRange size={40} />
                    </div>
                    <p>
                      Experience the magic and allure of {item.country} like
                      never before. From breathtaking skyscrapers to serene
                      desert landscapes, Dubai offers a perfect blend of modern
                      extravagance and cultural richness. Get ready to vibe with
                      {item.country} and create memories that will last a
                      lifetime!
                    </p>
                  </div>
                  <div>
                    <h1>Inclusions and Exclusions</h1>
                    <div className="tourdet-inc-cont">
                      <div className="tourdet-inc">
                        <IoIosCheckmarkCircleOutline className="visa-icon" />
                        <p>Accomodation</p>
                      </div>
                      <div className="tourdet-inc">
                        <IoIosCheckmarkCircleOutline className="visa-icon" />
                        <p>Flights Tickets (In and Out)</p>
                      </div>
                      <div className="tourdet-inc">
                        <IoIosCheckmarkCircleOutline className="visa-icon" />
                        <p>Daily Breakfast</p>
                      </div>
                      <div className="tourdet-inc">
                        <IoIosCheckmarkCircleOutline className="visa-icon" />
                        <p>Tours In Dubai</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tourdet-pricing">
                  <h1>{item.price}</h1>
                  <p>starting from</p>
                  <button onClick={()=>{setModalShow('bk-modal-cont')}}>Book Now</button>
                </div>
              </div>
            ) : null
          )
        : null}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SingleTourPage;
