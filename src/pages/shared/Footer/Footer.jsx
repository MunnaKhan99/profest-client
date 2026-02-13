import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../Logo/Logo";



const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-16 rounded-3xl">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Logo />
                </div>

                {/* Tagline */}
                <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 mb-10">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>

                {/* Divider */}
                <div className="border-t border-dashed border-teal-600/40 my-6"></div>

                {/* Navigation */}
                <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
                    {["Services", "Coverage", "About Us", "Pricing", "Blog", "Contact"].map(
                        (item) => (
                            <li
                                key={item}
                                className="hover:text-white transition cursor-pointer"
                            >
                                {item}
                            </li>
                        )
                    )}
                </ul>

                {/* Divider */}
                <div className="border-t border-dashed border-teal-600/40 my-6"></div>

                {/* Social Icons */}
                <div className="flex justify-center gap-5 mt-6">
                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:scale-105 transition"
                    >
                        <FaLinkedinIn size={18} />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition"
                    >
                        <FaXTwitter size={18} />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-105 transition"
                    >
                        <FaFacebookF size={18} />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF0000] text-white hover:scale-105 transition"
                    >
                        <FaYoutube size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;