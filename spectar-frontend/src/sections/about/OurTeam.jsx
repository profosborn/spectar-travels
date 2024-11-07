import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import tmOne from '../../assets/images/tm-one.png'
import tmTwo from '../../assets/images/tm-two.png'
import '../../css/about.css'

function OurTeam() {
  return (
    <div className="team-cont">
      <div className="team-heading">
        <p className="tm-heading-one">TESTIMONIALS</p>
        <p className="tm-heading-two">Our Team</p>
      </div>
      <div className="team-img">
        <img src={tmTwo} alt="" />
        <img src={tmOne} alt="" />
        <img src={tmTwo} alt="" />
      </div>
      <div className="test-nav-icons">
        <div className="test-nav-icon">
          <HiChevronLeft size={40} />
        </div>
        <div className="test-nav-icon">
          <HiChevronRight size={40} />
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
