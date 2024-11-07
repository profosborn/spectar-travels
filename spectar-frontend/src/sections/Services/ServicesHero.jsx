import Navbar from "../../Components/Navbar";
import '../../css/services.css'


function ServicesHero() {
  return (
    <div className="services">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="hero-tagline">
        <p className="hero-t-one">Services</p>
      </div>
    </div>
  );
}

export default ServicesHero;
