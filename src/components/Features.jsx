import React from 'react';
import { motion } from 'framer-motion';
import {
  RapidPrototypingIllustration,
  CloudNativeIllustration,
  AIFirstIllustration,
  PartnershipIllustration,
} from './FeatureIllustrations';

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Rapid Prototyping',
      description:
        'See a working version of your idea in days, not months. We move fast so you can validate early and invest with confidence.',
      illustration: <RapidPrototypingIllustration />,
    },
    {
      id: 2,
      title: 'Cloud-Native',
      description:
        'We build on the cloud platform that fits your business — not ours. Scalable, secure infrastructure designed to grow with you.',
      illustration: <CloudNativeIllustration />,
    },
    {
      id: 3,
      title: 'AI-First Delivery',
      description:
        'We use AI throughout our development process to ship faster and build smarter — and we can bring that same advantage to your products.',
      illustration: <AIFirstIllustration />,
    },
    {
      id: 4,
      title: 'Ongoing Partnership',
      description:
        'We don’t disappear after launch. We stick around to support, optimize, and evolve your solution as your business grows.',
      illustration: <PartnershipIllustration />,
    },
  ];

  return (
    <section className="pt-2 sm:pt-4 pb-14 sm:pb-20 lg:pb-24 bg-[#F5F7F8] border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-[0_4px_20px_rgba(23,43,85,0.03)] hover:shadow-[0_12px_30px_rgba(23,43,85,0.08)] hover:border-primary/50 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                {/* Illustration Box */}
                <div className="mb-5 flex items-center justify-start transform group-hover:scale-105 transition-transform duration-300">
                  {feature.illustration}
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-bold text-[#172B55] mb-2.5 font-sans group-hover:text-[#2563EB] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] sm:text-[15.5px] text-[#506690] leading-[1.6] font-normal">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
