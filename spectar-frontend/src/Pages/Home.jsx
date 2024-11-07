import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Testimonials from "../sections/home/Tetimonials";
import Tours from "../sections/home/Tours";
import Travel from "../sections/home/Travel";
import TrendingLoc from "../sections/home/TrendingLoc";


function Home() {
  return (
    <div className="home">
      <Hero />
      <TrendingLoc />
      <Tours />
      <Testimonials />
      <Travel />
      <Footer />
    </div>
  );
}

export default Home;
