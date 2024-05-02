import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function Footer1({ ...props }) {
  return (
    <footer {...props}>
      <div className="container-xs flex items-center justify-between gap-5 md:p-5 sm:flex-col">
        <Text size="4xl" as="p" className="tracking-[0.18px]">
          DANTAS
        </Text>
        <div className="flex px-3">
          <div className="flex gap-[15px]">
            <div className="flex p-[7px]">
              <Heading size="xs" as="h6" className="self-end tracking-[0.50px] !text-black-900">
                SERVIÇOS
              </Heading>
            </div>
            <div className="flex p-2">
              <Text size="2xl" as="p" className="tracking-[0.50px]">
                PROJETOS
              </Text>
            </div>
            <div className="flex p-2">
              <Text size="2xl" as="p" className="tracking-[0.50px]">
                SOBRE
              </Text>
            </div>
          </div>
        </div>
        <Button
          color="green_700"
          size="md"
          shape="round"
          className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
        >
          CONTATO
        </Button>
        <div className="flex flex-col items-center gap-[18px] border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs">
          <Button size="xs" shape="round" className="w-[36px]">
            <Img src="images/img_u_linkedin_alt.svg" />
          </Button>
          <Button size="xs" shape="round" className="w-[36px]">
            <Img src="images/img_volume.svg" />
          </Button>
          <Button size="xs" shape="round" className="w-[36px]">
            <Img src="images/img_u_instagram.svg" />
          </Button>
          <Button size="xs" shape="round" className="w-[36px]">
            <Img src="images/img_lock.svg" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
