import { HiChevronRight } from "react-icons/hi";
import Footer from "../Components/Footer";
import Travel from "../sections/home/Travel";
import ServicesHero from "../sections/Services/ServicesHero";

import serviceImgOne from '../assets/images/service-img-one.png'
import serviceImgTwo from '../assets/images/service-img-two.png'
import serviceImgThree from '../assets/images/service-img-three.png'
import serviceImgFour from '../assets/images/service-img-four.png'
import serviceImgFive from '../assets/images/service-img-five.png'

function Services() {
  return (
    <div className="services">
      <div>
        <ServicesHero />
      </div>
      <div className="">
        <div className="service tr-plan">
          <div className="service-cont one">
            <h1>Travel Planning</h1>
            <p>
              At Spectar Travel, we believe that the journey begins long before
              you board the plane. Our comprehensive travel planning services
              are designed to turn your dream vacation into a seamless reality.
              Whether you're looking for a quick getaway or an extended
              adventure, our expert team is here to guide you every step of the
              way.
            </p>
            <button>
              Book Now <HiChevronRight />
            </button>
          </div>
          <div className="service-img img-one"><img src={serviceImgOne} alt="" /></div>
        </div>
        <div className="service">
          <div className="service-img img-two"><img src={serviceImgTwo} alt="" /></div>
          <div  className="service-cont one">
            <h1>Group Travel </h1>
            <p>
              We understand that the best adventures are the ones shared with
              friends, family, or colleagues. Our Group Travel Planning Services
              are designed to create unforgettable experiences for groups of all
              sizes, whether you’re organizing a family reunion, a corporate
              retreat, a school trip, or a getaway with friends. Let us handle
              the details so you can focus on making memories together!
            </p>
            <button>
              Book Now <HiChevronRight />
            </button>
          </div>
        </div>
        <div className="service business">
          <div className="service-cont one">
            <h1>Business Travel</h1>
            <p>
              At Spectar Travel, we understand that time is money, especially
              when it comes to business travel. Our Business Travel Services are
              designed to cater to the unique needs of corporate travelers,
              ensuring a seamless and productive travel experience from start to
              finish.
            </p>
            <button>
              Book Now <HiChevronRight />
            </button>
          </div>
          <div className="service-img img-three"><img src={serviceImgThree} alt="" /></div>
        </div>
        <div className="service">
          <div className="service-img img-four"><img src={serviceImgFour} alt="" /></div>
          <div className="service-cont one">
            <h1>Family Vacation</h1>
            <p>
              We believe that family vacations are about creating cherished
              memories that last a lifetime. Our Family Vacation Planning
              Services are designed to help you experience the perfect getaway
              that caters to every member of the family, ensuring excitement,
              adventure, and relaxation for everyone.
            </p>
            <button>
              Book Now <HiChevronRight />
            </button>
          </div>
        </div>
        <div className="service">
          <div className="service-img img-five"><img src={serviceImgFive} alt="" /></div>
          <div className="service-cont one">
            <h1>Visa Assistance</h1>
            <p>
              Navigating the visa application process can be daunting,
              especially when planning your travel abroad. At Spectar Travel, we
              provide comprehensive Visa Assistance Services to ensure you have
              everything you need for a smooth and hassle-free journey. Our
              expert team is dedicated to guiding you through the complex world
              of visa applications, allowing you to focus on your travel plans
              with confidence
            </p>
            <button>
              Book Now <HiChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Travel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Services;
