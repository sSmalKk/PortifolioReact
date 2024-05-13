import React from 'react';
import { Text, Img, Heading, Button } from "../../components";

const ServiceComponentType2 = ({ service }) => {
  return (
    <div id={service.id}  className="h-screen flex items-center bg-blue-500 justify-evenly md:flex-col w-full max-w-screen-xl mx-auto">
                  <div className="flex flex-1 flex-col items-start gap-[21px] md:self-stretch">
                    <Text size="lg" as="p" className="tracking-[0.50px]">
                      {service.subtitle}
                    </Text>
                    <div className="flex">
                      <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px]">
                      {service.name}
                      </Text>
                    </div>
                    <Text size="6xl" as="p" className="w-[82%] leading-[56px] md:w-full">
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
                    alt="image"
                    className="h-[100%] w-[32%] object-cover md:w-full"
                  />
                </div>
  );
};

export default ServiceComponentType2;
