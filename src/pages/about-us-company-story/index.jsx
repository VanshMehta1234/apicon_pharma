import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import ValuesSection from './components/ValuesSection';
import GlobalPresenceSection from './components/GlobalPresenceSection';

const AboutUsCompanyStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <TimelineSection />
        <ValuesSection />
        <GlobalPresenceSection />
      </main>
    </div>
  );
};

export default AboutUsCompanyStory;