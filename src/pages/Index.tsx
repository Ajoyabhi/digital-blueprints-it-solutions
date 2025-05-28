
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactCTA from '@/components/sections/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
};

export default Index;
