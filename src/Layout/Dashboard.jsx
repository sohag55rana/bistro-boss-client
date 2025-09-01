import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaComment, FaEnvelope, FaFolder, FaHome, FaList, FaShoppingBag, FaUser, FaUtensils } from "react-icons/fa";
import useCarts from '../hooks/useCarts';
import useAdmin from '../hooks/useAdmin';
import useMenu from '../hooks/useMenu';

const Dashboard = () => {
    const [cart] = useCarts();
    const [menu] = useMenu();

    // TODO: get admin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className='flex mt-20'>
            <div className="w-64 min-h-screen bg-orange-400 ">
                <ul className="menu p-4 text-xl font-bold">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'>
                                <FaHome></FaHome>
                                Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'>
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/cart'>
                                <FaShoppingBag></FaShoppingBag>
                                My Cart ({cart.length}) </NavLink></li>
                            <li><NavLink to='/dashboard/manageItems'>
                                <FaList></FaList>
                                Manage Items ({menu.length}) </NavLink></li>
                            <li><NavLink to='/dashboard/paymentHistory'>
                                <FaBook></FaBook>
                                payment History</NavLink></li>
                            <li><NavLink to='/dashboard/users'>
                                <FaUser></FaUser>
                                All Users
                            </NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='/dashboard/userHome'>
                                    <FaHome></FaHome>
                                    User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'>
                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/cart'>
                                    <FaShoppingBag></FaShoppingBag>
                                    My Cart ({cart.length}) </NavLink></li>

                                <li><NavLink to='/dashboard/paymentHistory'>
                                    <FaBook></FaBook>
                                    payment History</NavLink></li>
                            </>
                    }

                    {/* shared links  */}
                    <div className="divider"></div>
                    <li><NavLink to='/'>
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink to="/order/salad">
                        <FaFolder></FaFolder>
                        Menu</NavLink></li>
                    <li><NavLink to="/order/contact">
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink></li>


                </ul>

            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;