import React from "react";
import { Text } from "./..";

export default function DantasOne141tabbar({
  tabonetext = "SERVIÇOS",
  tabtwotext = "PROJETOS",
  tabthreetext = "SOBRE",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center px-3`}>
      <Text className="mb-[7px] self-end text-base font-semibold tracking-[0.50px] !text-black-900">{tabonetext}</Text>
      <div className="ml-[31px] flex p-2">
        <Text className="text-base font-normal tracking-[0.50px]">{tabtwotext}</Text>
      </div>
      <div className="ml-[15px] flex p-2">
        <Text className="text-base font-normal tracking-[0.50px]">{tabthreetext}</Text>
      </div>
    </div>
  );
}
