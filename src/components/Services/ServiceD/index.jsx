// ServiceC.jsx
import React from 'react';
const ServiceComponentType3 = ({ service, imagePosition }) => {
  return (
    <div id={service.id}
      className="container mx-auto px-4">
      <div className="bg-blue-500 flex-col md:flex-row md:max-w-screen-xl md:mx-auto">
        <div className="h-screen md:h-auto md:relative md:w-full md:max-w-[379px]">
          <img         src={service.image}
 alt="container" className="w-full h-full object-cover md:static md:w-auto md:h-auto md:transform-none md:max-h-screen" />
        </div>
        <div className="flex flex-col justify-start md:justify-center items-start md:items-center md:pl-10 md:pr-10 md:w-full">
          <div>
            <p className="text-lg tracking-[0.50px] md:text-base">        {service.subtitle}
            </p>
            <p className="text-8xl mt-2 tracking-[-1.50px] md:text-4xl">          {service.name}
</p>
            <p className="text-6xl w-[81%] leading-[56px] md:text-base md:w-full">        {service.text}
</p>
          </div>
          <button         href={service.link}
 className="bg-green-700 text-white px-4 py-2 rounded-full border border-solid border-green-400 tracking-[0.50px] md:text-sm self-end mt-4 md:mt-0">        {service.button}
</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponentType3;
