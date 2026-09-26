import React from 'react';
import { ServiceInfo } from '../helpers/User';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div
      id="services"
      className="px-16 mx-20 xl-mx:mx-10 bs-mx:mx-5 md-mx:mx-0 my-5 pt-10 font-mono xs-mx:px-3"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-white text-center">
        <span className="text-primaryColor">02.&nbsp;</span>Services
      </h1>

      {/* 2x2 Balanced Executive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md-mx:gap-6">
        {ServiceInfo.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
