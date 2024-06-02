import React from 'react';
import ServiceComponentType1 from './ServiceA';
import ServiceComponentType2 from './ServiceB';
import ServiceComponentType3 from './ServiceC';

const ServicesComponent = ({ services, content, url }) => {
  return (
    <div>
      {services.map((service, index) => {
        let component;
        switch (service.designtype) {
          case 1:
            component = <ServiceComponentType1 url={url} content={content} key={service.id} service={service} />;
            break;
          case 2:
            component = <ServiceComponentType2 url={url} content={content} key={service.id} service={service} />;
            break;
          case 3:
            component = (
              <ServiceComponentType3
                url={url}
                content={content}
                key={service.id}
                service={service}
                imagePosition={service.imagePosition || 'center'} // Assuming 'center' as default
              />
            );
            break;
          default:
            component = null;
        }
        return (
          <React.Fragment key={service.id}>
            {component}
            {index < services.length - 1 && <div className="my-10" />} {/* Add margin between components */}
          </React.Fragment>
        );
      })}
      <div className="w-full border-t border-gray-300"></div>
    </div>
  );
};

export { ServicesComponent };
