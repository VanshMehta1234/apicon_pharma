import React from 'react';
import Header from '../components/ui/Header';
import AboutUsSection from './homepage/components/AboutUsSection';
import Footer from '../components/Footer';

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-16">
      <AboutUsSection />
    </main>
    <Footer />
  </div>
);

export default AboutPage;
