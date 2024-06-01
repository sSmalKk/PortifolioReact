import React from "react";
import { Contact, Contactbar, Button, Img, Text } from "..";
import "./style.css";
export default function Header(props) {
  const { content } = props;

  return (
    <header
      {...props}
      className={`${props.className} w-[100%]  flex md:flex-col justify-between items-center  sticky bg-white z-10`}
    >
      <button onClick={() => window.location.href = '/#about'} className="h-[36px] min-w-[92px] border border-solid bg-white px-[15px] text-xs tracking-[0.50px] text-white-A700">

        <Text className="text-2xl font-normal tracking-[0.18px] md:text-[22px]">{content[0].headerTitle}</Text>

      </button>
      <ul className="flex items-center gap-[15px]">
        <button onClick={() => window.location.href = '/#services'} style={{ margin: 5 }} className="h-[36px] min-w-[92px] border border-solid bg-white px-[15px] text-xs tracking-[0.50px] text-white-A700">
          <Text className="text-base font-semibold tracking-[0.50px]">
            {content[0].servicos}
          </Text>
        </button>

        <button onClick={() => window.location.href = '/#projects'} className="h-[36px] min-w-[92px] border border-solid bg-white px-[15px] text-xs tracking-[0.50px] text-white-A700">
          <Text className="text-base font-normal tracking-[0.50px]">
            {content[0].projetos}
          </Text>
        </button>

        <button onClick={() => window.location.href = '/#about'} className="h-[36px] min-w-[92px] border border-solid bg-white px-[15px] text-xs tracking-[0.50px] text-white-A700">
          <Text className="text-base font-normal tracking-[0.50px]">
            {content[0].sobre}
          </Text>
        </button>
      </ul>
      <div className="flex justify-between gap-5 md:w-full">
        <Contactbar />
        <Contact content={content} />
      </div>
    </header>
  );
}
