import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

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
    <section className="relative min-h-[72vh] lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Molecular Background Animation */}
      <div className="absolute inset-0 molecular-structure pointer-events-none">
        <div className="hidden sm:block absolute top-12 left-6 w-24 h-24 border border-primary/20 rounded-full molecular-animation"></div>
        <div className="hidden md:block absolute top-40 right-12 w-20 h-20 border border-conversion/20 rounded-full molecular-animation" style={{ animationDelay: '2s' }}></div>
        <div className="hidden md:block absolute bottom-24 left-1/4 w-16 h-16 border border-trust/20 rounded-full molecular-animation" style={{ animationDelay: '4s' }}></div>
        <div className="hidden lg:block absolute bottom-20 right-24 w-24 h-24 border border-primary/20 rounded-full molecular-animation" style={{ animationDelay: '6s' }}></div>
      </div>
      <div className="w-full px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content Section */}
            <div className="text-center lg:text-left fade-in-up">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Icon name="Zap" size={16} className="mr-2" />
                  Precision Molecules for Life
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                <span className="text-gradient">Precision Molecules</span> for Life-Saving Treatments
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-8 text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Leading global supplier of oncology APIs, bridging cutting-edge chemistry with compassionate care. Every molecule matters in the fight against cancer.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 sm:mb-8">
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 bg-conversion hover:bg-conversion/90 text-conversion-foreground rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto text-sm"
                >
                  <Icon name="Package" size={16} className="mr-2" />
                  Explore Our API Portfolio
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 border border-border hover:bg-accent text-foreground rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto text-sm"
                >
                  <Icon name="Handshake" size={16} className="mr-2" />
                  Request Partnership Consultation
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
                <span className="inline-flex items-center text-xs sm:text-sm text-muted-foreground bg-white/60 border border-border rounded-full px-3 py-1">
                  <Icon name="Shield" size={14} className="text-primary mr-2" /> cGMP Certified
                </span>
                <span className="inline-flex items-center text-xs sm:text-sm text-muted-foreground bg-white/60 border border-border rounded-full px-3 py-1">
                  <Icon name="Award" size={14} className="text-primary mr-2" /> FDA/EMA Ready
                </span>
                <span className="inline-flex items-center text-xs sm:text-sm text-muted-foreground bg-white/60 border border-border rounded-full px-3 py-1">
                  <Icon name="Globe" size={14} className="text-primary mr-2" /> Global Supply
                </span>
              </div>

              {/* Real-time Impact Counter */}
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={metrics?.[currentMetric]?.icon} size={22} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-foreground animate-counter">
                        {metrics?.[currentMetric]?.value}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {metrics?.[currentMetric]?.label}
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex space-x-1">
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

            {/* Lab Image */}
            <div className="relative mt-6 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <div className="relative bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border">
                  <img
                    src="/assets/images/lab-image.avif"
                    alt="Modern pharmaceutical laboratory with precision equipment"
                    className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                  />
                  
                  {/* Floating Quality Badge */}
                  <div className="hidden sm:block absolute -top-4 -left-4 bg-primary text-primary-foreground p-3 sm:p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" size={18} />
                      <div>
                        <div className="text-xs sm:text-sm font-medium">99.8%</div>
                        <div className="text-[10px] sm:text-xs opacity-80">Quality Rate</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Innovation Badge */}
                  <div className="hidden sm:block absolute -bottom-4 -right-4 bg-conversion text-conversion-foreground p-3 sm:p-4 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" size={18} />
                      <div>
                        <div className="text-xs sm:text-sm font-medium">Innovation</div>
                        <div className="text-[10px] sm:text-xs opacity-80">R&D Excellence</div>
                      </div>
                    </div>
                  </div>
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