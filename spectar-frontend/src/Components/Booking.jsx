import { BiCalendar, BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

function Booking() {
  return (
    <div className="booking-cont">
      <div className="booking-form-cont">
        <form action="" className="booking-form">
          <div className="bk-form-div-one">
            <div className="booking-form-label">
              <GrLocation size={30}/>
              <label htmlFor="">Destination</label>
            </div>
            <input type="text" placeholder="Where is next tour"/>
          </div>
          <div className="bk-form-div-two">
            <div className="booking-form-label">
              <BiCalendar size={30}/>
              <label htmlFor=""> Set Date</label>
            </div>
            <input type="text" placeholder="Start Date - End Date" />
          </div>
        </form>
      </div>
      <div className="bk-btn">
        <BiSearch size={30} />
      </div>
    </div>
  );
}

export default Booking;
