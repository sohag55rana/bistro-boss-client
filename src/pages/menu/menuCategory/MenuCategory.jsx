import { Link } from "react-router-dom";
import Cover from "../../sheard/cover/Cover";
import MenuItem from "../../sheard/menuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className="my-16">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 px-20 mt-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 rounded-2xl">
                    Order Your Favourite Offer
                </button></Link>
            </div>

        </div>
    );
};

export default MenuCategory;