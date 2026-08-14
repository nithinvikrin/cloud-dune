import React from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: 'Rapid Prototyping',
      description:
        'See a working version of your idea in days, not months. We move fast so you can validate early and invest with confidence.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M16.374 19.939l5.849-8.773A.75.75 0 0021.599 10H17V4.477a.75.75 0 00-1.374-.416l-5.849 8.773A.75.75 0 0010.401 14H15v5.523a.75.75 0 001.374.416z" fill="#335EEA" />
            <path d="M4.5 5h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm0 12h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm-2-6h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 010-3z" fill="#335EEA" opacity=".3" />
          </g>
        </svg>
      ),
    },
    {
      title: 'Cloud-Native',
      description:
        'We build on the cloud platform that fits your business — not ours. Scalable, secure infrastructure designed to grow with you.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M5.747 13.043A6 6 0 1114.811 6.5h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z" fill="#335EEA" opacity=".3" />
            <path d="M14.888 17.83H12.93v-2.007a.5.5 0 00-.5-.5h-1.023a.5.5 0 00-.5.5v2.008H8.95a.5.5 0 00-.381.823l2.968 3.505a.5.5 0 00.763 0l2.968-3.505a.5.5 0 00-.381-.823z" fill="#335EEA" />
          </g>
        </svg>
      ),
    },
    {
      title: 'AI-First Delivery',
      description:
        'We use AI throughout our development process to ship faster and build smarter — and we can bring that same advantage to your products.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <rect fill="#335EEA" opacity=".3" x="4" y="4" width="16" height="16" rx="2" />
            <path fill="#335EEA" opacity=".3" d="M9 9h6v6H9z" />
            <path d="M20 7h1a1 1 0 010 2h-1V7zM20 11h1a1 1 0 010 2h-1v-2zM20 15h1a1 1 0 010 2h-1v-2zM3 7h1v2H3a1 1 0 110-2zM3 11h1v2H3a1 1 0 010-2zM3 15h1v2H3a1 1 0 010-2z" fill="#335EEA" />
          </g>
        </svg>
      ),
    },
    {
      title: 'Ongoing Partnership',
      description:
        'We don’t disappear after launch. We stick around to support, optimize, and evolve your solution as your business grows.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M4 4l7.631-1.43a2 2 0 01.738 0L20 4v9.283a8.51 8.51 0 01-4 7.217l-3.47 2.169a1 1 0 01-1.06 0L8 20.5a8.51 8.51 0 01-4-7.217V4z" fill="#335EEA" opacity=".3" />
            <path d="M11.175 14.75a.946.946 0 01-.67-.287l-1.917-1.917a.926.926 0 010-1.342c.383-.383 1.006-.383 1.341 0l1.246 1.246 3.163-3.162a.926.926 0 011.341 0 .926.926 0 010 1.341l-3.833 3.834a.946.946 0 01-.671.287z" fill="#335EEA" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white border-b border-[#f1f4f8]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-left"
            >
              {/* Icon Container */}
              <div className="mb-3 text-[#335eea]">
                {feature.svg}
              </div>

              {/* Title */}
              <h3 className="text-[21px] font-normal text-[#1b2a4e] mb-2 font-sans">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[17px] text-[#869ab8] leading-[1.6] font-normal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


