import { SlArrowRight } from "react-icons/sl";
import travelImg from "../../assets/images/tr-img.png"
import '../../css/travel.css'

function Travel() {
  return (
    <div className="travel-cont">
      <div className="travel-info">
        <p className="travel-info-text">Enjoy the best travel experience now</p>
        <button className="travel-btn">
        <span className="tr-btn-name">Book with us</span><SlArrowRight size={25}/>
        </button>
      </div>
    </div>
  );
}

export default Travel;
