import liveTrackingImg from "../../../assets/live-tracking.png";
import safeDeliveryImg from "../../../assets/safe-delivery.png";
import supportImg from "../../../assets/safe-delivery.png";

import React from 'react';

const DeliveryFeatureCard = ({ title, description, imageSrc }) => {
    return (
        <div className="bg-white rounded-xl p-10 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-start gap-10 md:gap-16 last:mb-0 ">
            {/* Illustration Area */}
            <div className="">
                <img
                    src={imageSrc}
                    alt={title}
                    className="max-h-50 w-auto object-contain"
                />
            </div>

            {/* Vertical Dashed Divider */}
            <div className="hidden md:block h-32 border-l-2 border-dashed border-[#003333]/30" />

            {/* Text Content Area */}
            <div className="flex-1 text-left  md-2/3">
                <h2 className="text-[#003333] text-2xl md:text-3xl font-bold mb-4">
                    {title}
                </h2>
                <p className="text-[#003333]/80 text-lg leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    );
};

const FeatureSection = () => {
    const features = [
        {
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            imageSrc: liveTrackingImg
        },
        {
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            imageSrc: safeDeliveryImg
        },
        {
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            imageSrc: supportImg
        }
    ];

    return (
        <section className="mb-10">
            {features.map((feature, index) => (
                <DeliveryFeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    imageSrc={feature.imageSrc}
                />
            ))}
        </section>
    );
};

export default FeatureSection;