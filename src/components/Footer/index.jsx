import React from "react";
import { Text, Button, Img, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex justify-center self-stretch">
        <div className="container-sm flex items-center justify-between gap-5 px-[61px] md:p-5 md:px-5 sm:flex-col">
          <Text size="4xl" as="p" className="tracking-[0.18px]">
            DANTAS
          </Text>
          <ul className="flex w-[28%] flex-wrap justify-between gap-5 p-[7px] sm:w-full">
            <li>
              <a href="SERVIÇOS" target="_blank" rel="noreferrer" className="ml-[21px] self-end md:ml-0">
                <Heading size="xs" as="h6" className="tracking-[0.50px] !text-black-900">
                  SERVIÇOS
                </Heading>
              </a>
            </li>
            <li>
              <a href="PROJETOS" target="_blank" rel="noreferrer">
                <Text size="2xl" as="p" className="tracking-[0.50px]">
                  PROJETOS
                </Text>
              </a>
            </li>
            <li>
              <a href="SOBRE" target="_blank" rel="noreferrer" className="mr-[21px] md:mr-0">
                <Text size="2xl" as="p" className="tracking-[0.50px]">
                  SOBRE
                </Text>
              </a>
            </li>
          </ul>
          <Button
            color="green_700"
            size="sm"
            shape="round"
            className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
          >
            CONTATO
          </Button>
          <div className="flex flex-col items-center gap-[18px] border-l border-r border-solid border-black-900_60 p-[18px] shadow-xs">
            <Button shape="circle" className="w-[36px] !rounded-[18px]">
              <Img src="images/img_u_linkedin_alt.svg" />
            </Button>
            <Button shape="circle" className="w-[36px] !rounded-[18px]">
              <Img src="images/img_volume.svg" />
            </Button>
            <Button shape="circle" className="w-[36px] !rounded-[18px]">
              <Img src="images/img_u_instagram.svg" />
            </Button>
            <Button shape="circle" className="w-[36px] !rounded-[18px]">
              <Img src="images/img_lock.svg" />
            </Button>
          </div>
        </div>
      </div>
      <ul className="!mx-auto flex w-full max-w-[1449px] flex-wrap items-center justify-between gap-5 border-t border-solid border-gray-300 py-[9px] pr-[9px] md:p-5">
        <li>
          <a href="#" className="my-[18px]">
            <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
              Privacy policy
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
              © 2024 DANTAS COPYRIGHT
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
              Terms & conditions
            </Text>
          </a>
        </li>
      </ul>
    </footer>
  );
}
