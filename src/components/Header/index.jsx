import React from "react";
import { Button, Img, Text } from "..";
import "./style.css"; 

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center  sticky bg-white z-10`}
    >
      <Text className="text-2xl font-normal tracking-[0.18px] md:text-[22px]">DANTAS</Text>
      <ul className="flex items-center gap-[15px]">
        <button onClick={() => window.location.href = '/#services'} className="cursor-pointer rounded-[3px] active:text-black-900">
          <Text className="text-base font-semibold tracking-[0.50px]">
            SERVIÇOS
          </Text>
        </button>

        <button onClick={() => window.location.href = '/#projects'} className="cursor-pointer rounded-[3px] active:text-black-900">
          <Text className="text-base font-normal tracking-[0.50px]">
            PROJETOS
          </Text>
        </button>

        <button onClick={() => window.location.href = '/#about'} className="cursor-pointer rounded-[3px] active:text-black-900">
          <Text className="text-base font-normal tracking-[0.50px]">
            SOBRE
          </Text>
        </button>
      </ul>
      <div className="flex w-[22%] justify-between gap-5 md:w-full">
        <div className="flex gap-5">
            <Button onClick={() => window.location.href = '/#contact'} className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
              <Img src="images/img_u_linkedin_alt.svg" />
            </Button>
            <Button onClick={() => window.location.href = '/#contact'} className="h-[36px] w-[36px] rounded-[18px] bg-blue_gray-900_19 px-2.5">
              <Img src="images/img_volume.svg" />
            </Button>
        </div>
        <Button onClick={() => window.location.href = '/#contact'} className="h-[36px] min-w-[92px] rounded-[18px] border border-solid border-green-400 bg-green-700 px-[15px] text-xs tracking-[0.50px] text-white-A700">
          CONTATO
        </Button>
      </div>
    </header>
  );
}
