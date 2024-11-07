import TourCard from "../../Components/TourCard";
import tcImgOne from "../../assets/images/tour-card-img1.png";
import tcImgTwo from "../../assets/images/tour-card-img2.png";
import tcImgThree from "../../assets/images/tour-card-img3.png";
import { HiChevronRight } from "react-icons/hi2";

import "../../css/tour.css";
import { useState } from "react";

function TourInfo() {
  const tour = [
    {
      src: tcImgOne,
      tourTitle: "Dubai Summer Tour",
      country: "Dubai",
      continent: "Asia",
      duration: "5 days trip",
      price: "$1,980",
    },
    {
      src: tcImgTwo,
      tourTitle: "Kenya Safari Tour",
      country: "Kenya",
      continent: "Africa",
      duration: "6 days",
      price: "$1,980",
    },
    {
      src: tcImgThree,
      tourTitle: "Singapore Tour",
      country: "Singapore",
      continent: "Asia",
      duration: "6 days",
      price: "$1,980",
    },
  ];

  const [toggleState, setToggleState] = useState(1);
  const tabIndex = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tour-cards tours-page">
      <div className="tc-head">
        <p className="tc-head-one">EXPLORE OUR POPULAR PACKAGES</p>
        <p className="tc-head-two">Tour Packages</p>
      </div>
      <div className="tc-line-two">
        <div className="tc-tabs">
          <a onClick={() => tabIndex(1)} name="all" className={toggleState == 1 ? "tc-tab-active" : "tc-tab"}>
            All
          </a>
          <a onClick={() => tabIndex(2)} className={toggleState == 2 ? "tc-tab-active" : "tc-tab"} name="dubai">
            Dubai
          </a>
          <a onClick={() => tabIndex(3)} className={toggleState == 3 ? "tc-tab-active" : "tc-tab"} name="europe">
            Europe
          </a>
          <a onClick={() => tabIndex(4)} className={toggleState == 4 ? "tc-tab-active" : "tc-tab"} name="kenya">
            Kenya
          </a>
          <a onClick={() => tabIndex(5)} className={toggleState == 5 ? "tc-tab-active" : "tc-tab"} name="ghana">
            Ghana
          </a>
        </div>
      </div>
      <div className="tour-section">
        <TourCard tour={tour} />
      </div>
    </div>
  );
}

export default TourInfo;
