import { useContext } from "react";
import { GrLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { TiTime } from "react-icons/ti";
import { TourContext } from "../App";
import { useNavigate } from "react-router-dom";

function TourCard() {
  const tour = useContext(TourContext);
  const navigate = useNavigate()
  return (
    <div className="tour-card-cont">
      {tour.tours.map((items, index) => (
        <div key={index} className="tour-card" onClick={()=> navigate(`/tour/${items.tourTitle}`)}>
          <div className="tc-img">
            <img src={items.src} alt="" />
          </div>
          <div className="tc-footer">
            <p className="tc-title">{items.tourTitle}</p>
            <div className="tc-info">
              <div className="tc-country">
                <pre>
                  <GrLocation size={25} /> {items.country}, {items.continent}
                </pre>
              </div>
              <div className="tc-duration">
                <TiTime size={25} />
                <pre> {items.duration}</pre>
              </div>
            </div>
            <div className="tc-date">
              <MdDateRange size={40} />
            </div>
            <div className="tc-book">
              <p>{items.price}</p>
              <button className="tc-btn tp-btn">Book</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourCard;
