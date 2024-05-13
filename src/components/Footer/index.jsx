import React from "react";
import { Link } from "react-router-dom"; // Importe o Link do React Router
import { Text, Button, Img} from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex justify-center self-stretch">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-5 px-[61px] md:p-5 md:px-5 sm:flex-col">
          <Text size="4xl" as="p" className="tracking-[0.18px]">
            DANTAS
          </Text>
          <ul className="flex items-center gap-[15px]">
            {/* Use Link em vez de <a> */}
            <Link to="/#services" className="cursor-pointer rounded-[3px] active:text-black-900">
              <Text className="text-base font-semibold tracking-[0.50px]">
                SERVIÇOS
              </Text>
            </Link>
            <Link to="/#projects" className="cursor-pointer rounded-[3px] active:text-black-900">
              <Text className="text-base font-normal tracking-[0.50px]">
                PROJETOS
              </Text>
            </Link>
            <Link to="/#about" className="cursor-pointer rounded-[3px] active:text-black-900">
              <Text className="text-base font-normal tracking-[0.50px]">
                SOBRE
              </Text>
            </Link>
          </ul>
          <Button
            color="green_700"
            size="md"
            className="min-w-[92px] rounded-[18px] border border-solid border-green-400 tracking-[0.50px]"
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
      </div>
      <ul className="!mx-auto flex w-full max-w-[1449px] flex-wrap items-center justify-between gap-5 border-t border-solid border-gray-300 py-[9px] pr-[9px] md:p-5">
        <li>
          <Link to="/privacypolicy
">
            <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
              Privacypolicy
            </Text>
          </Link>
        </li>
        <li>
          <a href="copyright">
            <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
              © 2024 DANTAS COPYRIGHT
            </Text>
          </a>
        </li>
        <li>
          <Link to="/termsconditions">
            <Text size="xs" as="p" className="uppercase tracking-[4.00px] !text-blue_gray-500">
              Terms & conditions
            </Text>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
