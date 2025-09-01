import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    // console.log(location);


    if (loading) {
        return <span className="loading loading-infinity loading-xl text-center"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace>Login</Navigate>
};

export default PrivetRoute;