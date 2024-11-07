import testProfile from "../assets/images/test-profile-img.png";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "../css/testimonials.css";
import { useState } from "react";

function TestimonialCard(props) {
  const [slide, setSlide] = useState(0);

  return (
    <>
      <div className="test-nav-icons">
        <div
          className="test-nav-icon"
          onClick={() => setSlide(slide === 0 ? data.length - 1 : slide - 1)}
        >
          <HiChevronLeft size={40} />
        </div>
        <div
          className="test-nav-icon"
          onClick={() =>
            setSlide(slide === props.testData.length - 1 ? 0 : slide + 1)
          }
        >
          <HiChevronRight size={40} />
        </div>
      </div>
      <div className="test-wrapper">
        {props.testData.map((item, index) => (
          <div
            className={slide === index ? "testimonial" : "testimonial-hidden"}
            key={index}
          >
            <div className="test-line-one">
              <p>{"4.8 (8 months ago)"}</p>
            </div>
            <div className="test-line-two">
              <p>"{item.textOne}"</p>
            </div>
            <div className="test-line-three">
              <p>{item.textTwo}</p>
            </div>
            <div className="test-profile">
              <div className="test-profile-img">
                <img src={testProfile} alt="" />
              </div>
              <div className="">
                <p className="test-client">{item.name}</p>
                <p className="test-cl-detail">Explorer, Ghana</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TestimonialCard;
