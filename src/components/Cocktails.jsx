import React, { useEffect, useRef } from "react";

const LuxuryKidsCarpets = () => {
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = "1";
                            entry.target.style.transform = "scale(1) translateY(0)";
                        }, index * 100);
                    }
                });
            },
            { threshold: 0.1 }
        );

        itemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    const cardStyle = {
        boxShadow:
            "0 0 15px rgba(255, 255, 255, 0.12), 0 0 25px rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
    };

    return (
        <div className="bg-black py-12 px-4 flex justify-center min-h-[600px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
                {/* Large Image */}
                <div
                    ref={addToRefs}
                    className="relative rounded-xl overflow-hidden  transform scale-95 translate-y-6 transition-all duration-700 h-[550px]"
                    style={cardStyle}
                >
                    <img
                        src="/images/WhatsApp%20Image%202025-08-13%20at%2019.45.04_7883b415.jpg"
                        alt="Forest carpet"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Two stacked small images */}
                <div className="grid grid-rows-2 gap-4">
                    <div
                        ref={addToRefs}
                        className="relative rounded-xl overflow-hidden  transform scale-95 translate-y-6 transition-all duration-700 h-[255px]"
                        style={cardStyle}
                    >
                        <img
                            src="/images/WhatsApp%20Image%202025-08-13%20at%2019.45.02_3f3ed62a.jpg"
                            alt="Castle carpet"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        ref={addToRefs}
                        className="relative rounded-xl overflow-hidden  transform scale-95 translate-y-6 transition-all duration-700 h-[250px]"
                        style={cardStyle}
                    >
                        <img
                           src="/images/WhatsApp%20Image%202025-08-13%20at%2019.45.01_88481eef.jpg"
                            alt="Space carpet"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuxuryKidsCarpets;
