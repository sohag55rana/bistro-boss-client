import { Outlet } from "react-router-dom";
import Footer from "../pages/sheard/footer/Footer";
import Navbar from "../pages/sheard/navbar/Navbar";

const Main = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;