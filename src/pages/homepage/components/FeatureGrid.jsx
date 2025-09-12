import React from 'react';
import Icon from '../../../components/AppIcon';

const FeatureGrid = () => {
  const features = [
    {
      id: 1,
      title: "Scientific Excellence",
      description: "Advanced R&D capabilities with state-of-the-art synthesis pathways and molecular innovation for breakthrough oncology treatments.",
      icon: "Microscope",
      color: "primary",
      stats: [
        { label: "Research Projects", value: "25+" },
        { label: "Patents Filed", value: "150+" },
        { label: "Publications", value: "200+" }
      ]
    },
    {
      id: 2,
      title: "Quality Assurance",
      description: "Uncompromising quality standards with comprehensive testing protocols and regulatory compliance across global markets.",
      icon: "Shield",
      color: "trust",
      stats: [
        { label: "Quality Certifications", value: "12+" },
        { label: "Compliance Rate", value: "99.8%" },
        { label: "Audit Success", value: "100%" }
      ]
    },
    {
      id: 3,
      title: "Global Impact",
      description: "Worldwide distribution network ensuring reliable supply chain and accessibility of life-saving cancer treatments.",
      icon: "Globe",
      color: "conversion",
      stats: [
        { label: "Countries Served", value: "85+" },
        { label: "Manufacturing Sites", value: "8" },
        { label: "Supply Reliability", value: "99.9%" }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        gradient: "from-primary/5 to-primary/10"
      },
      trust: {
        bg: "bg-trust/10",
        text: "text-trust",
        border: "border-trust/20",
        gradient: "from-trust/5 to-trust/10"
      },
      conversion: {
        bg: "bg-conversion/10",
        text: "text-conversion",
        border: "border-conversion/20",
        gradient: "from-conversion/5 to-conversion/10"
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-24 bg-background reveal">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20 reveal" style={{ transitionDelay: '100ms' }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 lg:mb-6">
              <Icon name="Award" size={16} className="mr-2" />
              Excellence in Action
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Why Pharmaceutical Leaders <span className="text-gradient">Choose Apicon</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Three pillars of excellence that make us the trusted partner for oncology API development and manufacturing worldwide.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features?.map((feature, index) => {
              const colors = getColorClasses(feature?.color);
              return (
                <div
                  key={feature?.id}
                  className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-2 reveal"
                  style={{ transitionDelay: `${index * 160}ms` }}
                >
                  {/* Icon Container */}
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 ${colors?.bg} rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon name={feature?.icon} size={28} className={`${colors?.text} lg:w-9 lg:h-9`} />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4 lg:space-y-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {feature?.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      {feature?.stats?.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center justify-between">
                          <span className="text-xs lg:text-sm font-medium text-muted-foreground">
                            {stat?.label}
                          </span>
                          <span className={`text-base lg:text-lg font-bold ${colors?.text}`}>
                            {stat?.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-10 h-10 lg:w-12 lg:h-12 ${colors?.bg} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name="CheckCircle" size={16} className={`${colors?.text} lg:w-5 lg:h-5`} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;