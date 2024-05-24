import React from 'react';
import { Text, Img, Button } from "../..";
import "../style.css"

const ServiceComponentType2 = ({ service }) => {
  return (
    <div id={service.id} className="service-component flex items-start justify-around w-full">
      <div className="flex flex-col items-start gap-[21px] md:self-stretch">
        <Text size="lg" as="p" className="tracking-[0.50px]">
          {service.subtitle}
        </Text>
        <div className="flex">
          <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px]">
            {service.name}
          </Text>
        </div>
        <Text size="6xl" as="p" className="w-full leading-[56px]">
          {service.text}
        </Text>
        <Button
          color="green_700"
          size="md"
          shape="round"
          className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
          href={service.link}
        >
          {service.button}
        </Button>
      </div>
      <Img
        src={service.image}
        alt="container"
        className="flex-shrink-0 min-w-[200px] h-[380px] w-[379px] object-cover md:w-auto"
      />
    </div>
  );
};

export default ServiceComponentType2;
