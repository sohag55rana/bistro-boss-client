import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-20">
            <SectionTitle subHeading={"What Our Client Say"} heading={"Testimonials"}></SectionTitle>

            <Swiper navigation={true} loop={reviews.length > 1} modules={[Pagination, Navigation]} className="mySwiper">
                {reviews.map(review => <SwiperSlide key={review._id}>
                    <div className="my-8 text-center flex flex-col items-center mx-24">
                        <RiDoubleQuotesL className="text-7xl"></RiDoubleQuotesL>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className="my-4">{review.details}</p>
                        <h2 className="text-3xl text-yellow-500">{review.name}</h2>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Testimonials;