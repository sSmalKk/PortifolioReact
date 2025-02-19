import React from "react";
import ServiceComponentType1 from "./ServiceA";

const ServicesComponent = ({ languageindex, services, content, url }) => {
  return (
    <div>
      {services.map((service, index) => {
        let component;
        switch (service.designtype) {
          case 1:
            component = (
              <ServiceComponentType1
                url={url}
                content={content}
                languageindex={languageindex}
                key={service.id}
                service={service}
              />
            );
            break;

          default:
            component = null;
        }
        return (
          <React.Fragment key={service.id}>
            {component}
            {index < services.length - 1 && <div className="my-10" />}{" "}
            {/* Add margin between components */}
          </React.Fragment>
        );
      })}
      <div className="w-full border-t border-gray-300"></div>
    </div>
  );
};

export { ServicesComponent };
