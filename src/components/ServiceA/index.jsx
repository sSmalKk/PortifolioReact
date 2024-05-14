import React from 'react';
import { Text, Img, Button } from "../../components";

const ServiceComponentType1 = ({ service }) => {
  return (

    <div id={service.id}  className="h-screen bg-blue-500 flex items-center justify-center">
        <Img
                    src={service.image}
          alt="container"
          className="h-[380px] w-[379px] object-cover md:w-full"
        />
        <div className="flex flex-1 flex-col items-start gap-[21px] md:self-stretch">
          <Text size="lg" as="p" className="tracking-[0.50px]">
          {service.subtitle}
          </Text>
          <div className="flex">
            <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px]">
            {service.name}
            </Text>
          </div>
          <Text size="6xl" as="p" className="w-[81%] leading-[56px] md:w-full">
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
      </div>
  );
};

export default ServiceComponentType1;
