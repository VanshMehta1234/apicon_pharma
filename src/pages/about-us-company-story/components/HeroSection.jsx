import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/20 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 scientific-grid opacity-30"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-conversion/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="Building2" size={20} />
                <span className="text-sm font-medium uppercase tracking-wide">Our Story</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Pioneering the Future of 
                <span className="text-gradient block mt-2">Oncology APIs</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the belief that every molecule matters in the fight against cancer, Apicon Pharma has been transforming pharmaceutical manufacturing through precision chemistry and unwavering commitment to quality since our inception.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-conversion">50M+</div>
                <div className="text-sm text-muted-foreground">Patients Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">200+</div>
                <div className="text-sm text-muted-foreground">API Products</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-conversion px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
                <Icon name="Download" size={18} />
                <span>Company Profile</span>
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-accent transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="Play" size={18} />
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop"
                alt="Modern pharmaceutical laboratory with advanced equipment"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} />
                  <div>
                    <div className="text-sm font-medium">FDA Approved</div>
                    <div className="text-xs opacity-80">Since 2015</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={20} />
                  <div>
                    <div className="text-sm font-medium">Global Reach</div>
                    <div className="text-xs opacity-80">45+ Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;