import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";

const faqData = [
    {
        question: "How does this posture corrector work?",
        answer:
            "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
        question: "Is it suitable for all ages and body types?",
        answer: "Yes, our posture corrector is designed with adjustable straps to fit various body sizes and is suitable for both adults and teenagers.",
    },
    {
        question: "Does it really help with back pain and posture improvement?",
        answer: "Absolutely! Regular use helps train your muscles and spine to return to their natural alignment, significantly reducing back and neck pain.",
    },
    {
        question: "Does it have smart features like vibration alerts?",
        answer: "This specific model focuses on physical alignment, but we do have a Pro version that includes smart vibration sensors for slouching alerts.",
    },
    {
        question: "How will I be notified when the product is back in stock?",
        answer: "You can sign up for our newsletter or click the 'Notify Me' button on the product page to receive an instant email alert.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // Prothomti default open thakbe

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" py-20 px-4 min-h-screen flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-12 max-w-3xl">
                <h2 className="text-[#15919B] text-3xl md:text-4xl font-bold mb-6">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            {/* Accordion List */}
            <div className="w-full max-w-4xl space-y-4">
                {faqData.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`rounded-xl transition-all duration-300 overflow-hidden ${isOpen ? "bg-[#E0F7F9]" : "bg-white"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                            >
                                <span
                                    className={`font-semibold text-sm md:text-lg ${isOpen ? "text-[#0B3F44]" : "text-gray-800"
                                        }`}
                                >
                                    {item.question}
                                </span>
                                {isOpen ? (
                                    <ChevronUp className="text-[#15919B] w-5 h-5" />
                                ) : (
                                    <ChevronDown className="text-gray-500 w-5 h-5" />
                                )}
                            </button>

                            {/* Answer Section */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6 px-6 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="border-t border-[#B2E2E6] pt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Button */}
            <div className="mt-12 flex items-center gap-2">
                <button className="bg-lime-400 hover:bg-lime-500 transition-colors text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2">
                    See More FAQ's
                </button>
                <div className="bg-[#262626] p-3 rounded-xl cursor-pointer hover:bg-[#333] transition-colors">
                    <ArrowUpRight className="text-white w-6 h-6" />
                </div>
            </div>
        </section>
    );
};

export default FAQ;