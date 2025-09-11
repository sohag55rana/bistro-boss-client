import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import slideImg1 from "../../../assets/home/slide1.jpg"
import slideImg2 from "../../../assets/home/slide2.jpg"
import slideImg3 from "../../../assets/home/slide3.jpg"
import slideImg4 from "../../../assets/home/slide4.jpg"
import slideImg5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={"From 11.00 am to 10.00 pm"} heading={"online order"}>
            </SectionTitle>
            <Swiper
                slidesPerView={Autoplay}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide className="!w-[300px]">
                    <img src={slideImg1} alt="" />
                    <h3 className="text-4xl uppercase text-white -mt-16 text-center">salads</h3>
                </SwiperSlide>
                <SwiperSlide className="!w-[300px]">
                    <img src={slideImg2} alt="" />
                    <h3 className="text-4xl uppercase text-white -mt-16 text-center">pizza</h3>
                </SwiperSlide>
                <SwiperSlide className="!w-[300px]">
                    <img src={slideImg3} alt="" />
                    <h3 className="text-4xl uppercase text-white -mt-16 text-center">soups</h3>
                </SwiperSlide>
                <SwiperSlide className="!w-[300px]">
                    <img src={slideImg4} alt="" />
                    <h3 className="text-4xl uppercase text-white -mt-16 text-center">desserts</h3>
                </SwiperSlide>
                <SwiperSlide className="!w-[300px]">
                    <img src={slideImg5} alt="" />
                    <h3 className="text-4xl uppercase text-white -mt-16 text-center">salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;