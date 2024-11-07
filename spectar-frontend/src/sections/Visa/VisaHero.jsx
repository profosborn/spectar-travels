import Navbar from "../../Components/Navbar";
import '../../css/visa.css'

function VisaHero() {
    return ( 
        <div className="visa-hero">
        <div className="nav">
          <Navbar/>
        </div>
        <div className="hero-tagline">
          <p className="hero-t-one">Visa</p>
        </div>
      </div>
     );
}

export default VisaHero;