import React from "react";
import { Button, Img, Text } from "./..";

export default function Header2({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex md:flex-col justify-between items-center`}>
      <Text className="text-2xl font-normal tracking-[0.18px] md:text-[22px]">DANTAS</Text>
      <ul className="flex flex-wrap items-center gap-[15px]">
        <li>
          <a href="#" className="mb-[7px] cursor-pointer">
            <Text className="text-base font-semibold tracking-[0.50px] !text-black-900 hover:rounded-[3px]">
              SERVIÇOS
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="cursor-pointer rounded-[3px]">
            <Text className="text-base font-normal tracking-[0.50px] hover:font-semibold hover:text-black-900">
              PROJETOS
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="cursor-pointer rounded-[3px]">
            <Text className="text-base font-normal tracking-[0.50px] hover:font-semibold hover:text-black-900">
              SOBRE
            </Text>
          </a>
        </li>
      </ul>
      <div className="flex w-[22%] justify-between gap-5 md:w-full">
        <div className="flex gap-5">
          <a href="#">
            <Button className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
              <Img src="images/img_u_linkedin_alt.svg" />
            </Button>
          </a>
          <a href="#">
            <Button className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
              <Img src="images/img_volume.svg" />
            </Button>
          </a>
        </div>
        <Button className="h-[36px] min-w-[92px] rounded-[18px] border border-solid border-green-400 bg-green-700 px-[15px] text-xs tracking-[0.50px] text-white-A700">
          CONTATO
        </Button>
      </div>
    </header>
  );
}
