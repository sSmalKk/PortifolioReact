// ServiceC.jsx
import React from 'react';
import { Text, Button } from "../..";
const ServiceComponentType3 = ({ service, imagePosition }) => {
  return (
    <div
      id={service.id} 
      className="flex flex-col items-start justify-end gap-[21px] bg-cover bg-no-repeat py-[50px] md:h-auto md:py-5"
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundPosition: imagePosition // Apply imagePosition directly to backgroundPosition
      }}
    >
      <Text size="lg" as="p" className="mt-[563px] tracking-[0.50px] !text-white-A700">
        {service.subtitle}
      </Text>
      <div className="flex">
        <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px] !text-white-A700">
          {service.name}
        </Text>
      </div>
      <Text size="6xl" as="p" className="w-[55%] leading-[56px] !text-white-A700 md:w-full md:p-5">
        {service.text}
      </Text>
      <Button
        color="black_900_60"
        size="md"
        shape="round"
        className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
      href={service.link}
      >
        {service.button}
      </Button>
    </div>
  );
};

export default ServiceComponentType3;
