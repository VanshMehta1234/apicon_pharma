import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FutureVisionSection = () => {
  const visionPillars = [
    {
      title: "Personalized Medicine APIs",
      icon: "Dna",
      description: "Developing next-generation APIs for personalized cancer treatments tailored to individual genetic profiles.",
      timeline: "2025-2027",
      initiatives: [
        "Biomarker-specific API development",
        "Precision dosing formulations",
        "Companion diagnostic partnerships"
      ],
      impact: "Enable treatments customized to patient genetics",
      color: "primary"
    },
    {
      title: "AI-Driven Drug Discovery",
      icon: "Brain",
      description: "Leveraging artificial intelligence to accelerate the discovery and development of breakthrough oncology APIs.",
      timeline: "2024-2026",
      initiatives: [
        "Machine learning synthesis prediction",
        "Automated compound optimization",
        "Virtual clinical trial modeling"
      ],
      impact: "Reduce development time by 50%",
      color: "conversion"
    },
    {
      title: "Global Accessibility Initiative",
      icon: "Globe",
      description: "Expanding manufacturing capabilities to ensure cancer treatments reach underserved populations worldwide.",
      timeline: "2024-2030",
      initiatives: [
        "Regional manufacturing hubs",
        "Tiered pricing strategies",
        "Local partnership programs"
      ],
      impact: "Double patient accessibility in developing markets",
      color: "success"
    },
    {
      title: "Sustainable Manufacturing 2.0",
      icon: "Leaf",
      description: "Achieving carbon neutrality while pioneering circular economy principles in pharmaceutical manufacturing.",
      timeline: "2025-2030",
      initiatives: [
        "Zero-waste manufacturing processes",
        "Renewable energy transition",
        "Biodegradable packaging solutions"
      ],
      impact: "Carbon neutral operations by 2030",
      color: "trust"
    }
  ];

  const futureMetrics = [
    {
      metric: "100M+",
      label: "Patients Reached",
      description: "By 2030",
      icon: "Users"
    },
    {
      metric: "500+",
      label: "API Products",
      description: "In development",
      icon: "Package"
    },
    {
      metric: "75+",
      label: "Countries Served",
      description: "Global expansion",
      icon: "MapPin"
    },
    {
      metric: "Zero",
      label: "Carbon Footprint",
      description: "By 2030",
      icon: "Leaf"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        accent: "bg-primary"
      },
      conversion: {
        bg: "bg-conversion/10",
        text: "text-conversion",
        accent: "bg-conversion"
      },
      success: {
        bg: "bg-success/10",
        text: "text-success",
        accent: "bg-success"
      },
      trust: {
        bg: "bg-trust/10",
        text: "text-trust",
        accent: "bg-trust"
      }
    };
    return colors?.[color];
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Telescope" size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Future Vision</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shaping the Future of
            <span className="text-gradient block mt-2">Cancer Treatment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our vision extends beyond today's challenges to tomorrow's possibilities. We're pioneering the next generation of oncology APIs that will transform how cancer is treated, making personalized, effective therapies accessible to every patient worldwide.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {visionPillars?.map((pillar, index) => {
            const colors = getColorClasses(pillar?.color);
            
            return (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl ${colors?.bg} flex items-center justify-center ${colors?.text}`}>
                    <Icon name={pillar?.icon} size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{pillar?.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{pillar?.timeline}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{pillar?.description}</p>
                  </div>
                </div>
                {/* Initiatives */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Initiatives</h4>
                  <div className="space-y-2">
                    {pillar?.initiatives?.map((initiative, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="ArrowRight" size={14} className={colors?.text} />
                        <span className="text-sm text-muted-foreground">{initiative}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Impact */}
                <div className={`${colors?.bg} rounded-lg p-4`}>
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" size={16} className={colors?.text} />
                    <span className="text-sm font-medium text-foreground">Expected Impact</span>
                  </div>
                  <p className={`text-sm ${colors?.text} mt-1`}>{pillar?.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Metrics */}
        <div className="bg-gradient-to-r from-primary/5 via-conversion/5 to-success/5 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our 2030 Vision</h3>
            <p className="text-muted-foreground">Ambitious goals that will transform global cancer care accessibility and outcomes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureMetrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name={metric?.icon} size={32} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{metric?.metric}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{metric?.label}</div>
                <div className="text-sm text-muted-foreground">{metric?.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Pipeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Innovation Pipeline</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the breakthrough technologies and treatments currently in development at our research facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Research Phase",
                title: "Next-Gen Immunotherapy APIs",
                description: "Novel compounds that enhance immune system response to cancer cells",
                progress: 35,
                timeline: "2025-2026",
                icon: "Microscope"
              },
              {
                phase: "Development Phase",
                title: "Targeted Therapy Combinations",
                description: "Synergistic API combinations for multi-target cancer treatment",
                progress: 65,
                timeline: "2024-2025",
                icon: "Target"
              },
              {
                phase: "Clinical Phase",
                title: "Pediatric Oncology Formulations",
                description: "Child-friendly API formulations for better treatment compliance",
                progress: 80,
                timeline: "2024",
                icon: "Heart"
              }
            ]?.map((project, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon name={project?.icon} size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary">{project?.phase}</div>
                    <div className="text-xs text-muted-foreground">{project?.timeline}</div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-2">{project?.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{project?.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-primary">{project?.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${project?.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-conversion/10 to-success/10 rounded-2xl p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Join Us in Building the Future
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with us to bring the next generation of cancer treatments to patients worldwide. Together, we can make personalized, effective cancer care accessible to everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Handshake"
                  iconPosition="left"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                >
                  Partner With Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="FileText"
                  iconPosition="left"
                >
                  Innovation Roadmap
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                >
                  Join Our Team
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to discuss how we can collaborate on the future of cancer treatment?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-muted-foreground">partnerships@apiconpharma.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
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

export default FutureVisionSection;