import React, { useEffect, useRef } from "react";
import { Img } from "../../components";
import "./style.css";

const PartnerSlider = ({ parceiros }) => {
    const sliderRef = useRef(null);
    const animationFrameId = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const scrollStep = () => {
            scrollAmount += 1;
            if (scrollAmount >= slider.scrollWidth / 3) {
                scrollAmount = 0;
            }
            slider.scrollLeft = scrollAmount;

            handleScroll();

            animationFrameId.current = requestAnimationFrame(scrollStep);
        };

        const handleScroll = () => {
            const items = slider.getElementsByClassName("partner-item");
        
            const screenWidth = window.innerWidth;
        
            for (let item of items) {
                const itemCenter = item.offsetLeft + item.offsetWidth / 2 - slider.scrollLeft;
                const sliderCenter = screenWidth / 2;
                const distanceToCenter = Math.abs(sliderCenter - itemCenter);
                const maxDistance = screenWidth / 2;
        
                let scale = Math.max(0.5, 1 - (distanceToCenter / maxDistance) * 0.5);
        
                item.style.transform = `scale(${scale})`;
            }
        };
        
        animationFrameId.current = requestAnimationFrame(scrollStep);

        slider.addEventListener("scroll", handleScroll);

        return () => {
            cancelAnimationFrame(animationFrameId.current);
            slider.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const duplicatedParceiros = [...parceiros, ...parceiros, ...parceiros];

    return (
        <div id="partner-slider" className="overflow-hidden w-full">
            <div
                ref={sliderRef}
                className="scroll-container gap-[18px] items-center overflow-x-scroll no-scrollbar whitespace-nowrap border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs"
            >
                {duplicatedParceiros.map((partner, index) => (
                    <a
                        key={`partner-item-${index}`}
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="partner-item inline-block"
                    >
                        <Img
                            src={partner.image}
                            alt={partner.title}
                            className="h-[200px] w-[200px] object-cover md:w-full"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PartnerSlider;
