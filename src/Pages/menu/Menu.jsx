import React from 'react';
import { Helmet } from "react-helmet";
import Cover from './cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitile from '../../components/SectionTitile';
import MenuCategory from './menuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div className='space-y-20'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Cover img={menuImg} title={'our menu'} description={'Would you like to try a dish?'}></Cover>
            {/* main category */}
            <SectionTitile
                subheading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitile>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory img={dessertImg} items={dessert} title={"dessert"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory img={pizzaImg} items={pizza} title={"pizza"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory img={saladImg} items={salad} title={"salad"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory img={soupImg} items={soup} title={"soup"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

        </div>
    );
};

export default Menu;