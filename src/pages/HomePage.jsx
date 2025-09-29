import React from 'react';
import Header from '../components/ui/Header';
import HeroSection from './homepage/components/HeroSection';
import FeatureGrid from './homepage/components/FeatureGrid';
import GlobalFootprint from './homepage/components/GlobalFootprint';
import InnovationPipeline from './homepage/components/InnovationPipeline';
import SuccessStories from './homepage/components/SuccessStories';
import ContactCTA from './homepage/components/ContactCTA';
import Footer from '../components/Footer';

const HomePage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-16">
      <HeroSection />
      <FeatureGrid />
    </main>
    <Footer />
  </div>
);

export default HomePage;
