import React from "react";
import { Button, Img } from "..";

export default function Contactbar() {
  return (
    <div className="flex gap-5">
      <Button size="xs" shape="round" onClick={() => window.location.href = 'https://www.linkedin.com/in/gustavodantasdev/'} className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
        <Img src="images/img_u_linkedin_alt.svg" />
      </Button>
      <Button size="xs" shape="round" onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5561981594849'} className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
        <Img src="images/img_volume.svg" />
      </Button>
      <Button size="xs" shape="round" onClick={() => window.location.href = 'https://www.instagram.com/gustavosmalk/'} className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
        <Img src="images/img_u_instagram.svg" />
      </Button>
      <Button size="xs" shape="round" onClick={() => window.location.href = 'mailto:dantaswebdesign77@gmail.com'} className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
        <Img src="images/img_lock.svg" />
      </Button>
    </div >
  );
}
