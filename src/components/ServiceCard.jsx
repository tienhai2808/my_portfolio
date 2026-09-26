import React, { useState } from 'react';
import { Button } from '@mantine/core';
import {
  IconShoppingBag,
  IconCode,
  IconReportAnalytics,
  IconSparkles,
  IconCircleCheck,
  IconArrowRight,
  IconTarget,
} from '@tabler/icons-react';
import { scroller } from 'react-scroll';

const iconMap = {
  'lowcode-nocode-web': IconShoppingBag,
  'custom-code-systems': IconCode,
  'it-business-analysis': IconReportAnalytics,
  'ai-workflow-automation': IconSparkles,
};

const ServiceCard = ({ service, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const IconComponent = iconMap[service.id] || IconCode;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleInquire = () => {
    window.dispatchEvent(
      new CustomEvent('select-service', { detail: service.title })
    );

    scroller.scrollTo('contact', {
      duration: 600,
      smooth: true,
      offset: -41.5,
    });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      onMouseMove={handleMouseMove}
      className="relative group rounded-3xl p-8 lg-mx:p-6 flex flex-col justify-between overflow-hidden bg-bgColor border border-primaryColor shadow-[0_0_10px_0_#8cf8f8] hover:shadow-[0_0_25px_2px_#8cf8f8] hover:-translate-y-2 hover:scale-[1.015] transition-all duration-300"
    >
      {/* Dynamic Radial Spotlight on Hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(140, 248, 248, 0.18), transparent 70%)`,
        }}
      />

      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-primaryColor to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Content */}
      <div className="relative z-10">
        {/* Header row: category + badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="text-primaryColor font-mono text-xs uppercase tracking-wider font-semibold">
            {`// 0${index + 1} • ${service.category}`}
          </span>
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-mono font-medium bg-primaryColor/10 border border-primaryColor text-primaryColor shadow-[0_0_6px_0_#8cf8f8]">
            {service.badge}
          </span>
        </div>

        {/* Title and Icon */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primaryColor/10 border border-primaryColor flex items-center justify-center text-primaryColor group-hover:scale-110 group-hover:bg-primaryColor group-hover:text-bgColor transition-all duration-300 shadow-[0_0_8px_0_#8cf8f8] flex-shrink-0">
            <IconComponent size={28} stroke={1.8} />
          </div>
          <h3 className="text-2xl sm-mx:text-xl font-bold text-white leading-tight group-hover:text-primaryColor transition-colors duration-200">
            {service.title}
          </h3>
        </div>

        {/* Best for target pill */}
        <div className="flex items-center gap-2 text-xs font-mono text-textColor bg-slate-800/60 px-3.5 py-2 rounded-xl border border-slate-700/60 mb-4">
          <IconTarget size={16} className="text-primaryColor flex-shrink-0" />
          <span>
            <strong className="text-white font-medium">Best for: </strong>
            {service.bestFor}
          </span>
        </div>

        {/* Description */}
        <p className="text-textColor text-sm leading-relaxed text-justify mb-5">
          {service.desc}
        </p>

        {/* Features Checklist */}
        <div className="mb-6 space-y-2.5">
          <div className="text-xs uppercase tracking-wider text-primaryColor font-bold">
            Key Deliverables & Scope:
          </div>
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs text-gray-200 leading-relaxed"
            >
              <IconCircleCheck
                size={16}
                className="text-primaryColor mt-0.5 flex-shrink-0"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Content: Platforms & CTA */}
      <div className="relative z-10 pt-4 border-t border-slate-800/80 mt-auto">
        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          <span className="text-[11px] font-mono text-textColor mr-1">Stack:</span>
          {service.platforms.map((platform, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-primaryColor/10 text-primaryColor border border-primaryColor/40 shadow-[0_0_5px_0_rgba(140,248,248,0.2)]"
            >
              {platform}
            </span>
          ))}
        </div>

        <Button
          onClick={handleInquire}
          fullWidth
          variant="outline"
          color="#8cf8f8"
          rightSection={
            <IconArrowRight
              size={18}
              className="group-hover/btn:translate-x-1.5 transition-transform"
            />
          }
          className="group/btn !font-mono !text-sm !h-11 hover:!bg-primaryColor hover:!text-bgColor !font-semibold transition-all duration-300 !rounded-xl !border-primaryColor !shadow-[0_0_8px_0_#8cf8f8] hover:!shadow-[0_0_16px_0_#8cf8f8]"
        >
          Discuss This Service
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
