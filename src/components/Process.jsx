import React from 'react';
import { motion } from 'framer-motion';
import {
  DiscoverIllustration,
  PrototypeIllustration,
  IterateIllustration,
  LaunchSupportIllustration,
} from './ProcessIllustrations';

export default function Process() {
  const steps = [
    {
      id: 1,
      title: '1. Discover',
      description:
        'We start by listening. We learn your goals, constraints, and what success looks like — then map out a clear path to get there.',
      illustration: <DiscoverIllustration />,
    },
    {
      id: 2,
      title: '2. Prototype',
      description:
        'We deliver a working prototype quickly so you can see the direction, give feedback, and make decisions based on something real.',
      illustration: <PrototypeIllustration />,
    },
    {
      id: 3,
      title: '3. Iterate',
      description:
        'We refine together — short feedback loops, regular check-ins, and continuous improvement until the solution is exactly right.',
      illustration: <IterateIllustration />,
    },
    {
      id: 4,
      title: '4. Launch & Support',
      description:
        'We take you live with confidence — and stay engaged to monitor, support, and scale as your needs evolve.',
      illustration: <LaunchSupportIllustration />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F5F7F8] border-b border-slate-200/60 relative overflow-hidden" id="how-we-work">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-md bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/80 shadow-sm">
            How We Work
          </span>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#172B55] tracking-tight mb-3 font-sans me-0">
            From idea to production, <span className="text-[#2563EB]">together</span>.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#506690] leading-[1.65] font-normal me-0">
            Our process is built around collaboration and speed. No long discovery phases or months of silence — you'll see real progress from day one.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 me-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(23,43,85,0.03)] hover:shadow-[0_12px_30px_rgba(23,43,85,0.08)] hover:border-primary/50 transition-all duration-300 text-center flex flex-col items-center justify-between group me-0"
            >
              <div className="flex flex-col items-center text-center me-0">
                {/* Illustration Box */}
                <div className="mb-5 flex justify-center items-center transform group-hover:scale-105 transition-transform duration-300 me-0">
                  {step.illustration}
                </div>

                {/* Step Title */}
                <h3 className="text-[20px] font-bold text-[#172B55] mb-2.5 font-sans group-hover:text-[#2563EB] transition-colors me-0">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[15px] sm:text-[15.5px] text-[#506690] leading-[1.6] font-normal me-0">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
