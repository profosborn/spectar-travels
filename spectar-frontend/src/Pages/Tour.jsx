import Footer from "../Components/Footer";
import TourHero from "../sections/tour/TourHero";
import TourInfo from "../sections/tour/Tours";

function Tourpage() {
  return (
    <div>
      <TourHero />
      <div>
        <TourInfo/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Tourpage;
