

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className="card bg-base-100 w-96 shadow-sm mx-auto">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />

            </figure>
            <p className="absolute bg-slate-800 text-white  right-0 mt-4 mr-4 px-4">${price}</p>

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline hover:bg-gray-500 border-0 border-b-4 bg-slate-100 rounded-2xl">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;