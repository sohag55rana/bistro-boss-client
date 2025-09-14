import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../sheard/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === "popular")
    //             setMenu(popularItem)
    //         })
    // }, [])
    return (
        <div className="mb-10">
            <SectionTitle subHeading={"Popular Items"} heading={"from our menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-outline border-0 border-b-4 rounded-2xl">
                    View full menu
                </button>
            </div>
        </div>
    );
};

export default PopularMenu;