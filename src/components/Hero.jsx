import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MountainIllustration from './MountainIllustration';

export default function Hero({ onOpenDemoModal }) {
  // Container entrance variant for staggered children fade + slide up
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-24 bg-[#F5F7F8] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Main Hero Container Card with subtle rounded corners and soft shadow */}
        <div className="bg-[#F5F7F8] border border-slate-200/60 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_10px_30px_rgba(23,43,85,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 text-center lg:text-left z-10"
            >
              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-[40px] sm:text-[52px] lg:text-[58px] xl:text-[64px] font-extrabold tracking-tight leading-[1.08] mb-6 font-sans me-0"
              >
                <span className="block text-[#172B55]">
                  Cloud & AI Solutions.
                </span>
                <span className="block text-[#2563EB]">
                  Built for Speed.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#506690] leading-[1.65] font-normal mb-8 max-w-[550px] mx-auto lg:mx-0"
              >
                We turn ideas into working software fast. From cloud infrastructure to intelligent applications, we prototype quickly, iterate with you, and deliver results that stick.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                {/* Primary Button */}
                <a
                  href="#contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[16px] sm:text-[17px] font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                {/* Secondary Button */}
                <a
                  href="#how-we-work"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#172B55] border border-slate-300 text-[16px] sm:text-[17px] font-semibold px-7 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  How We Work
                </a>
              </motion.div>
            </motion.div>

            {/* Right Mountain Illustration Column */}
            <div className="lg:col-span-6 flex justify-center items-center mt-6 lg:mt-0">
              <MountainIllustration />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
