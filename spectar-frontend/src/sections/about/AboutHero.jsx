import aboutBgImg from '../../assets/images/about-bg.png'
import Navbar from '../../Components/Navbar';
import '../../css/about.css'

function AboutHero() {
  return (
    <div className="about-hero">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="hero-tagline">
        <p className="hero-t-one">About Us</p>
      </div>
    </div>
  );
}

export default AboutHero;
