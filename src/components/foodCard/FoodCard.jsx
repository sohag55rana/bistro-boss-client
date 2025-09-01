
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCarts from "../../hooks/useCarts";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCarts()

    const navigate = useNavigate()
    const location = useLocation()
    const handleFoodCard = () => {
        // console.log(food, user.email);
        // ei khane console log dile hobe na kaj
        if (user && user.email) {

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} Added to Your Cart`,
                            icon: "success",
                            draggable: true
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please LogIn First!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Here!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
            console.log("hobe na");
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <p className="absolute right-0 mt-16 mr-16 bg-slate-800 text-white">{price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleFoodCard} className="btn btn-outline border-0 rounded-xl border-b-6 uppercase p-5 mt-4 text-2xl">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;