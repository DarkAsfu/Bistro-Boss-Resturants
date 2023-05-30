import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="md:my-20 mb-8">
            <SectionTitle
                heading={"TESTIMONIALS"}
                subHeading={"What Our Clients Say"}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="md:mx-48 mx-10 text-center space-y-6">
                                <div className="text-4xl">
                                    <Rating
                                        placeholderRating={review.rating}
                                        readonly
                                        emptySymbol={<FaStar className=" text-[#A1A1A1]"></FaStar>}
                                        placeholderSymbol={<FaStar className="text-[#CD9003]"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <FaQuoteLeft className="mx-auto text-8xl mt-4"></FaQuoteLeft>
                                </div>
                                <p>{review.details}</p>
                                <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;