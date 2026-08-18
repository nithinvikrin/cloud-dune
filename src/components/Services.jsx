import React from 'react';
import { motion } from 'framer-motion';

export default function Services({ onSelectService }) {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description:
        'Scalable, secure cloud environments designed for your business. We work across all major cloud providers so you get the best fit — not vendor lock-in.',
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
      title: 'Data & Analytics',
      description:
        'Data lakes, data warehouses, and real-time pipelines that turn raw data into business insights. Built to scale on the platform of your choice.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M5.293 6.707a1 1 0 111.414-1.414l6 6a1 1 0 01.03 1.383l-5.5 6a1 1 0 11-1.474-1.352l4.853-5.294-5.323-5.323z" fill="#335EEA" />
            <rect fill="#335EEA" opacity=".3" x="12" y="17" width="10" height="2" rx="1" />
          </g>
        </svg>
      ),
    },
    {
      title: 'AI & Intelligent Apps',
      description:
        'From AI-powered features to fully intelligent applications, we help you put the latest models to work — quickly and practically.',
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
      title: 'Application Development',
      description:
        'Custom web and backend applications built for your specific needs. We work across languages and frameworks to deliver the right solution, not the trendy one.',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path d="M19 11h1a3 3 0 010 6h-1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3h2a3 3 0 000-6H3V8a2 2 0 012-2h3V5a3 3 0 116 0v1h3a2 2 0 012 2v3z" fill="#335EEA" opacity=".3" />
          </g>
        </svg>
      ),
    },
    {
      title: 'Security & Reliability',
      description:
        'Security built in from day one — not bolted on after. We design systems that are resilient, compliant, and hardened against real-world threats.',
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
    {
      title: 'DevOps & Automation',
      description:
        'Automated infrastructure, continuous delivery, and repeatable deployments. We set up the systems that let you ship with confidence, every time.',
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
  ];

  return (
    <section className="py-14 md:py-24 bg-custom-softblue border-b border-custom-grey" id="services">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-custom-lightblue text-[#1b2a4e] text-[13px] font-bold uppercase tracking-wider mb-3 border border-custom-grey">
            Services
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1b2a4e] tracking-tight mb-3 font-sans">
            What We Do
          </h2>
          <p className="text-[17px] sm:text-[19px] text-slate-700 leading-[1.6] font-normal">
            Broad expertise, focused delivery. We bring the right skills to every engagement.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => {
                const text = encodeURIComponent(`Hello Cloud Dune, I am interested in your ${service.title} services.`);
                window.open(`https://wa.me/18135206937?text=${text}`, '_blank', 'noopener,noreferrer');
              }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-bs border border-custom-grey hover:bg-custom-lightblue/40 hover:border-primary lift transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Icon & Arrow Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#335eea] p-2.5 bg-custom-lightblue rounded-lg border border-custom-grey/60">
                    {service.svg}
                  </div>
                  <span className="text-xs font-semibold text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Chat on WhatsApp →
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-[19px] font-bold text-[#1b2a4e] mb-3 font-sans group-hover:text-[#335eea] transition-colors">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.6] font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


