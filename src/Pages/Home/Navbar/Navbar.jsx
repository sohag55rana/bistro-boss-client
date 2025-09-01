import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../../hooks/useCarts";
import useAdmin from "../../../hooks/useAdmin";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCarts();
    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .then(error => console.error(error.message)
            )
    }

    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Our Order</Link></li>
        {/* user? 'true' : 'false' */}
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
        <li><Link to="/dashboard/cart">
            <button className="btn">
                <FaShoppingCart className="text-2xl mr-4"></FaShoppingCart>
                <div className="badge badge-sm badge-secondary">+{cart.length}</div>
            </button>
        </Link></li>
        {/* <li><Link to="/register">Register</Link></li> */}


    </>
    return (
        <div className="navbar fixed z-10 bg-black/40 text-white max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-green-700 md:text-white bg-black   rounded-box z-1 mt-3 w-52 p-2 shadow items-center">
                        {navLink}
                    </ul>
                </div>
                <p className="btn btn-ghost text-xl font-bold">BISTRO BOSS <br />
                    <span className="uppercase">Restaurant</span>
                </p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-green-700 md:text-white items-center px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="flex items-center gap-5 ml-10">
                                <p>{user?.email}</p>
                                <button onClick={handleLogout} className="btn btn-ghost">Log Out</button>
                            </div>
                        </>
                        :
                        <><li><Link to="/login">Login</Link></li></>
                }
            </div>

        </div>
    );
};

export default Navbar;