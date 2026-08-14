import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-16 pt-md-24 pb-12 md:pb-20 bg-white">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Right Image Column (Mobile top, Desktop right order-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-5 lg:col-span-6 md:order-2 flex justify-center"
          >
            <img
              src="/assets/img/illustration-2.png"
              alt="Cloud & AI Solutions"
              className="w-full max-w-[460px] h-auto object-contain mb-6 md:mb-0"
            />
          </motion.div>

          {/* Left Content Column (Desktop left order-1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-7 lg:col-span-6 md:order-1 text-center md:text-left"
          >
            {/* Headline */}
            <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.12] font-normal text-[#1b2a4e] tracking-tight mb-5">
              Cloud & AI Solutions. <br />
              <span className="text-[#335eea]">Built for Speed.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-[18px] sm:text-[20px] text-[#869ab8] font-normal leading-[1.6] mb-8 max-w-[480px] mx-auto md:mx-0">
              We turn ideas into working software fast. From cloud infrastructure to intelligent applications, we prototype quickly, iterate with you, and deliver results that stick.
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center justify-center md:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#335eea] hover:bg-[#294bbb] text-white text-[17px] font-semibold px-6 py-3.5 rounded-md shadow-bs lift transition-all me-1"
              >
                Get Started
                <ArrowRight className="w-4 h-4 hidden sm:inline" />
              </a>

              <a
                href="#how-we-work"
                className="inline-flex items-center justify-center gap-2 bg-[#d6dffb] hover:bg-[#c4d3fa] text-[#335eea] text-[17px] font-semibold px-6 py-3.5 rounded-md lift transition-all"
              >
                How We Work
              </a>
            </div>



          </motion.div>

        </div>
      </div>
    </section>
  );
}


