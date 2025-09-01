// import { useContext } from "react";
// import { AuthContext } from "../../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../hooks/SocialLogin";


const Register = () => {
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()

    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        // console.log("Profile updated");
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    Swal.fire({
                                        title: "Register Success!",
                                        icon: "success",
                                        draggable: true
                                    });
                                    reset()
                                    navigate("/")
                                }
                            })

                    })
                    .catch(error => {
                        console.error(error.message);

                    })
            })
            .catch(error =>
                console.error(error.message)
            )

    }


    // const handleRegister = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const name = form.name.value
    //     const email = form.email.value
    //     const password = form.password.value
    //     console.log(email, password, name);     
    // }


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Sign Up</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:text-left ml-20">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6 text-xl">
                            Please Register First For add Cart and use our site properly.Thank you , Happy User.......
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" {...register("name", { required: true })}
                                    name="name"
                                    className="input" placeholder="Name" />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                                <label className="fieldset-label">Phot Url</label>
                                <input type="text" {...register("photoUrl", { required: true })}
                                    name="photoUrl"
                                    className="input" placeholder="photoUrl" />
                                {errors.photoUrl && <span className="text-red-500">photoUrl is required</span>}
                                <label className="fieldset-label">Email</label>
                                <input type="email" {...register("email", { required: true })}
                                    name="email"
                                    className="input" placeholder="Email" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                                <label className="fieldset-label">Password</label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/

                                })}
                                    name="password"
                                    className="input" placeholder="Password" />
                                {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
                                {errors.password?.type === "minLength" && <p className="text-red-500">password must be 6 caracters</p>}
                                {errors.password?.type === "maxLength" && <p className="text-red-500">password must be less caracters</p>}
                                {errors.password?.type === "pattern" && <p className="text-red-500">Should contain at least a capital letter, a small letter, a number</p>}

                                <input className="btn  btn-neutral mt-4" type="submit" value="Register" />
                            </form>
                            <p className='text-center'>Already Have Account ? <small className='text-green-800'><Link to="/login">Please Login</Link></small></p>
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

export default Register;