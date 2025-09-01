
import SectionTitile from "../../../components/SectionTitile";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <div className="mb-12 flex flex-col items-center space-y-10">
            <SectionTitile
                subheading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitile>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 rounded-xl border-b-6 uppercase p-5 mt-4 text-2xl">View Full  Menu</button>

            <div className="my-32 bg-[#151515] py-24 px-96 text-white w-full">

                <h2 className="text-4xl font-semibold">
                    <span className="oldstyle-nums ...">Call Us: +88 0192345678910</span>
                </h2>
            </div>
        </div>
    );
};

export default PopularMenu;