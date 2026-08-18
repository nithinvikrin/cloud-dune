import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@clouddune.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#172B55] text-white relative overflow-hidden" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center me-0">
          
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white tracking-tight mb-3 font-sans leading-[1.12] me-0"
          >
            Let's build something together.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-[16px] sm:text-[18px] text-white/80 font-normal leading-[1.6] mb-8 max-w-xl mx-auto me-0"
          >
            Have an idea you want to move on? We'd love to hear about it. Reach out and let's talk about what's possible.
          </motion.p>

          {/* Direct Phone & Email Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-10 me-0"
          >
            <a
              href="tel:+18135206937"
              className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[15px] sm:text-[16px] font-semibold px-5 sm:px-6 py-3 rounded-xl shadow-md transition-all me-0"
            >
              <Phone className="w-4 h-4 me-0" />
              +1 813-520-6937
            </a>

            <a
              href="mailto:info@clouddune.com"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-[15px] sm:text-[16px] font-semibold px-5 sm:px-6 py-3 rounded-xl transition-all me-0"
            >
              <Mail className="w-4 h-4 me-0" />
              info@clouddune.com
            </a>
          </motion.div>

          {/* Direct Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="bg-white/5 border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-left max-w-lg mx-auto shadow-2xl backdrop-blur-sm me-0"
          >
            {submitted ? (
              <div className="py-6 text-center space-y-2 me-0">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto me-0" />
                <h4 className="text-xl font-bold text-white me-0">Message Received</h4>
                <p className="text-slate-300 text-sm me-0">
                  Thank you! We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 me-0">
                <div className="me-0">
                  <label className="block text-xs font-semibold text-slate-300 mb-1 me-0">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0F172A]/80 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2563EB] transition-colors me-0"
                  />
                </div>

                <div className="me-0">
                  <label className="block text-xs font-semibold text-slate-300 mb-1 me-0">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0F172A]/80 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2563EB] transition-colors me-0"
                  />
                </div>

                <div className="me-0">
                  <label className="block text-xs font-semibold text-slate-300 mb-1 me-0">
                    How can we help?
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your project or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0F172A]/80 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#2563EB] transition-colors me-0"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm me-0"
                >
                  <Send className="w-4 h-4 me-0" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
