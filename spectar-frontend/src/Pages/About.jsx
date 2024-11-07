import AboutHero from "../sections/about/AboutHero";
import abImg from "../assets/images/ab-img.png";
import missionIcon from "../assets/images/mission 1.png";
import visionIcon from "../assets/images/binocular 1.png";
import "../css/about.css";
import Testimonials from "../sections/home/Tetimonials";
import Footer from "../Components/Footer";
import Travel from "../sections/home/Travel";
import OurTeam from "../sections/about/OurTeam";

function About() {
  return (
    <div className="about">
      <AboutHero />
      <div>
        <div className="ab-section-one">
          <p className="ab-p-one">
            Welcome to your premier travel & tourism partner based in the heart
            of Ghana
          </p>
          <p className="ab-p-two">
            We specialize in crafting unforgettable travel experiences, both
            locally and internationally. Whether you’re seeking the rich
            cultural heritage of Ghana, breathtaking landscapes, or exciting
            global adventures, we have the perfect packages designed to meet
            your unique travel desires. At Spectar Travel, we pride ourselves on
            our commitment to excellence, personalized service, and deep
            knowledge of the destinations we offer. Our dedicated team of travel
            experts works closely with you to create tailored itineraries that
            ensure every journey is memorable. Join us as we explore the beauty
            of Ghana and beyond, making your travel dreams a reality. Let’s
            embark on an extraordinary adventure together!
          </p>
        </div>
        <div className="ab-img">
          <img src={abImg} alt="pic" />
        </div>
        <div className="ab-sect-two">
          <div className="ab-mission">
            <div>
              <img src={missionIcon} alt="" />
            </div>
            <div>
              <h1>Our Mission</h1>
            </div>
            <div>
              <p>
                At Spectar Travel, our mission is to provide exceptional travel
                experiences that inspire curiosity and adventure. We are
                dedicated to offering personalized travel solutions that cater
                to both local and international destinations, with a special
                focus on showcasing the beauty and diversity of Africa. Through
                our commitment to quality, integrity, and exceptional service,
                we aim to create lasting memories for our clients while
                promoting cultural understanding and sustainable tourism
                practices.
              </p>
            </div>
          </div>
          <div className="ab-vision">
            <div>
              <img src={visionIcon} alt="" />
            </div>
            <div>
              <h1>Our Vision</h1>
            </div>
            <div>
              <p>
                To be a leading global travel agency, inspiring discovery and
                enriching lives through unforgettable travel experiences across
                Africa and beyond. We envision a world where every traveler
                explores the diverse cultures, breathtaking landscapes, and rich
                heritage of continents, fostering connections and understanding
                among people through the joy of exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-test">
        <Testimonials />
      </div>
      <div className="ab-our-team">
        <OurTeam />
      </div>
      <div className="ab-travel">
        <Travel />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default About;
