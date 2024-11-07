import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi2";
import Location from "../../Components/Location";
import locimgone from '../../assets/images/loc-img-one.png'
import locimgtwo from '../../assets/images/loc-ing-two.png'
import locimgthree from '../../assets/images/loc-img-three.png'

import '../../css/location.css'

function TrendingLoc() {
    const location = [
        {
            src: locimgthree,
            location: 'Dubai'
        },
        {
            src: locimgtwo,
            location: 'Ghana'
        },
        {
            src: locimgone,
            location: 'Greece'
        }
    ]
    return ( 
        <div className="trending-loc-cont">
            <div className="tl-div-one">
                <div className="tl-heading">
                    <p className="tl-heading-one">DESTINATIONS TO EXPLORE</p>
                    <p className="tl-heading-two">Trending Locations</p>
                </div>
                <div className="tl-btn">
                    <button>View more <HiChevronRight /></button> 
                </div>
            </div>
            <div className="tl-div-two">
                <Location location={location} src={locimgone}/>
            </div>
        </div>
     );
}

export default TrendingLoc;