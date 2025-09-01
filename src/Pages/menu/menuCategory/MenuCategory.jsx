import { Link } from "react-router-dom";
import MenuItem from "../../Home/MenuItem/MenuItem";
import Cover from "../cover/Cover";


const MenuCategory = ({ items, title, img, description }) => {
    return (
        <div className="text-center mt-12">
            {title && <Cover img={img} title={title} description={description}></Cover>}
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 rounded-xl border-b-6 uppercase p-5 mt-4 text-2xl">Order now</button></Link>
        </div>
    );
};

export default MenuCategory;