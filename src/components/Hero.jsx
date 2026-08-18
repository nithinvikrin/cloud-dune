import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MountainIllustration from './MountainIllustration';

export default function Hero({ onOpenDemoModal }) {
  // Container entrance variant for staggered children fade + slide up
  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 bg-[#F5F7F8] relative overflow-hidden min-w-0 max-w-full">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12 xl:px-16 min-w-0 max-w-full">
        
        {/* Hero Container Card */}
        <div className="bg-[#F5F7F8] border border-slate-200/70 rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(23,43,85,0.04)] overflow-hidden min-w-0 max-w-full p-[clamp(12px,3.2vw,48px)] me-0">
          
          {/* Strict Single Horizontal Composition (Flex Row Flex-Nowrap on Mobile & Desktop) */}
          <div className="flex flex-row flex-nowrap items-center justify-between gap-[clamp(8px,2.5vw,40px)] w-full min-w-0 me-0">
            
            {/* Left Content Column (48% width) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-none w-[48%] sm:w-[50%] lg:w-[48%] min-w-0 text-left z-10 me-0"
            >
              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-[clamp(17px,4.5vw,62px)] font-extrabold tracking-tight leading-[0.98] mb-[clamp(8px,1.8vw,24px)] font-sans me-0"
              >
                <span className="block text-[#172B55]">
                  Cloud &amp; AI
                </span>
                <span className="block text-[#172B55]">
                  Solutions.
                </span>
                <span className="block text-[#2563EB]">
                  Built for Speed.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-[clamp(8.5px,1.45vw,19px)] text-[#506690] leading-[1.45] font-normal mb-[clamp(10px,2vw,28px)] max-w-[540px] me-0"
              >
                We turn ideas into working software fast. From cloud infrastructure to intelligent applications, we prototype quickly, iterate with you, and deliver results that stick.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-row items-center justify-start gap-[clamp(4px,1.2vw,16px)] me-0"
              >
                {/* Primary Button */}
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-1 sm:gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[clamp(8px,1.25vw,16px)] font-semibold px-[clamp(8px,1.8vw,24px)] py-[clamp(4px,1vw,14px)] rounded-md sm:rounded-xl shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 me-0"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-[clamp(9px,1.2vw,16px)] h-[clamp(9px,1.2vw,16px)] transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#how-we-work"
                  className="inline-flex items-center justify-center gap-1 bg-white/80 hover:bg-white text-[#172B55] border border-slate-300 text-[clamp(8px,1.25vw,16px)] font-semibold px-[clamp(8px,1.8vw,24px)] py-[clamp(4px,1vw,14px)] rounded-md sm:rounded-xl shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 me-0"
                >
                  How We Work
                </a>
              </motion.div>
            </motion.div>

            {/* Right Mountain Illustration Column (50% width) */}
            <div className="flex-none w-[50%] sm:w-[48%] lg:w-[50%] min-w-0 flex items-center justify-center me-0">
              <MountainIllustration />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
