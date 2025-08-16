import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Luxury = () => {
    const sectionRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const scrollTimer = gsap.timeline({
            scrollTrigger: {
                trigger: "#luxury-collection",
                start: "top center",

            },
        })

           .to("#luxury-collection .top-grid div,#luxury-collection .bottom-grid div", {
               opacity:1,
               y: -50,
                duration: 1,
                ease: "power1.inOut",
                stagger: 0.1
            });
        }, []);


    return (
        <section>
            <div id="luxury-collection" className="min-h-screen py-28 2xl:px-0 px-5 container mx-auto">
                <div className="md:px-0 mb-30 -mt-20 px-5">
                    <div>
                        <h1 className="font-serif text-xl md:text-2xl lg:text-5xl font-normal text-black leading-tight">
                            From playful patterns for little feet to the plush elegance of our{" "}
                            <span className="text-transparent bg-gradient-to-r from-yellow to-black bg-clip-text">
                                luxury rabbit fur collection
                            </span>
                            , there's a{" "}
                            <span className="heading text-transparent bg-gradient-to-r from-yellow to-black bg-clip-text">
                                Soak & Step
                            </span>{" "}
                            rug for every stage of life.
                        </h1>
                    </div>
                </div>

                <div className="pt-15 -mb-20">
                    <div className="top-grid">
                        <div className="md:col-span-3 relative">

                            <img
                                src="/images/r1.avif"
                                alt="Luxury rug collection - Pattern 1"
                            />
                        </div>
                        <div className="md:col-span-6 relative">

                            <img
                                src="https://m.media-amazon.com/images/I/81rHdnBDt1L._SL1500_.jpg"
                                alt="Luxury rug collection - Main showcase"
                            />
                        </div>
                        <div className="md:col-span-3 relative">

                            <img
                                src="/images/r3.jpg"
                                alt="Luxury rug collection - Pattern 2"
                            />
                        </div>
                    </div>

                    <div className="bottom-grid">
                        <div className="md:col-span-8 relative">

                            <img
                                src="/images/r4.webp"
                                alt="Luxury rug collection - Large display"
                            />
                        </div>
                        <div className="md:col-span-4 relative">

                            <img
                                src="/images/r5.webp"
                                alt="Luxury rug collection - Detail view"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Luxury;