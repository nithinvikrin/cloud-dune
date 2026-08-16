import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[#f1f4f8] text-[#506690]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <a href="#" className="flex items-center gap-2 mb-3">
              <img
                src="/assets/img/logo.png"
                alt="Cloud Dune"
                className="h-8 w-auto object-contain"
              />
              <span className="text-[20px] font-bold text-[#1b2a4e] tracking-tight font-sans">
                Cloud Dune
              </span>
            </a>

            <p className="text-[#506690] mb-2 font-normal text-[16px]">
              Cloud & AI experts.
            </p>
            <p className="text-[#506690] mb-[2px] text-[15px] font-normal">
              <a href="tel:+18135206937" className="hover:text-[#335eea] transition-colors">
                +1 813-520-6937
              </a>
            </p>
            <p className="text-[15px] font-normal">
              <a href="mailto:info@clouddune.com" className="text-[#506690] hover:text-[#335eea] transition-colors">
                info@clouddune.com
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
                <a href="tel:+18135206937" className="hover:text-[#335eea] transition-colors">
                  +1 813-520-6937
                </a>
              </li>
              <li>
                <a href="mailto:info@clouddune.com" className="hover:text-[#335eea] transition-colors">
                  info@clouddune.com
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom Credit & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#e3e8f0] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#869ab8]">
          <p>© {new Date().getFullYear()} Cloud Dune. All rights reserved.</p>
          <p className="font-medium">
            Designed &amp; Developed by{' '}
            <a
              href="https://www.vikrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#335eea] hover:underline font-semibold"
            >
              Vikrin Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}



