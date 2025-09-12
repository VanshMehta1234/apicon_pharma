import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/ui/Header';
import Footer from '../components/Footer';

// Import sections from existing pages
import HeroSection from './homepage/components/HeroSection';
import FeatureGrid from './homepage/components/FeatureGrid';
import ProductsSection from './homepage/components/ProductsSection';
import AboutUsSection from './homepage/components/AboutUsSection';
import ContactFormSection from './homepage/components/ContactFormSection';

const SinglePageApp = () => {
  return (
    <>
      <Helmet>
        <title>Apicon Pharma - Precision Molecules for Life-Saving Treatments | Oncology API Supplier</title>
        <meta name="description" content="Leading global supplier of oncology APIs, bridging cutting-edge chemistry with compassionate care. Explore our API portfolio, learn about our company, and partner with us for breakthrough treatments." />
        <meta name="keywords" content="oncology APIs, pharmaceutical APIs, precision molecules, API portfolio, pharmaceutical partnerships, Apicon Pharma, cancer treatment APIs" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Home Section */}
          <section id="home">
            <HeroSection />
            <FeatureGrid />
          </section>

          {/* Products Section */}
          <ProductsSection />

          {/* About Us Section */}
          <AboutUsSection />

          {/* Contact Form Section */}
          <ContactFormSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default SinglePageApp;