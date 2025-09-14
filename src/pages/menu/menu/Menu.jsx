import useTitle from "../../../useHook/useTitle/useTitle";
import Cover from "../../sheard/cover/Cover";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/MenuCategory";
import coverImg1 from "../../../assets/menu/banner3.jpg"
import coverImg2 from "../../../assets/menu/dessert-bg.jpeg"
import coverImg3 from "../../../assets/menu/pizza-bg.jpg"
import coverImg4 from "../../../assets/menu/salad-bg.jpg"
import coverImg5 from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
    useTitle("Bistro Boss | Menu");

    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === "salad")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Cover img={coverImg1} title={"our menu"}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory coverImg={coverImg2} items={dessert} title={"dessert"}></MenuCategory>

            <MenuCategory coverImg={coverImg3} items={pizza} title={"pizza"}></MenuCategory>

            <MenuCategory coverImg={coverImg4} items={salad} title={"salad"}></MenuCategory>

            <MenuCategory coverImg={coverImg5} items={soup} title={"soup"}></MenuCategory>
        </div>
    );
};

export default Menu;