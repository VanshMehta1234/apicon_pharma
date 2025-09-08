import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      title: "Accelerated Rare Cancer Treatment Access",
      category: "Orphan Drug Development",
      description: "Partnership with leading pharmaceutical company to develop APIs for rare pediatric cancer treatment, reducing development timeline by 18 months.",
      impact: {
        patients: "2,500+",
        timeline: "18 months faster",
        markets: "25 countries",
        costReduction: "35%"
      },
      challenges: [
        "Complex molecular structure requiring specialized synthesis",
        "Stringent pediatric safety requirements",
        "Limited commercial viability due to small patient population",
        "Accelerated regulatory pathway compliance"
      ],
      solutions: [
        "Developed innovative synthesis route reducing complexity by 40%",
        "Implemented enhanced quality controls for pediatric formulations",
        "Created flexible manufacturing model for small-batch production",
        "Provided comprehensive regulatory support package"
      ],
      outcomes: [
        "Treatment now available in 25+ countries",
        "Manufacturing cost reduced by 35%",
        "Regulatory approval achieved 18 months ahead of schedule",
        "Established sustainable supply chain for ongoing production"
      ],
      icon: "Heart",
      color: "trust"
    },
    {
      id: 2,
      title: "Global Supply Chain Resilience",
      category: "Critical API Manufacturing",
      description: "Established redundant manufacturing capabilities for essential oncology APIs, ensuring uninterrupted supply during global disruptions.",
      impact: {
        patients: "50,000+",
        timeline: "Zero disruption",
        markets: "65 countries",
        costReduction: "20%"
      },
      challenges: [
        "Single-source dependency creating supply risk",
        "Regulatory harmonization across multiple regions",
        "Quality consistency across different manufacturing sites",
        "Cost optimization while maintaining redundancy"
      ],
      solutions: [
        "Established dual-site manufacturing with identical processes",
        "Implemented real-time quality monitoring systems",
        "Created unified regulatory documentation package",
        "Optimized logistics network for efficient distribution"
      ],
      outcomes: [
        "100% supply reliability maintained during global disruptions",
        "Reduced overall supply chain costs by 20%",
        "Expanded market access to 65+ countries",
        "Enhanced pharmaceutical partner confidence and loyalty"
      ],
      icon: "Shield",
      color: "primary"
    },
    {
      id: 3,
      title: "Breakthrough Immunotherapy Enablement",
      category: "Next-Gen Cancer Treatment",
      description: "Collaborative development of complex conjugate APIs enabling revolutionary immunotherapy treatments with improved patient outcomes.",
      impact: {
        patients: "15,000+",
        timeline: "24 months faster",
        markets: "40 countries",
        costReduction: "45%"
      },
      challenges: [
        "Novel conjugation chemistry requiring specialized expertise",
        "Maintaining stability of complex molecular structures",
        "Scaling from research quantities to commercial production",
        "Meeting stringent purity requirements for immunotherapy"
      ],
      solutions: [
        "Developed proprietary conjugation platform technology",
        "Created controlled-environment manufacturing processes",
        "Implemented advanced analytical methods for quality control",
        "Established scalable production methodology"
      ],
      outcomes: [
        "Enabled treatment for 15,000+ cancer patients globally",
        "Achieved 95%+ purity standards consistently",
        "Reduced manufacturing timeline by 24 months",
        "Created platform for future immunotherapy developments"
      ],
      icon: "Zap",
      color: "conversion"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      trust: {
        bg: "bg-trust/10",
        text: "text-trust",
        border: "border-trust/20",
        gradient: "from-trust/5 to-trust/10"
      },
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        gradient: "from-primary/5 to-primary/10"
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

  const currentStory = successStories?.[activeStory];
  const colors = getColorClasses(currentStory?.color);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-trust/10 text-trust text-sm font-medium mb-4">
              <Icon name="Award" size={16} className="mr-2" />
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transforming Cancer Care Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real partnerships, real impact. Discover how our collaborative approach has accelerated breakthrough treatments and improved patient outcomes worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Story Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {successStories?.map((story, index) => {
                  const storyColors = getColorClasses(story?.color);
                  return (
                    <button
                      key={story?.id}
                      onClick={() => setActiveStory(index)}
                      className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                        activeStory === index
                          ? `${storyColors?.border} bg-gradient-to-r ${storyColors?.gradient} shadow-lg`
                          : 'border-border bg-card hover:bg-muted/30'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 ${storyColors?.bg} rounded-lg flex items-center justify-center`}>
                          <Icon name={story?.icon} size={20} className={storyColors?.text} />
                        </div>
                        <div className="flex-1">
                          <div className={`text-xs font-medium mb-1 ${storyColors?.text}`}>
                            {story?.category}
                          </div>
                          <h3 className="font-semibold text-foreground text-sm mb-2">
                            {story?.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {story?.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Story Details */}
            <div className="lg:col-span-2">
              <div className={`bg-gradient-to-br ${colors?.gradient} border ${colors?.border} rounded-2xl p-8 shadow-lg`}>
                {/* Story Header */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className={`w-16 h-16 ${colors?.bg} rounded-xl flex items-center justify-center`}>
                    <Icon name={currentStory?.icon} size={32} className={colors?.text} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm font-medium mb-2 ${colors?.text}`}>
                      {currentStory?.category}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {currentStory?.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {currentStory?.description}
                    </p>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-card/50 rounded-lg">
                    <div className={`text-2xl font-bold mb-1 ${colors?.text}`}>
                      {currentStory?.impact?.patients}
                    </div>
                    <div className="text-xs text-muted-foreground">Patients Impacted</div>
                  </div>
                  <div className="text-center p-4 bg-card/50 rounded-lg">
                    <div className={`text-2xl font-bold mb-1 ${colors?.text}`}>
                      {currentStory?.impact?.timeline}
                    </div>
                    <div className="text-xs text-muted-foreground">Timeline Improvement</div>
                  </div>
                  <div className="text-center p-4 bg-card/50 rounded-lg">
                    <div className={`text-2xl font-bold mb-1 ${colors?.text}`}>
                      {currentStory?.impact?.markets}
                    </div>
                    <div className="text-xs text-muted-foreground">Markets Served</div>
                  </div>
                  <div className="text-center p-4 bg-card/50 rounded-lg">
                    <div className={`text-2xl font-bold mb-1 ${colors?.text}`}>
                      {currentStory?.impact?.costReduction}
                    </div>
                    <div className="text-xs text-muted-foreground">Cost Reduction</div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="AlertCircle" size={16} className="mr-2 text-destructive" />
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {currentStory?.challenges?.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1 h-1 bg-destructive rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="Lightbulb" size={16} className="mr-2 text-warning" />
                      Solutions
                    </h4>
                    <ul className="space-y-2">
                      {currentStory?.solutions?.map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1 h-1 bg-warning rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="CheckCircle" size={16} className={`mr-2 ${colors?.text}`} />
                      Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {currentStory?.outcomes?.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className={`w-1 h-1 rounded-full mt-2 mr-2 flex-shrink-0 ${colors?.text?.replace('text-', 'bg-')}`}></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="FileText"
                      iconPosition="left"
                    >
                      Download Case Study
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Discuss Similar Partnership
                    </Button>
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

export default SuccessStories;