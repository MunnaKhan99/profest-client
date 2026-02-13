import { FaTruckPickup, FaMoneyBillWave, FaWarehouse, FaBriefcase } from "react-icons/fa6";

const steps = [
    {
        title: "Booking Pick & Drop",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
        icon: FaTruckPickup,
    },
    {
        title: "Cash On Delivery",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
        icon: FaMoneyBillWave,
    },
    {
        title: "Delivery Hub",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
        icon: FaWarehouse,
    },
    {
        title: "Booking SME & Corporate",
        desc: "From personal packages to business shipments — we deliver on time, every time.",
        icon: FaBriefcase,
    },
];

const HowItWorks = () => {
    return (
        <section className=" py-16">

            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-10">
                How it Works
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl transition duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-4 text-teal-700">
                                <Icon size={28} />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HowItWorks;