import useTitle from "../../../useHook/useTitle/useTitle";
import orderImg from "../../../assets/shop/order.jpg"
import Cover from "../../sheard/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import FoodCard from "../../../components/foodCard/FoodCard";
import OrderTab from "../orderTab/OrderTab";
import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";


const Order = () => {
    useTitle("Bistro Boss | Order");
    // --------------------
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialValue = categories.indexOf(category)
    const safeIndex = initialValue === -1 ? 0 : initialValue
    // --------------------
    const [menu] = useMenu()
    const [tabIndex, setTabIndex] = useState(safeIndex)

    const salad = menu.filter(item => item.category === "salad")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Cover img={orderImg} title={"Our Order"}></Cover>
            <div className="text-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;