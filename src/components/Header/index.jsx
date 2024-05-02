import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <Text size="4xl" as="p" className="tracking-[0.18px]">
        DANTAS
      </Text>
      <ul className="!mb-1.5 flex flex-wrap gap-[47px] self-end">
        <li>
          <a href="#" className="self-end">
            <Heading size="xs" as="h6" className="tracking-[0.50px] !text-black-900">
              SERVIÇOS
            </Heading>
          </a>
        </li>
        <li>
          <a href="#" className="cursor-pointer self-start">
            <Text size="2xl" as="p" className="tracking-[0.50px] hover:font-semibold hover:text-black-900">
              PROJETOS
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="cursor-pointer self-start">
            <Text size="2xl" as="p" className="tracking-[0.50px] hover:font-semibold hover:text-black-900">
              SOBRE
            </Text>
          </a>
        </li>
      </ul>
      <div className="flex w-[16%] justify-between gap-5 md:w-full">
        <div className="flex gap-5">
          <Button size="xs" shape="round" className="w-[36px]">
            <Img src="images/img_u_linkedin_alt.svg" />
          </Button>
          <Button size="xs" shape="round" className="w-[36px]">
            <Img src="images/img_volume.svg" />
          </Button>
        </div>
        <Button
          color="green_700"
          size="md"
          className="min-w-[92px] rounded-[18px] border border-solid border-green-400 tracking-[0.50px]"
        >
          CONTATO
        </Button>
      </div>
    </header>
  );
}
