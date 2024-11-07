import testImgOne from "../../assets/images/testImg-one.png";

import "../../css/testimonials.css";
import TestimonialCard from "../../Components/Testimonial.jsx";

import { testData } from "../../data/testData.json";

function Testimonials(props) {
  return (
    <div className="test-cont">
      <div className="test-heading">
        <p className="test-heading-one">TESTIMONIALS</p>
        <p className="test-heading-two">Satisfied Clients Speak</p>
      </div>
      <div className="test-divs">
        <div className="test-img-one div-one">
          <img src={testImgOne} alt="" />
        </div>
        <div className="test-div-two">
          <TestimonialCard testData={testData} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
