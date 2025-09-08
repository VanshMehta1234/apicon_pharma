import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ManufacturingSection = () => {
  const [activeTab, setActiveTab] = useState('precision');

  const tabs = [
    {
      id: 'precision',
      label: 'Precision Manufacturing',
      icon: 'Target'
    },
    {
      id: 'sustainability',
      label: 'Sustainability',
      icon: 'Leaf'
    },
    {
      id: 'quality',
      label: 'Quality Systems',
      icon: 'Shield'
    }
  ];

  const tabContent = {
    precision: {
      title: "Precision at Every Molecular Level",
      description: "Our manufacturing philosophy centers on absolute precision—from molecular synthesis to final packaging. Every step is monitored, validated, and optimized for consistency.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      features: [
        {
          icon: "Microscope",
          title: "Advanced Analytics",
          description: "Real-time molecular analysis ensures every batch meets exact specifications"
        },
        {
          icon: "Cpu",
          title: "AI-Driven Quality Control",
          description: "Machine learning algorithms predict and prevent quality deviations"
        },
        {
          icon: "Database",
          title: "Complete Traceability",
          description: "Every molecule tracked from raw material to final product delivery"
        }
      ],
      metrics: [
        { label: "Batch Consistency", value: "99.97%", icon: "TrendingUp" },
        { label: "First-Pass Yield", value: "98.5%", icon: "CheckCircle" },
        { label: "Process Capability", value: "Cpk >2.0", icon: "Target" }
      ]
    },
    sustainability: {
      title: "Responsible Chemistry for Future Generations",
      description: "Environmental stewardship is integral to our manufacturing process. We've developed green chemistry methods that reduce waste, energy consumption, and environmental impact.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      features: [
        {
          icon: "Recycle",
          title: "Green Synthesis Methods",
          description: "Proprietary processes that reduce solvent usage by 60% compared to traditional methods"
        },
        {
          icon: "Zap",
          title: "Renewable Energy",
          description: "75% of our manufacturing facilities powered by renewable energy sources"
        },
        {
          icon: "Droplets",
          title: "Water Conservation",
          description: "Advanced water recycling systems reduce consumption by 40%"
        }
      ],
      metrics: [
        { label: "Carbon Footprint Reduction", value: "45%", icon: "Leaf" },
        { label: "Waste Reduction", value: "60%", icon: "Trash2" },
        { label: "Energy Efficiency", value: "35%", icon: "Zap" }
      ]
    },
    quality: {
      title: "Uncompromising Quality Standards",
      description: "Our quality management system exceeds international standards, ensuring every API meets the highest regulatory requirements across all global markets.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      features: [
        {
          icon: "FileCheck",
          title: "Multi-Tier Testing",
          description: "Comprehensive testing protocols at raw material, in-process, and finished product stages"
        },
        {
          icon: "Users",
          title: "Expert Quality Team",
          description: "Dedicated quality professionals with decades of pharmaceutical experience"
        },
        {
          icon: "Globe",
          title: "Global Compliance",
          description: "Certified for FDA, EMA, WHO, and other major regulatory authorities worldwide"
        }
      ],
      metrics: [
        { label: "Regulatory Compliance", value: "100%", icon: "Shield" },
        { label: "Customer Satisfaction", value: "99.2%", icon: "Heart" },
        { label: "Audit Success Rate", value: "100%", icon: "Award" }
      ]
    }
  };

  const sustainabilityInitiatives = [
    {
      title: "Carbon Neutral by 2030",
      description: "Comprehensive plan to achieve carbon neutrality across all operations",
      progress: 65,
      icon: "Leaf"
    },
    {
      title: "Zero Waste to Landfill",
      description: "Advanced recycling and waste-to-energy programs",
      progress: 78,
      icon: "Recycle"
    },
    {
      title: "Sustainable Packaging",
      description: "Biodegradable and recyclable packaging materials",
      progress: 85,
      icon: "Package"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Factory" size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Manufacturing Excellence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Where Precision Meets
            <span className="text-gradient block mt-2">Sustainability</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our manufacturing philosophy balances absolute precision with environmental responsibility, ensuring every API is produced to the highest standards while minimizing our ecological footprint.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-accent'
              }`}
            >
              <Icon name={tab?.icon} size={20} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {tabContent?.[activeTab]?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tabContent?.[activeTab]?.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {tabContent?.[activeTab]?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon name={feature?.icon} size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature?.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature?.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {tabContent?.[activeTab]?.metrics?.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Icon name={metric?.icon} size={20} className="text-primary" />
                    </div>
                    <div className="text-xl font-bold text-foreground">{metric?.value}</div>
                    <div className="text-xs text-muted-foreground">{metric?.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src={tabContent?.[activeTab]?.image}
                alt={tabContent?.[activeTab]?.title}
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name={tabs?.find(t => t?.id === activeTab)?.icon} size={16} />
                  <span className="text-sm font-medium">Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Progress */}
        {activeTab === 'sustainability' && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">
              Our Sustainability Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {sustainabilityInitiatives?.map((initiative, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center text-success">
                      <Icon name={initiative?.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{initiative?.title}</h4>
                      <p className="text-sm text-muted-foreground">{initiative?.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-success">{initiative?.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-success h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${initiative?.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">Global Certifications & Standards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "FDA", icon: "Shield" },
              { name: "EMA", icon: "Award" },
              { name: "WHO GMP", icon: "Globe" },
              { name: "ISO 14001", icon: "Leaf" },
              { name: "ISO 9001", icon: "CheckCircle" },
              { name: "ICH Q7", icon: "FileCheck" }
            ]?.map((cert, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name={cert?.icon} size={24} />
                </div>
                <div className="text-sm font-medium text-foreground">{cert?.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;