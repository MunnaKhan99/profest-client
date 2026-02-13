import {
    FaTruckFast,
    FaBoxesPacking,
    FaMoneyBillWave,
    FaBuilding,
    FaRotateLeft,
} from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";


const servicesData = [
    {
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

// Icon resolver based on title keywords
const getServiceIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes("express") || t.includes("standard")) return FaTruckFast;
    if (t.includes("nationwide")) return FaGlobeAsia;
    if (t.includes("fulfillment")) return FaBoxesPacking;
    if (t.includes("cash")) return FaMoneyBillWave;
    if (t.includes("corporate")) return FaBuilding;
    if (t.includes("return")) return FaRotateLeft;
    return FaTruckFast;
};

const ServicesSection = () => {
    return (
        <section className="bg-[#03373D] py-20 rounded-3xl my-12">


            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
                    Our Services
                </h2>
                <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
                {servicesData.map((service, index) => {
                    const Icon = getServiceIcon(service.title);

                    return (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 text-center transition hover:-translate-y-1 hover:shadow-xl hover:bg-lime-300 bg-white text-[#606060]`}
                        >
                            {/* Icon */}
                            <div
                                className={`mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-gray-100`}
                            >
                                <Icon size={28} className="text-teal-700" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={`text-sm leading-relaxed text-[#0b3f44]/80`}
                            >
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;