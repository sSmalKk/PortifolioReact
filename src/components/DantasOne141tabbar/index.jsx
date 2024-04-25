import React from "react";
import { Text, Heading } from "./..";

export default function DantasOne141tabbar({
  taboneThree = "SERVIÇOS",
  taboneFour = "PROJETOS",
  taboneFive = "SOBRE",
  ...props
}) {
  return (
    <ul {...props}>
      <li>
        <a href="SERVIÇOS" target="_blank" rel="noreferrer" className="ml-[21px] self-end">
          <Heading size="xs" as="h6" className="tracking-[0.50px] !text-black-900">
            {taboneThree}
          </Heading>
        </a>
      </li>
      <li>
        <a href="PROJETOS" target="_blank" rel="noreferrer">
          <Text size="2xl" as="p" className="tracking-[0.50px]">
            {taboneFour}
          </Text>
        </a>
      </li>
      <li>
        <a href="SOBRE" target="_blank" rel="noreferrer" className="mr-[21px]">
          <Text size="2xl" as="p" className="tracking-[0.50px]">
            {taboneFive}
          </Text>
        </a>
      </li>
    </ul>
  );
}
