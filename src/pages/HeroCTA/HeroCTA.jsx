import React from "react";
import heroIllustration from "../../assets/location-merchant.png";
import bgImage from "../../assets/be-a-merchant-bg.png";

const HeroCTA = () => {
    return (
        <section className="mb-10">
            <div
                className="relative overflow-hidden rounded-3xl bg-[#0b3f44] bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-14 md:px-16 md:py-20">

                    {/* Left Content */}
                    <div className="text-white">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                            Merchant and Customer Satisfaction <br />
                            is Our First Priority
                        </h1>

                        <p className="text-gray-200 max-w-xl mb-8 text-sm md:text-base leading-relaxed">
                            We offer the lowest delivery charge with the highest value along with
                            100% safety of your product. Pathao courier delivers your parcels in every
                            corner of Bangladesh right on time.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 rounded-full bg-lime-300 text-[#0b3f44] font-semibold hover:bg-lime-400 transition">
                                Become a Merchant
                            </button>

                            <button className="px-6 py-3 rounded-full border border-lime-300 text-lime-300 font-semibold hover:bg-lime-300 hover:text-[#0b3f44] transition">
                                Earn with ZapShift Courier
                            </button>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative flex justify-center md:justify-end">
                        <img
                            src={heroIllustration}
                            alt="Merchant Location Illustration"
                            className="max-w-[280px] md:max-w-[360px] lg:max-w-[420px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroCTA;
