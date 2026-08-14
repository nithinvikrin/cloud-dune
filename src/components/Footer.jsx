import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[#f1f4f8] text-[#506690]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <a href="#" className="inline-block mb-3">
              <img
                src="/assets/img/brand.svg"
                alt="Concise Cloud Solutions"
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="text-[#506690] mb-2 font-normal text-[16px]">
              Cloud & AI experts.
            </p>
            <p className="text-[#506690] mb-1 text-[15px] font-normal">
              <a href="tel:9042978190" className="hover:text-[#335eea] transition-colors">
                (904) 297-8190
              </a>
            </p>
            <p className="text-[15px] font-normal">
              <a href="mailto:info@concisecloudsolutions.com" className="text-[#506690] hover:text-[#335eea] transition-colors">
                info@concisecloudsolutions.com
              </a>
            </p>
          </div>

          {/* Services Column */}
          <div className="col-span-6 md:col-span-4 lg:col-span-3 lg:col-start-7">
            <h6 className="font-bold text-[12px] uppercase text-[#506690] tracking-wider mb-4">
              Services
            </h6>
            <ul className="space-y-3 text-[15px] text-[#869ab8] font-normal">
              <li>
                <a href="#services" className="hover:text-[#335eea] transition-colors">
                  Cloud Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#335eea] transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#335eea] transition-colors">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#335eea] transition-colors">
                  DevOps & IaC
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <h6 className="font-bold text-[12px] uppercase text-[#506690] tracking-wider mb-4">
              Connect
            </h6>
            <ul className="space-y-3 text-[15px] text-[#869ab8] font-normal">
              <li>
                <a href="tel:9042978190" className="hover:text-[#335eea] transition-colors">
                  (904) 297-8190
                </a>
              </li>
              <li>
                <a href="mailto:info@concisecloudsolutions.com" className="hover:text-[#335eea] transition-colors">
                  info@concisecloudsolutions.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}


