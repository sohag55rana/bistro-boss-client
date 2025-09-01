import { useForm } from "react-hook-form";
import SectionTitile from "../components/SectionTitile";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log('my menures', menuRes.data);
            if (menuRes.data.insertedId) {
                // show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an added on menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    };

    return (
        <div className="ml-10">
            <SectionTitile heading="Add an Item" subheading="what's new"></SectionTitile>
            <form className="space-y-5 mx-auto ml-10" onSubmit={handleSubmit(onSubmit)}>

                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Recipe name *</legend>
                    <input  {...register("name", { required: true })} type="text" className="input w-full" placeholder="Recipe Name" />
                </fieldset>

                <div className="flex gap-6">
                    {/* category */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Category *</legend>
                        <select  {...register("category", { required: true })}
                            defaultValue="Select a Category" className="select w-full">
                            <option disabled={true}>Select a Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>

                    </fieldset>

                    {/* Price */}
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">Price *</legend>
                        <input  {...register("price", { required: true })} type="number" className="input w-full" placeholder="Price" />
                    </fieldset>
                </div>
                <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">Recipe Details *</legend>
                    <textarea  {...register("recipe")} className="textarea h-24" placeholder="Recipe Details"></textarea>
                </fieldset>

                <div className="my-6">
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-neutral" />
                </div>

                <button className="btn btn-secondary p-4">
                    Add Item <FaUtensils></FaUtensils>
                </button>
            </form>
        </div>
    );
};

export default AddItems;