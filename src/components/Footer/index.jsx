import React from "react";
import { Link } from "react-router-dom"; // Importe o Link do React Router
import { Text, Contactbar } from "./..";

export default function Footer({ content,...props }) {
  return (
    <footer {...props}>
      <div style={{
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} className="flex justify-center self-stretch">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-5 px-[61px] md:p-5 md:px-5 sm:flex-col">
          <Text size="4xl" as="p" className="tracking-[0.18px]">
            DANTAS
          </Text>
          <ul className="flex items-center gap-[15px]">

            <button
              onClick={() => (window.location.href = "/#about")}
              className="navbutton h-[36px] min-w-[92px]  px-[15px] text-xs tracking-[0.50px] text-white-A700"
            >
              <Text style={{
                color: "#000000",
              }}
                className="text-base font-normal tracking-[0.50px]">
                {content[0].sobre}
              </Text>
            </button>
            <button
              onClick={() => (window.location.href = "/#projects")}
              className="navbutton h-[36px] min-w-[92px]  px-[15px] text-xs tracking-[0.50px] text-white-A700"
            >
              <Text style={{
                color: "#000000",
              }}
                className="text-base font-normal tracking-[0.50px]">
                {content[0].projetos}
              </Text>
            </button>
            <button
              onClick={() => (window.location.href = "/#blog")}
              style={{ margin: 5 }}
              className="navbutton h-[36px] min-w-[92px]  px-[15px] text-xs tracking-[0.50px] text-white-A700"
            >
              <Text style={{
                color: "#000000",
              }}
                className="text-base font-semibold tracking-[0.50px]">
                {content[0].blogTitleuper}
              </Text>
            </button>

          </ul>
          <Contactbar />

        </div>
      </div>
      <ul style={{
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} className="!mx-auto flex w-full max-w-[1449px] flex-wrap items-center justify-between gap-5 border-t border-solid border-gray-300 py-[9px] pr-[9px] md:p-5">
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
