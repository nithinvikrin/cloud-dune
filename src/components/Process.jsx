import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      title: '1. Discover',
      description:
        'We start by listening. We learn your goals, constraints, and what success looks like — then map out a clear path to get there.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path fill="#335EEA" opacity=".3" d="M5 15l-2 6.5 6.5-2z" />
            <path d="M13.5 21a9.5 9.5 0 110-19 9.5 9.5 0 010 19zm-5-8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#335EEA" />
          </g>
        </svg>
      ),
    },
    {
      title: '2. Prototype',
      description:
        'We deliver a working prototype quickly so you can see the direction, give feedback, and make decisions based on something real.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA" />
            <rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1" />
          </g>
        </svg>
      ),
    },
    {
      title: '3. Iterate',
      description:
        'We refine together — short feedback loops, regular check-ins, and continuous improvement until the solution is exactly right.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z" fill="#335EEA" />
          </g>
        </svg>
      ),
    },
    {
      title: '4. Launch & Support',
      description:
        'We take you live with confidence — and stay engaged to monitor, support, and scale as your needs evolve.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M17.738 6.352a1 1 0 111.524 1.296l-8.5 10a1 1 0 01-1.426.1l-4.5-4a1 1 0 111.328-1.495l3.736 3.32 7.838-9.22z" fill="#335EEA" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white" id="how-we-work">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#d6dffb] text-[#335eea] text-[12px] font-semibold uppercase tracking-wider mb-3">
            How We Work
          </span>
          <h2 className="text-[26px] sm:text-[31px] font-bold text-[#1b2a4e] tracking-tight mb-3">
            From idea to production, <span className="text-[#335eea]">together</span>.
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#869ab8] leading-[1.6] font-normal">
            Our process is built around collaboration and speed. No long discovery phases or months of silence — you'll see real progress from day one.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center"
            >
              {/* Step Icon */}
              <div className="mb-3 text-[#335eea] flex justify-center">
                {step.svg}
              </div>

              {/* Step Title */}
              <h3 className="text-[21px] font-bold text-[#1b2a4e] mb-2 font-sans">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[17px] text-[#869ab8] leading-[1.6] font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


