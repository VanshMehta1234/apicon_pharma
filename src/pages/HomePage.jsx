import React from 'react';
import Header from '../components/ui/Header';
import HeroSection from './homepage/components/HeroSection';
import FeatureGrid from './homepage/components/FeatureGrid';
import RotatingBackgroundHero from './homepage/components/RotatingBackgroundHero';
import Footer from '../components/Footer';

const HomePage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-16">
      <RotatingBackgroundHero />
      <HeroSection />
      <FeatureGrid />
    </main>
    <Footer />
  </div>
);

export default HomePage;
