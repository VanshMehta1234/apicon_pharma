import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InnovationPipeline = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const pipelineProjects = [
    {
      id: 1,
      title: "Next-Gen Kinase Inhibitor APIs",
      phase: "Phase III Development",
      description: "Advanced synthesis pathways for targeted cancer therapy molecules with improved bioavailability and reduced side effects.",
      targetCancers: ["Lung Cancer", "Breast Cancer", "Melanoma"],
      keyFeatures: [
        "Enhanced molecular stability",
        "Improved patient tolerance",
        "Reduced manufacturing complexity",
        "Cost-effective synthesis route"
      ],
      timeline: "Q2 2025 Commercial Launch",
      icon: "Atom",
      color: "primary",
      synthesisPathway: `Multi-step synthesis involving:\n1. Selective halogenation of aromatic precursors\n2. Palladium-catalyzed cross-coupling reactions\n3. Stereoselective reduction processes\n4. Final purification via crystallization`
    },
    {
      id: 2,
      title: "Immunotherapy Conjugate APIs",
      phase: "Phase II Optimization",
      description: "Revolutionary antibody-drug conjugate APIs enabling precision delivery of cytotoxic agents directly to cancer cells.",
      targetCancers: ["Lymphoma", "Leukemia", "Solid Tumors"],
      keyFeatures: [
        "Site-specific conjugation technology",
        "Stable linker chemistry",
        "Controlled drug-to-antibody ratio",
        "Enhanced therapeutic window"
      ],
      timeline: "Q4 2025 Phase III Entry",
      icon: "Zap",
      color: "conversion",
      synthesisPathway: `Advanced conjugation process:\n1. Antibody modification with reactive handles\n2. Linker-payload synthesis and purification\n3. Controlled conjugation under mild conditions\n4. Comprehensive analytical characterization`
    },
    {
      id: 3,
      title: "Personalized Medicine APIs",
      phase: "Early Development",
      description: "Customizable API platforms for patient-specific cancer treatments based on genetic profiling and tumor characteristics.",
      targetCancers: ["Rare Cancers", "Pediatric Oncology", "Resistant Tumors"],
      keyFeatures: [
        "Modular synthesis platform",
        "Rapid customization capability",
        "Small-batch manufacturing",
        "Regulatory pathway optimization"
      ],
      timeline: "Q1 2026 Phase I Initiation",
      icon: "Users",
      color: "trust",
      synthesisPathway: `Flexible manufacturing approach:\n1. Modular building block library\n2. Automated synthesis protocols\n3. Real-time quality monitoring\n4. Rapid scale-up capabilities`
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
      conversion: {
        bg: "bg-conversion/10",
        text: "text-conversion",
        border: "border-conversion/20",
        gradient: "from-conversion/5 to-conversion/10"
      },
      trust: {
        bg: "bg-trust/10",
        text: "text-trust",
        border: "border-trust/20",
        gradient: "from-trust/5 to-trust/10"
      }
    };
    return colorMap?.[color];
  };

  const toggleExpanded = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Icon name="Beaker" size={16} className="mr-2" />
              Innovation Pipeline
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Breakthrough API Developments
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pioneering the next generation of oncology APIs through advanced chemistry, innovative synthesis pathways, and patient-centered design.
            </p>
          </div>

          {/* Pipeline Cards */}
          <div className="space-y-6">
            {pipelineProjects?.map((project, index) => {
              const colors = getColorClasses(project?.color);
              const isExpanded = expandedCard === project?.id;

              return (
                <div
                  key={project?.id}
                  className={`bg-card border ${colors?.border} rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                    isExpanded ? 'shadow-xl' : 'hover:shadow-lg'
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`w-12 h-12 ${colors?.bg} rounded-xl flex items-center justify-center`}>
                          <Icon name={project?.icon} size={24} className={colors?.text} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                              {project?.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors?.bg} ${colors?.text}`}>
                              {project?.phase}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {project?.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project?.targetCancers?.map((cancer, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                              >
                                {cancer}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Icon name="Calendar" size={16} />
                              <span>{project?.timeline}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(project?.id)}
                        iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                        iconPosition="right"
                      >
                        {isExpanded ? "Less Details" : "View Details"}
                      </Button>
                    </div>
                  </div>
                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className={`border-t ${colors?.border} bg-gradient-to-r ${colors?.gradient}`}>
                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Key Features */}
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-4">
                              Key Features & Benefits
                            </h4>
                            <div className="space-y-3">
                              {project?.keyFeatures?.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                  <div className={`w-6 h-6 ${colors?.bg} rounded-full flex items-center justify-center`}>
                                    <Icon name="Check" size={14} className={colors?.text} />
                                  </div>
                                  <span className="text-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Synthesis Pathway */}
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-4">
                              Synthesis Pathway Overview
                            </h4>
                            <div className="bg-card/50 border border-border rounded-lg p-4">
                              <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
                                {project?.synthesisPathway}
                              </pre>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border">
                          <Button
                            variant="outline"
                            size="sm"
                            iconName="FileText"
                            iconPosition="left"
                          >
                            Technical Documentation
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            iconName="MessageCircle"
                            iconPosition="left"
                          >
                            Discuss Partnership
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            iconName="Calendar"
                            iconPosition="left"
                          >
                            Schedule Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Interested in Our Innovation Pipeline?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Partner with us to access cutting-edge oncology APIs and contribute to the next generation of cancer treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  iconName="Handshake"
                  iconPosition="left"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                >
                  Explore Partnership Opportunities
                </Button>
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Pipeline Overview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationPipeline;