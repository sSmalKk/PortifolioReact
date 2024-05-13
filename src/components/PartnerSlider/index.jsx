import React from "react";
import { Img } from "../../components";

const PartnerSlider = (parceiros) => {
 
    return (
        <div id="partner-slider" className="flex gap-[18px] items-center border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs md:flex-col">
<div class="container">
  <div class="border-bar top-bar"></div>
  <div class="border-bar bottom-bar"></div>
  <div class="border-bar left-bar"></div>
  <div class="border-bar right-bar"></div>
  
  <div class="border-b border-t border-solid border-black-900_60 px-[194px] shadow-xs md:px-5">
    <div class="flex gap-[18px] items-center border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs md:flex-col">
      {parceiros.map((partner, index) => (
        <a key={`partner-item-${index}`} href={partner.link} target="_blank" rel="noopener noreferrer">
          <Img
            src={partner.image}
            alt={partner.title}
            className="h-[200px] w-[200px] object-cover md:w-full"
          />
        </a>
      ))}
    </div>
  </div>
</div>
        </div>
    );
};

export default PartnerSlider;
