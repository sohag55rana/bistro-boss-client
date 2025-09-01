import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./popularMenu/PopularMenu";
import Featured from "./featured/Featured";
import Testimonials from "./testimonials/Testimonials";
import ServeTitle from "./serveTitle/ServeTitle";
import ReciepeCard from "./ReceipeCard/ReciepeCard";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ServeTitle></ServeTitle>
            <PopularMenu></PopularMenu>
            <ReciepeCard></ReciepeCard>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;