import Marquee from "react-fast-marquee";
// logos.js (or inline in component)
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

const logos = [
    { id: 1, name: "Casio", src: casio },
    { id: 2, name: "Amazon", src: amazon },
    { id: 3, name: "Moonstar", src: moonstar },
    { id: 4, name: "Star", src: star },
    { id: 5, name: "People", src: start_people },
    { id: 6, name: "Randstad", src: randstad },
    { id: 7, name: "Amazon Vector", src: amazon_vector },
];

const LogoMarquee = () => {
    return (
        <section className=" py-16">

            {/* Heading */}
            <h2 className="text-center text-[#03373D] text-3xl  md:text-3xl font-bold mb-16">
                We’ve helped thousands of sales teams
            </h2>

            {/* Marquee */}
            <Marquee
                direction="left"
                speed={40}
                gradient={false}
                pauseOnHover
                className="flex items-center gap-16"
            >
                {logos.map((logo) => (
                    <div
                        key={logo.id}
                        className="mx-20 flex items-center justify-center"
                    >
                        <img
                            src={logo.src}
                            alt={logo.name}
                            className="h-6  object-contain opacity-80 hover:opacity-100 transition"
                        />
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default LogoMarquee;