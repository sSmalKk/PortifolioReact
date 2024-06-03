// Contactbar.js
import React from "react";
import { Img } from "..";
import linkedInIcon from "../../assets/images/img_u_linkedin_alt.svg";
import volumeIcon from "../../assets/images/img_volume.svg";
import instagramIcon from "../../assets/images/img_u_instagram.svg";
import lockIcon from "../../assets/images/img_lock.svg";

export default function Contactbar({ className }) {
  return (
    <div className="flex gap-5">
      <button
        onClick={() => (window.location.href = "https://www.linkedin.com/in/gustavodantasdev/")}
        className={`contactbutton h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
      >
        <Img src={linkedInIcon} />
      </button>
      <button
        onClick={() => (window.location.href = "https://api.whatsapp.com/send?phone=5561981594849")}
        className={`contactbutton h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
      >
        <Img src={volumeIcon} />
      </button>
      <button
        onClick={() => (window.location.href = "https://www.instagram.com/gustavosmalk/")}
        className={`contactbutton h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
      >
        <Img src={instagramIcon} />
      </button>
      <button
        onClick={() => (window.location.href = "mailto:dantaswebdesign77@gmail.com")}
        className={`contactbutton h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
      >
        <Img src={lockIcon} />
      </button>
    </div>
  );
}
