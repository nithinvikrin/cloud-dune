import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 bg-[#F5F7F8] text-[#506690] border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <img
                src="/assets/img/logo.png"
                alt="Cloud Dune"
                className="h-8 md:h-9 w-auto object-contain"
              />
              <span className="text-[21px] font-bold text-[#172B55] tracking-tight font-sans">
                Cloud Dune
              </span>
            </a>

            <p className="text-[#506690] mb-2 font-normal text-[15.5px]">
              Cloud &amp; AI experts.
            </p>
            <p className="text-[#506690] mb-[2px] text-[15px] font-normal">
              <a href="tel:+18135206937" className="hover:text-[#2563EB] transition-colors">
                +1 813-520-6937
              </a>
            </p>
            <p className="text-[15px] font-normal">
              <a href="mailto:info@clouddune.com" className="text-[#506690] hover:text-[#2563EB] transition-colors">
                info@clouddune.com
              </a>
            </p>
          </div>

          {/* Services Column */}
          <div className="col-span-6 md:col-span-4 lg:col-span-4">
            <h6 className="font-bold text-[12px] uppercase text-[#172B55] tracking-wider mb-4">
              Services
            </h6>
            <ul className="space-y-2.5 text-[15px] text-[#506690] font-normal">
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Cloud Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  AI &amp; Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  Data Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2563EB] transition-colors">
                  DevOps &amp; IaC
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-span-6 md:col-span-4 lg:col-span-4">
            <h6 className="font-bold text-[12px] uppercase text-[#172B55] tracking-wider mb-4">
              Connect
            </h6>
            <ul className="space-y-2.5 text-[15px] text-[#506690] font-normal">
              <li>
                <a href="tel:+18135206937" className="hover:text-[#2563EB] transition-colors">
                  +1 813-520-6937
                </a>
              </li>
              <li>
                <a href="mailto:info@clouddune.com" className="hover:text-[#2563EB] transition-colors">
                  info@clouddune.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credit & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#506690]">
          <p>© {new Date().getFullYear()} Cloud Dune. All rights reserved.</p>
          <p className="font-medium">
            Designed &amp; Developed by{' '}
            <a
              href="https://www.vikrin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline font-semibold"
            >
              Vikrin Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
