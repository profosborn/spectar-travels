import { AiOutlineArrowUp } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";

function Location(props) {
  return (
    <div className="location">
      {props.location.map((items, index) => (
        <div className="location-cont" key={index}>
          <div className="loc-img">
            <img src={items.src} alt="" />
          </div>
          <div className="loc-name">
            <p>{items.location}</p>
            <div className="loc-arrow">
              <HiArrowUpRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Location;
