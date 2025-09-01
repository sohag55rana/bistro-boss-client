import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCarts()
    const totalAllPrice = cart.reduce((total, item) => total + item.price, 0)
    const totalPrice = parseFloat(totalAllPrice.toFixed(2));
    console.log(totalPrice);

    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });

    }
    return (
        <div>
            <div className="flex gap-5 font-bold justify-evenly mb-16">
                <h2 className="text-4xl">Total Cart: {cart.length} </h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                {
                    cart.length ? <Link to="/dashboard/payment">
                        <button className="btn btn-secondary">Pay</button>
                    </Link> : <button disabled className="btn btn-secondary">Pay</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>

                                <td>{index + 1}</td>

                                <td>
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                            src={item.image}
                                            alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>

                                <td><div>
                                    <div className="font-bold">{item.name}</div>

                                </div></td>
                                <td><p>{item.price}</p></td>
                                <th>
                                    <button onClick={() => { handleDelete(item._id) }} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Cart;