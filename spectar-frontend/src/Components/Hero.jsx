import heroBg from "../assets/images/hero-bg.png";
import Booking from "./Booking";
import Navbar from './Navbar'
function Hero() {
  return (
    <div className="hero">

      <div className="nav">
        <Navbar/>
      </div>
      <div className="hero-tagline">
        <p className="hero-t-one">A comprehensive <br /> travel just for you</p>
        <p className="hero-t-two">
          We specialize in crafting unforgettable travel experiences, both
          locally and internationally.
        </p>
      </div>
      <Booking/>
    </div>
  );
}

export default Hero;
