
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactCTA from '@/components/sections/ContactCTA';
import ConsultationDialog from '@/components/dialogs/ConsultationDialog';

const Index = () => {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);

  useEffect(() => {
    // Show the consultation dialog after a short delay when the page loads
    const timer = setTimeout(() => {
      setShowWelcomeDialog(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactCTA />
      
      <ConsultationDialog 
        open={showWelcomeDialog} 
        onOpenChange={setShowWelcomeDialog} 
      />
    </div>
  );
};

export default Index;
