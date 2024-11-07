import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Tourpage from "../Pages/Tour";
import Visapage from "../Pages/Visa";
import Contact from "../Pages/Contact";
import SingleTourPage from "../Pages/SingleTourPage";

function AppRouter() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/tour" element={<Tourpage/>}/>
            <Route path="/visa" element={<Visapage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="tour/:country" element={<SingleTourPage/>}/>
        </Routes>
     );
}

export default AppRouter;