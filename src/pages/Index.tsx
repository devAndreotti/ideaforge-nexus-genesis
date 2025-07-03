
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import CreativeBrainstormForm from '@/components/CreativeBrainstormForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesShowcase />
      <div id="brainstorm-form" className="py-16 relative overflow-hidden">
        {/* Enhanced animated background elements for form section */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large glowing floating circles */}
          <div className="floating-element floating-circle-glow w-36 h-36 top-10 left-12 animate-float-glow opacity-25" style={{animationDelay: '0s'}}></div>
          <div className="floating-element floating-circle-glow w-28 h-28 top-1/3 right-16 animate-float-glow opacity-30" style={{animationDelay: '2s'}}></div>
          <div className="floating-element floating-circle-glow w-32 h-32 bottom-1/4 left-1/5 animate-float-glow opacity-28" style={{animationDelay: '4s'}}></div>
          <div className="floating-element floating-circle-glow w-24 h-24 bottom-16 right-20 animate-float-glow opacity-32" style={{animationDelay: '6s'}}></div>
          <div className="floating-element floating-circle-glow w-40 h-40 top-2/3 right-1/3 animate-float-glow opacity-22" style={{animationDelay: '8s'}}></div>
          
          {/* Regular floating circles */}
          <div className="floating-element floating-circle w-28 h-28 top-20 left-20 animate-float-slow opacity-25" style={{animationDelay: '1s'}}></div>
          <div className="floating-element floating-circle w-20 h-20 top-40 right-28 animate-float-slow opacity-30" style={{animationDelay: '3s'}}></div>
          <div className="floating-element floating-circle w-16 h-16 bottom-32 left-24 animate-float-slow opacity-28" style={{animationDelay: '5s'}}></div>
          <div className="floating-element floating-circle w-24 h-24 bottom-20 right-32 animate-float-slow opacity-26" style={{animationDelay: '7s'}}></div>
          <div className="floating-element floating-circle w-32 h-32 top-1/2 left-1/6 animate-float-slow opacity-22" style={{animationDelay: '9s'}}></div>
          
          {/* Floating squares */}
          <div className="floating-element floating-square w-12 h-12 top-1/4 left-1/3 animate-float-medium opacity-28" style={{animationDelay: '1s'}}></div>
          <div className="floating-element floating-square w-16 h-16 top-1/2 right-1/4 animate-float-medium opacity-25" style={{animationDelay: '3s'}}></div>
          <div className="floating-element floating-square w-8 h-8 bottom-1/3 left-1/4 animate-float-medium opacity-32" style={{animationDelay: '5s'}}></div>
          <div className="floating-element floating-square w-14 h-14 top-1/6 right-1/3 animate-float-medium opacity-30" style={{animationDelay: '7s'}}></div>
          <div className="floating-element floating-square w-10 h-10 bottom-1/5 right-1/5 animate-float-medium opacity-26" style={{animationDelay: '9s'}}></div>
          
          {/* Floating diamonds */}
          <div className="floating-element floating-diamond top-1/5 left-1/3 animate-float-diamond opacity-30" style={{animationDelay: '1.5s'}}></div>
          <div className="floating-element floating-diamond bottom-1/3 right-1/4 animate-float-diamond opacity-28" style={{animationDelay: '3.5s'}}></div>
          <div className="floating-element floating-diamond top-2/3 left-1/5 animate-float-diamond opacity-25" style={{animationDelay: '5.5s'}}></div>
          <div className="floating-element floating-diamond bottom-1/5 left-1/2 animate-float-diamond opacity-32" style={{animationDelay: '7.5s'}}></div>
          
          {/* Floating triangles */}
          <div className="floating-element top-1/4 right-1/5 animate-float-fast opacity-28" style={{animationDelay: '0.5s'}}>
            <div className="floating-triangle"></div>
          </div>
          <div className="floating-element bottom-1/4 left-1/3 animate-float-fast opacity-25" style={{animationDelay: '2.5s'}}>
            <div className="floating-triangle"></div>
          </div>
          <div className="floating-element top-1/2 left-1/5 animate-float-fast opacity-30" style={{animationDelay: '4.5s'}}>
            <div className="floating-triangle"></div>
          </div>
          <div className="floating-element bottom-1/3 right-1/3 animate-float-fast opacity-26" style={{animationDelay: '6.5s'}}>
            <div className="floating-triangle"></div>
          </div>
          
          {/* Drifting particles - more variety */}
          <div className="absolute top-16 right-20 w-3 h-3 bg-red-400 rounded-full opacity-45 animate-drift shadow-lg shadow-red-400/50" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-2/3 left-16 w-4 h-4 bg-red-300 rounded-full opacity-40 animate-drift shadow-lg shadow-red-300/40" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-drift shadow-lg shadow-white/60" style={{animationDelay: '5s'}}></div>
          <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-red-500 rounded-full opacity-50 animate-drift shadow-lg shadow-red-500/50" style={{animationDelay: '7s'}}></div>
          <div className="absolute bottom-1/2 right-1/6 w-2 h-2 bg-red-200 rounded-full opacity-55 animate-drift shadow-lg shadow-red-200/40" style={{animationDelay: '9s'}}></div>
          <div className="absolute top-1/5 right-1/2 w-4 h-4 bg-red-600 rounded-full opacity-35 animate-drift shadow-lg shadow-red-600/60" style={{animationDelay: '11s'}}></div>
          <div className="absolute bottom-1/6 left-1/4 w-3 h-3 bg-white rounded-full opacity-50 animate-drift shadow-lg shadow-white/50" style={{animationDelay: '13s'}}></div>
          
          {/* Static pulsing dots - enhanced with more variety */}
          <div className="absolute top-20 left-32 w-3 h-3 bg-red-500 rounded-full animate-pulse opacity-45 shadow-lg shadow-red-500/60"></div>
          <div className="absolute top-40 right-24 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-50 shadow-md shadow-red-400/50"></div>
          <div className="absolute bottom-32 left-20 w-4 h-4 bg-red-600 rounded-full animate-pulse opacity-40 shadow-lg shadow-red-600/70"></div>
          <div className="absolute bottom-16 right-28 w-3 h-3 bg-red-500 rounded-full animate-pulse opacity-55 shadow-lg shadow-red-500/50"></div>
          <div className="absolute top-1/2 left-12 w-2 h-2 bg-white rounded-full animate-pulse opacity-60 shadow-md shadow-white/60"></div>
          <div className="absolute top-1/3 right-16 w-3 h-3 bg-red-400 rounded-full animate-pulse opacity-48 shadow-lg shadow-red-400/50"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-red-300 rounded-full animate-pulse opacity-52 shadow-md shadow-red-300/40"></div>
          <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse opacity-45 shadow-lg shadow-white/50"></div>
          <div className="absolute bottom-1/5 left-1/3 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-58 shadow-md shadow-red-500/50"></div>
          <div className="absolute top-1/6 right-1/5 w-4 h-4 bg-red-200 rounded-full animate-pulse opacity-42 shadow-lg shadow-red-200/40"></div>
        </div>
        
        <CreativeBrainstormForm />
      </div>
    </div>
  );
};

export default Index;
