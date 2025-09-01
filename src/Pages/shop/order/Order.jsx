import Cover from "../../menu/cover/Cover";
import orderImg from "../../../assets/shop/order.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderCard from "../orderCard/OrderCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    console.log(category);
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Order Food</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Cover img={orderImg} title={"Order food"} description={"Would you like to try a dish?"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderCard items={salad}></OrderCard>
                </TabPanel>
                <TabPanel>
                    <OrderCard items={pizza}></OrderCard>
                </TabPanel>
                <TabPanel>
                    <OrderCard items={soup}></OrderCard>
                </TabPanel>
                <TabPanel>
                    <OrderCard items={dessert}></OrderCard>
                </TabPanel>
                <TabPanel>
                    <OrderCard items={drinks}></OrderCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;