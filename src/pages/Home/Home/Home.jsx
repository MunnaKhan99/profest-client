import React from 'react';
import CarouselLanding from '../LandingPage/CarouselLanding';
import HowItWorks from '../HowItWorks/HowItWorks';
import ServicesSection from '../ServicesSection/ServicesSection';
import LogoMarquee from '../LogoMarquee/LogoMarquee';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import HeroCTA from '../../HeroCTA/HeroCTA';
import Testimonials from '../Testimonials/Testimonials';
import FAQ from '../FAQ/Faq';

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
            <FAQ />
        </div>
    );
};

export default Home;