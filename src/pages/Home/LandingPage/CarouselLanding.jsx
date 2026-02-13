import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required styles
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/banner/banner1.png"
import banner2 from "../../../assets/banner/banner2.png"
import banner3 from "../../../assets/banner/banner3.png"

const CarouselLanding = () => {
    return (
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showStatus={false}
        >
            <div>
                <img src={banner1} />
            </div>
            <div>
                <img src={banner2} />
            </div>
            <div>
                <img src={banner3} />
            </div>
        </Carousel>
    );
};

export default CarouselLanding;