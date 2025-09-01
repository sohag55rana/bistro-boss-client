import SectionTitile from "../../../components/SectionTitile";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-server-nu-azure.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-10">
            <SectionTitile
                subheading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitile>
            {reviews.length}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div>
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="m-24 text-center space-y-5 items-center flex flex-col">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-5xl"></FaQuoteLeft>
                                <p className="text-2xl">{review.details}</p>
                                <h3 className="text-3xl text-orange-600">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>


        </section>
    );
};

export default Testimonials;