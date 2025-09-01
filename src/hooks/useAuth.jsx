import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        console.error("AuthContext is undefined. Make sure AuthProvider is wrapped around your component tree.");
    }

    return auth;
};

export default useAuth;