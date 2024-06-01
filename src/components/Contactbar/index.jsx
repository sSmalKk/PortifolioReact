import React from "react";
import { Button, Img } from "..";
import linkedInIcon from "../../../public/images/img_u_linkedin_alt.svg";
import volumeIcon from "../../../public/images/img_volume.svg";
import instagramIcon from "../../../public/images/img_u_instagram.svg";
import lockIcon from "../../../public/images/img_lock.svg";

export default function Contactbar() {
  return (
    <div className="flex gap-5">
      <Button
        size="xs"
        shape="round"
        onClick={() => window.location.href = 'https://www.linkedin.com/in/gustavodantasdev/'}
        className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5"
      >
        <Img src={linkedInIcon} />
      </Button>
      <Button
        size="xs"
        shape="round"
        onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5561981594849'}
        className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5"
      >
        <Img src={volumeIcon} />
      </Button>
      <Button
        size="xs"
        shape="round"
        onClick={() => window.location.href = 'https://www.instagram.com/gustavosmalk/'}
        className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5"
      >
        <Img src={instagramIcon} />
      </Button>
      <Button
        size="xs"
        shape="round"
        onClick={() => window.location.href = 'mailto:dantaswebdesign77@gmail.com'}
        className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5"
      >
        <Img src={lockIcon} />
      </Button>
    </div>
  );
}
