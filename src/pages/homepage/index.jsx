import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import GlobalFootprint from './components/GlobalFootprint';
import InnovationPipeline from './components/InnovationPipeline';
import SuccessStories from './components/SuccessStories';
import ContactCTA from './components/ContactCTA';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Apicon Pharma - Precision Molecules for Life-Saving Treatments | Oncology API Supplier</title>
        <meta 
          name="description" 
          content="Leading global supplier of oncology APIs, bridging cutting-edge chemistry with compassionate care. Discover precision molecules for breakthrough cancer treatments with FDA, EMA, and ICH certifications." 
        />
        <meta 
          name="keywords" 
          content="oncology APIs, pharmaceutical APIs, cancer treatment, drug development, pharmaceutical manufacturing, FDA approved, EMA certified, ICH compliant, precision molecules, pharmaceutical partnerships" 
        />
        <meta property="og:title" content="Apicon Pharma - Precision Molecules for Life-Saving Treatments" />
        <meta 
          property="og:description" 
          content="Leading global supplier of oncology APIs with advanced R&D capabilities and worldwide regulatory compliance. Partner with us for breakthrough cancer treatments." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://apiconpharma.com/homepage" />
        <link rel="canonical" href="https://apiconpharma.com/homepage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section with Molecular Visualization */}
          <HeroSection />
          
          {/* Three-Column Feature Grid */}
          <FeatureGrid />
          
          {/* Interactive World Map & Global Footprint */}
          <GlobalFootprint />
          
          {/* Innovation Pipeline with Expandable Cards */}
          <InnovationPipeline />
          
          {/* Customer Success Stories */}
          <SuccessStories />
          
          {/* Contact CTA Section */}
          <ContactCTA />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border">
          <div className="container mx-auto px-6 lg:px-8 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                        <circle cx="12" cy="5" r="2" fill="currentColor" />
                        <circle cx="6" cy="12" r="2" fill="currentColor" />
                        <circle cx="18" cy="12" r="2" fill="currentColor" />
                        <circle cx="12" cy="19" r="2" fill="currentColor" />
                        <path d="M12 7v4m-4.5-1.5L12 11m0 0l4.5-1.5M12 11v6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Apicon Pharma</h3>
                      <p className="text-sm text-muted-foreground">Precision Molecules for Life</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Leading global supplier of oncology APIs, bridging cutting-edge chemistry with compassionate care in the fight against cancer.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>FDA Approved</span>
                    <span>•</span>
                    <span>EMA Certified</span>
                    <span>•</span>
                    <span>ICH Compliant</span>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="/products-api-catalog" className="hover:text-primary transition-colors">API Catalog</a></li>
                    <li><a href="/about-us-company-story" className="hover:text-primary transition-colors">About Us</a></li>
                    <li><a href="/partnership-contact" className="hover:text-primary transition-colors">Partnership</a></li>
                    <li><a href="/quality" className="hover:text-primary transition-colors">Quality Assurance</a></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>partnership@apiconpharma.com</li>
                    <li>+1 (555) 123-4567</li>
                    <li>Global Headquarters</li>
                    <li>Available 24/7</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  © {new Date()?.getFullYear()} Apicon Pharma. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
                  <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
                  <a href="/compliance" className="hover:text-primary transition-colors">Compliance</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;