import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

import topIllustration from "../../../assets/customer-top.png";
import quoteIcon from "../../../assets/reviewQuote.png";
import user1 from "../../../assets/image-upload-icon.png";
import user2 from "../../../assets/image-upload-icon.png";
import user3 from "../../../assets/image-upload-icon.png";

const testimonials = [
    {
        id: 0,
        text:
            "A posture corrector works by providing support and gentle alignment for your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
        name: "Awlad Hossin",
        role: "Senior Product Designer",
        avatar: user1,
    },
    {
        id: 1,
        text:
            "A posture corrector works by providing support and gentle alignment for your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
        name: "Rasel Ahamed",
        role: "CTO",
        avatar: user2,
    },
    {
        id: 2,
        text:
            "A posture corrector works by providing support and gentle alignment for your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
        name: "Nasir Uddin",
        role: "CEO",
        avatar: user3,
    },
    {
        id: 3,
        text:
            "The service quality was outstanding and the UI experience felt very premium.",
        name: "Sabbir Rahman",
        role: "Product Manager",
        avatar: user1,
    },
    {
        id: 4,
        text:
            "The platform helped us scale our operations smoothly. Excellent UX and support.",
        name: "Mahmudul Hasan",
        role: "Operations Lead",
        avatar: user2,
    },
];

const Testimonials = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full py-16 md:py-24  overflow-hidden">

                {/* Header Section */}
                <div className="text-center mb-10 md:mb-16">
                    <img
                        src={topIllustration}
                        alt="Delivery Illustration"
                        className="mx-auto mb-6 w-32 md:w-48"
                    />
                    <h2 className="text-2xl md:text-4xl font-bold text-[#0b3f44] mb-4">
                        What our customers are saying
                    </h2>
                    <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-500 leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        We deliver on time, every time.
                    </p>
                </div>

                {/* Swiper Slider */}
                <div className="relative px-2 md:px-10">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        centeredSlides={true}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 40 },
                        }}
                        className="!overflow-visible py-12"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="transition-all duration-500">
                                {({ isActive }) => (
                                    <div
                                        className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-500 flex flex-col 
          
            h-[320px] md:h-[380px] w-full 
            ${isActive
                                                ? "scale-100 opacity-100 shadow-xl -translate-y-10"
                                                : "scale-90 opacity-50 blur-[1px] translate-y-2"
                                            }`}
                                    >
                                        {/* Top Section: Quote and Text */}
                                        <div className="flex-grow">
                                            <img src={quoteIcon} alt="quote" className="w-14 opacity-80" />

                                            {/* line-clamp-5 মানে ৫ লাইনের বেশি হলে "..." দেখাবে */}
                                            <p className="text-gray-600 text-sm md:text-base italic line-clamp-4 md:line-clamp-6">
                                                "{item.text}"
                                            </p>
                                        </div>

                                        {/* Bottom Section: User Info (Always stays at bottom) */}
                                        <div className="flex items-center gap-4 border-t border-dashed pt-5 mt-4">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-lime-400 p-0.5 object-cover"
                                            />
                                            <div className="text-left">
                                                <h4 className="font-bold text-gray-800 text-sm md:text-base truncate max-w-[150px]">
                                                    {item.name}
                                                </h4>
                                                <p className="text-gray-400 text-xs md:text-sm truncate max-w-[150px]">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation & Dots */}
                    <div className="flex flex-col items-center gap-6 -mt-6">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="p-3 rounded-full bg-white shadow-md hover:bg-lime-400 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Custom Dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-2.5 rounded-full transition-all duration-300 
                                        ${index === activeIndex ? "bg-lime-400 w-6" : "bg-gray-300 w-2.5"}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="p-3 rounded-full bg-white shadow-md hover:bg-lime-400 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Testimonials;
