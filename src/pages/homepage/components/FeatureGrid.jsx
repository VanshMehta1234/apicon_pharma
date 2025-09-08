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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Pharmaceutical Leaders Choose Apicon
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three pillars of excellence that make us the trusted partner for oncology API development and manufacturing worldwide.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features?.map((feature, index) => {
              const colors = getColorClasses(feature?.color);
              return (
                <div
                  key={feature?.id}
                  className={`group relative bg-gradient-to-br ${colors?.gradient} border ${colors?.border} rounded-2xl p-8 card-hover transition-all duration-500`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors?.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={feature?.icon} size={32} className={colors?.text} />
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature?.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {feature?.description}
                  </p>
                  {/* Stats */}
                  <div className="space-y-4">
                    {feature?.stats?.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {stat?.label}
                        </span>
                        <span className={`font-bold ${colors?.text}`}>
                          {stat?.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Decorative Element */}
                  <div className={`absolute top-4 right-4 w-8 h-8 ${colors?.bg} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className={`w-full h-full border-2 ${colors?.border} rounded-full molecular-animation`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-muted-foreground">
              <Icon name="ArrowRight" size={16} />
              <span className="text-sm">Discover our comprehensive capabilities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;