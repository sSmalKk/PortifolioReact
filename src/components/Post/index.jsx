import React from "react";
import { Heading } from "./..";

export default function Post({
  nome = "@Nome",
  text = (
    <>
      Como o design de sites afeta a conversão
      <br />
      de visitantes?
    </>
  ),
  ...props
}) {
  return (
    <div {...props}>
      <Heading as="h6" className="mt-2">
        {nome}
      </Heading>
      <div className="mb-2.5 flex self-stretch">
        <Heading size="md" as="h3" className="w-[84%] leading-10 !text-gray-900">
          {text}
        </Heading>
      </div>
    </div>
  );
}
