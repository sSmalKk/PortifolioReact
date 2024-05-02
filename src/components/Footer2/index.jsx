import React from "react";
import { Button, Img, Text } from "./..";

export default function Footer2({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex self-stretch justify-center items-center mt-5`}>
      <div className="container-xs flex items-center justify-between gap-5 md:p-5 sm:flex-col">
        <Text className="text-2xl font-normal tracking-[0.18px] md:text-[22px]">DANTAS</Text>
        <div className="flex items-center px-3">
          <Text className="mb-[7px] self-end text-base font-semibold tracking-[0.50px] !text-black-900">SERVIÇOS</Text>
          <div className="ml-[31px] flex p-2">
            <Text className="text-base font-normal tracking-[0.50px]">PROJETOS</Text>
          </div>
          <div className="ml-[15px] flex p-2">
            <Text className="text-base font-normal tracking-[0.50px]">SOBRE</Text>
          </div>
        </div>
        <Button className="h-[36px] min-w-[92px] rounded-[18px] border border-solid border-green-400 bg-green-700 px-[15px] text-xs tracking-[0.50px] text-white-A700">
          CONTATO
        </Button>
        <div className="flex flex-col items-center gap-[18px] border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs">
          <Button className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
            <Img src="images/img_u_linkedin_alt.svg" />
          </Button>
          <Button className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
            <Img src="images/img_volume.svg" />
          </Button>
          <Button className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
            <Img src="images/img_u_instagram.svg" />
          </Button>
          <Button className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
            <Img src="images/img_lock.svg" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
