import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WaveDivider from './components/WaveDivider';
import DemoModal from './components/DemoModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenDemoModal = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased selection:bg-primary/20 selection:text-primary">
      {/* 1. Navbar */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 3. Features Grid */}
        <Features />

        {/* 4. Process Section (How We Work) */}
        <Process />

        {/* Wave Divider to Services (bg-light / #f9fbfd) */}
        <WaveDivider color="text-brandGray-100" />

        {/* 5. Services Section (What We Do) */}
        <Services onSelectService={handleSelectService} />

        {/* Wave Divider to Contact CTA (bg-dark / #1b2a4e) */}
        <WaveDivider color="text-dark" />

        {/* 6. Contact / CTA Section */}
        <ContactCTA onOpenDemoModal={handleOpenDemoModal} />

        {/* Wave Divider to Footer (bg-gray-200 / #f1f4f8) */}
        <WaveDivider color="text-brandGray-200" />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* 8. Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}

