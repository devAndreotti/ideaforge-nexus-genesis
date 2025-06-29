
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import CreativeBrainstormForm from '@/components/CreativeBrainstormForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesShowcase />
      <div id="brainstorm-form" className="py-16">
        <CreativeBrainstormForm />
      </div>
    </div>
  );
};

export default Index;
