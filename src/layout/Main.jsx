import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/sheard/footer/Footer";
import Navbar from "../pages/sheard/navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes("/login") || location.pathname.includes("/signup");
    return (
        <div className="container mx-auto">
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;