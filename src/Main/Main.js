import { NavbarWithSolidBackground } from "../components/Navbar/Navbar"
import About from "../components/About/About"
import { Route, Routes } from "react-router-dom";
import Support from "../components/Support/Support";
import Locations from "../components/Locations/Locations";
import Footer from "../Ui/Footer/Footer";
import Services from "../components/Services/Services";
import Servicedetail from "../components/Servicedetail/Servicedetail";
import Locationsdetail from "../components/Locationsdetail/Locationsdetail";
import Home from "../components/Home/Home";



const Main = () => {
    return (
        <div className="">
            <NavbarWithSolidBackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/support" element={<Support />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/detail/:id" element={<Servicedetail/>}/>
                <Route path="/locations/detail/:id" element={<Locationsdetail/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default Main