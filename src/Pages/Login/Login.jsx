import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SocialLogin from '../../hooks/SocialLogin';



const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from || '/';

    const captchaRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Login Success!",
                    icon: "success",
                    draggable: true
                });
                navigate(from, { replace: true });
            })
            .catch(error =>
                console.error(error.message)
            )
    }
    const handleValidateCaptcha = (e) => {
        e.preventDefault()
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        }

        else {
            alert('Captcha Does Not Match');
            captchaRef.current.value = ""
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 text-xl">
                            Please Login First For add Cart and use our site properly.Thank you , Happy User.......
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email"
                                    name="email"
                                    className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password"
                                    name="password"
                                    className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <label className="fieldset-label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef}
                                    name="captcha"

                                    className="input"
                                    placeholder="type the captcha above" />
                                <button type="button" onClick={handleValidateCaptcha} className='btn btn-secondary btn-xs my-4'>Validate</button>
                                <input className="btn  btn-neutral mt-4" disabled={disabled} type="submit" value="Login" />
                            </form>
                            <p className='text-center space-y-5 items-center'>New User ? <small className='text-green-800'><Link to="/register">Create an Account</Link></small></p>
                            <div className='text-center'>
                                <SocialLogin></SocialLogin>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;