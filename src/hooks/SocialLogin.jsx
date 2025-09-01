import { FaGoogle } from "react-icons/fa";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }
    return (
        <div>
            {/* Google */}
            <button onClick={handleGoogleSignIn} className="btn bg-[#4285F4] text-black border-[#e5e5e5]">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;