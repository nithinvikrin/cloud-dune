import React from 'react';
import { motion } from 'framer-motion';
import {
  CloudInfraIllustration,
  DataAnalyticsIllustration,
  AIDevIllustration,
  AppDevIllustration,
  SecurityIllustration,
  DevOpsIllustration,
} from './ServiceIllustrations';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud environments designed for your business.',
      illustration: <CloudInfraIllustration />,
      accentColor: '#2563EB',
    },
    {
      id: 2,
      title: 'Data & Analytics',
      description: 'Turn raw data into business insights with modern data platforms.',
      illustration: <DataAnalyticsIllustration />,
      accentColor: '#059669',
    },
    {
      id: 3,
      title: 'AI & Intelligent Apps',
      description: 'Build intelligent applications with AI-powered features and automation.',
      illustration: <AIDevIllustration />,
      accentColor: '#D97706',
    },
    {
      id: 4,
      title: 'Application Development',
      description: 'Custom web and backend applications tailored to your unique needs.',
      illustration: <AppDevIllustration />,
      accentColor: '#2563EB',
    },
    {
      id: 5,
      title: 'Security & Reliability',
      description: 'Secure, compliant, and resilient systems built for the real world.',
      illustration: <SecurityIllustration />,
      accentColor: '#E11D48',
    },
    {
      id: 6,
      title: 'DevOps & Automation',
      description: 'Automate, deploy, and scale with confidence using DevOps best practices.',
      illustration: <DevOpsIllustration />,
      accentColor: '#0891B2',
    },
  ];

  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="scroll-mt-20 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/60 to-[#F5F7F8] relative border-b border-slate-200/60 overflow-hidden" id="services">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          {/* Top-left style Numbered Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-sm">
            <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-extrabold">
              2
            </span>
            <span>Core Capabilities</span>
          </div>

          {/* Main Section Heading */}
          <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-extrabold text-[#172B55] tracking-tight font-sans">
            What We Do
          </h2>

          {/* Gradient Underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#2563EB] to-purple-600 rounded-full mx-auto mt-3 mb-4" />
        </div>

        {/* 6 Services Grid - 1 Row on Desktop, 3 Cols on Tablet, 1-2 Cols on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(23,43,85,0.04)] overflow-hidden divide-y sm:divide-y-0 md:divide-x divide-slate-200/70"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onClick={() => {
                const text = encodeURIComponent(`Hello Cloud Dune, I am interested in your ${service.title} services.`);
                window.open(`https://wa.me/18135206937?text=${text}`, '_blank', 'noopener,noreferrer');
              }}
              className="group p-6 sm:p-7 flex flex-col items-center text-center justify-between hover:bg-slate-50/90 transition-all duration-300 cursor-pointer relative"
            >
              {/* Top Accent Line on Hover */}
              <div
                className="absolute top-0 left-4 right-4 h-1 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: service.accentColor }}
              />

              {/* Service Illustration */}
              <div className="mb-6 flex justify-center items-center transform group-hover:scale-105 transition-transform duration-300 me-0">
                {service.illustration}
              </div>

              {/* Content Box */}
              <div className="flex-1 flex flex-col justify-start me-0">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#172B55] mb-2 font-sans group-hover:text-[#2563EB] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-[13.5px] sm:text-[14px] text-[#506690] leading-[1.55] font-normal">
                  {service.description}
                </p>
              </div>

              {/* Action Prompt */}
              <div className="mt-5 text-xs font-semibold text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                <span>Learn More</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
