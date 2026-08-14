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
    <section className="py-12 md:py-24 bg-[#1b2a4e] text-white relative overflow-hidden" id="contact">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] sm:text-[43px] font-bold text-white tracking-tight mb-3 font-sans leading-[1.15]"
          >
            Let's build something together.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[17px] sm:text-[19px] text-white/75 font-normal leading-[1.6] mb-8 max-w-xl mx-auto"
          >
            Have an idea you want to move on? We'd love to hear about it. Reach out and let's talk about what's possible.
          </motion.p>

          {/* Direct Phone & Email Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-row items-center justify-center gap-3 mb-10"
          >
            <a
              href="tel:+18135206937"
              className="inline-flex items-center justify-center gap-2 bg-[#335eea] hover:bg-[#294bbb] text-white text-[16px] font-semibold px-5 py-3 rounded-md shadow-bs lift transition-all"
            >
              <Phone className="w-4 h-4" />
              +1 813-520-6937
            </a>

            <a
              href="mailto:info@clouddune.com"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 text-[16px] font-semibold px-5 py-3 rounded-md lift transition-all"
            >
              <Mail className="w-4 h-4" />
              info@clouddune.com
            </a>
          </motion.div>


          {/* Direct Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 text-left max-w-lg mx-auto"
          >
            {submitted ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#42ba96] mx-auto" />
                <h4 className="text-xl font-bold text-white">Message Received</h4>
                <p className="text-slate-300 text-sm">
                  Thank you! We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#16223f] border border-white/20 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#335eea] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#16223f] border border-white/20 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#335eea] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your project or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#16223f] border border-white/20 rounded-md px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#335eea] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#335eea] hover:bg-[#294bbb] text-white font-semibold py-3 px-6 rounded-md shadow-bs lift transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
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


