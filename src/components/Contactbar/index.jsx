// Contactbar.js
import React, { useState } from "react";
import { Img } from "..";
import linkedInIcon from "../../assets/images/img_u_linkedin_alt.svg";
import volumeIcon from "../../assets/images/img_volume.svg";
import instagramIcon from "../../assets/images/img_u_instagram.svg";
import lockIcon from "../../assets/images/img_lock.svg";

export default function Contactbar({ className }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <button
        onClick={handleExpand}
        className={`contactbutton-white  h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
      >
        +
      </button>
      {expanded && (
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleRedirect("https://www.linkedin.com/in/gustavodantasdev/")}
            className={`contactbutton-white h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
          >
            <Img src={linkedInIcon} />
          </button>
          <button
            onClick={() => handleRedirect("https://api.whatsapp.com/send?phone=5561981594849")}
            className={`contactbutton-white  h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
          >
            <Img src={volumeIcon} />
          </button>
          <button
            onClick={() => handleRedirect("https://www.instagram.com/gustavosmalk/")}
            className={`contactbutton-white  h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
          >
            <Img src={instagramIcon} />
          </button>
          <button
            onClick={() => handleRedirect("mailto:dantaswebdesign77@gmail.com")}
            className={`contactbutton-white  h-[36px] w-[36px] rounded-[18px] px-2.5 ${className}`}
          >
            <Img src={lockIcon} />
          </button>
        </div>
      )}
    </div>
  );
}
