import React from 'react';
import CarouselLanding from '../LandingPage/CarouselLanding';
import HowItWorks from '../HowItWorks/HowItWorks';
import ServicesSection from '../ServicesSection/ServicesSection';
import LogoMarquee from '../LogoMarquee/LogoMarquee';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import HeroCTA from '../../HeroCTA/HeroCTA';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <CarouselLanding />
            <HowItWorks />
            <ServicesSection />
            <LogoMarquee />
            <FeaturesSection />
            <HeroCTA />
            <Testimonials />
        </div>
    );
};

export default Home;