import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/menu/Menu";
import Order from "../Pages/shop/order/Order"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Layout/Cart";
import PrivetRoute from "../Auth/PrivetRoute";
import AllUsers from "../Layout/AllUsers";
import AddItems from "../Layout/AddItems";
import AdminRoute from "../Auth/AdminRoute";
import ManageItem from "../Layout/ManageItem";
import UpdateItem from "../Layout/UpdateItem";
import Payment from "../Pages/payment/Payment";
import PaymentHistory from "../Pages/payment/PaymentHistory";
import UserHome from "../Layout/UserHome";
import AdminHome from "../Layout/AdminHome";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },

        ]
    },
    {
        path: "dashboard",
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [

            // normal users
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },

            // Admin Users

            {
                path: "adminHome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`https://bistro-boss-server-nu-azure.vercel.app/menu/${params.id}`)
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
]);

export default router