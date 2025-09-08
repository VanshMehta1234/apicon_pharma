import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { value: "47+", label: "Cancer Treatments Worldwide", icon: "Activity" },
    { value: "2019", label: "Manufacturing Excellence Since", icon: "Award" },
    { value: "150+", label: "Pharmaceutical Partners", icon: "Users" },
    { value: "99.8%", label: "Quality Compliance Rate", icon: "Shield" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Molecular Background Animation */}
      <div className="absolute inset-0 molecular-structure">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full molecular-animation"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-conversion/20 rounded-full molecular-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-trust/20 rounded-full molecular-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-primary/20 rounded-full molecular-animation" style={{ animationDelay: '6s' }}></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <div className="text-center lg:text-left fade-in-up">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Icon name="Zap" size={16} className="mr-2" />
                  Precision Molecules for Life
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Precision Molecules for{' '}
                <span className="text-gradient">Life-Saving</span>{' '}
                Treatments
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Leading global supplier of oncology APIs, bridging cutting-edge chemistry with compassionate care. Every molecule matters in the fight against cancer.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link to="/products-api-catalog">
                  <Button 
                    variant="default" 
                    size="lg"
                    iconName="Package"
                    iconPosition="left"
                    className="btn-conversion w-full sm:w-auto"
                  >
                    Explore Our API Portfolio
                  </Button>
                </Link>
                <Link to="/partnership-contact">
                  <Button 
                    variant="outline" 
                    size="lg"
                    iconName="Handshake"
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    Request Partnership Consultation
                  </Button>
                </Link>
              </div>

              {/* Real-time Impact Counter */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={metrics?.[currentMetric]?.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground animate-counter">
                        {metrics?.[currentMetric]?.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metrics?.[currentMetric]?.label}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {metrics?.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentMetric ? 'bg-primary' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Molecular Visualization */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central Molecule */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-conversion/20 rounded-full blur-3xl"></div>
                  <div className="relative w-full h-full border-2 border-primary/30 rounded-full molecular-animation flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-primary">
                        <circle cx="32" cy="16" r="4" fill="currentColor" />
                        <circle cx="16" cy="32" r="4" fill="currentColor" />
                        <circle cx="48" cy="32" r="4" fill="currentColor" />
                        <circle cx="32" cy="48" r="4" fill="currentColor" />
                        <circle cx="32" cy="32" r="6" fill="currentColor" />
                        <path d="M32 20v8m-12-4h8m8 0h8m-12 8v8" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-conversion/10 rounded-full flex items-center justify-center molecular-animation" style={{ animationDelay: '1s' }}>
                  <Icon name="Atom" size={24} className="text-conversion" />
                </div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center molecular-animation" style={{ animationDelay: '3s' }}>
                  <Icon name="Zap" size={24} className="text-trust" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center molecular-animation" style={{ animationDelay: '5s' }}>
                  <Icon name="Activity" size={20} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Discover More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;