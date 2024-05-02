import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function Header1({ ...props }) {
  return (
    <header {...props}>
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
          <div className="flex rounded-[3px] p-2">
            <Text size="2xl" as="p" className="tracking-[0.50px]">
              PROJETOS
            </Text>
          </div>
          <div className="flex rounded-[3px] p-2">
            <Text size="2xl" as="p" className="tracking-[0.50px]">
              SOBRE
            </Text>
          </div>
        </div>
      </div>
      <div className="flex w-[22%] justify-between gap-5 md:w-full">
        <div className="flex gap-5">
          <a href="#">
            <Button size="xs" shape="round" className="w-[36px]">
              <Img src="images/img_u_linkedin_alt.svg" />
            </Button>
          </a>
          <a href="#">
            <Button size="xs" shape="round" className="w-[36px]">
              <Img src="images/img_volume.svg" />
            </Button>
          </a>
        </div>
        <Button
          color="green_700"
          size="md"
          shape="round"
          className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
        >
          CONTATO
        </Button>
      </div>
    </header>
  );
}
