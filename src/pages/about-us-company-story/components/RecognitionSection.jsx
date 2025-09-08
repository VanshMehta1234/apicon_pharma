import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const RecognitionSection = () => {
  const [activeCategory, setActiveCategory] = useState('awards');

  const categories = [
    { id: 'awards', label: 'Industry Awards', icon: 'Award' },
    { id: 'certifications', label: 'Certifications', icon: 'Shield' },
    { id: 'publications', label: 'Publications', icon: 'FileText' }
  ];

  const recognitionData = {
    awards: [
      {
        year: 2024,
        title: "Pharmaceutical Innovation Excellence Award",
        organization: "International Pharmaceutical Federation (FIP)",
        description: "Recognized for breakthrough synthesis technology that reduced manufacturing costs by 40% while maintaining highest quality standards.",
        category: "Innovation",
        impact: "Global cost reduction in cancer treatment accessibility"
      },
      {
        year: 2023,
        title: "Sustainability Leadership in Pharma",
        organization: "Green Chemistry & Commerce Council",
        description: "Honored for implementing green chemistry methods that reduced environmental impact by 45% across all manufacturing processes.",
        category: "Sustainability",
        impact: "Environmental stewardship in pharmaceutical manufacturing"
      },
      {
        year: 2023,
        title: "Quality Excellence in API Manufacturing",
        organization: "Pharmaceutical Quality Group (PQG)",
        description: "Achieved perfect regulatory compliance record across all global facilities with 99.97% batch consistency.",
        category: "Quality",
        impact: "Setting new industry standards for API quality"
      },
      {
        year: 2022,
        title: "Partnership Excellence Award",
        organization: "Pharmaceutical Research and Manufacturers Association",
        description: "Recognized for collaborative approach that enabled 15+ pharmaceutical companies to bring treatments to market faster.",
        category: "Partnership",
        impact: "Accelerated time-to-market for cancer treatments"
      },
      {
        year: 2021,
        title: "Digital Transformation Leader",
        organization: "Pharmaceutical Technology Magazine",
        description: "Leading implementation of AI-driven quality control and digital supply chain management systems.",
        category: "Technology",
        impact: "Industry 4.0 adoption in pharmaceutical manufacturing"
      }
    ],
    certifications: [
      {
        title: "FDA Drug Master File (DMF)",
        issuer: "U.S. Food and Drug Administration",
        scope: "All oncology APIs",
        validUntil: "2027",
        description: "Comprehensive regulatory documentation for all API manufacturing processes",
        significance: "Enables pharmaceutical partners to reference our manufacturing data in their regulatory submissions"
      },
      {
        title: "EMA Certificate of Suitability (CEP)",
        issuer: "European Medicines Agency",
        scope: "European market APIs",
        validUntil: "2026",
        description: "European regulatory approval for API manufacturing and quality systems",
        significance: "Direct access to European pharmaceutical market"
      },
      {
        title: "WHO Prequalification",
        issuer: "World Health Organization",
        scope: "Essential oncology APIs",
        validUntil: "2025",
        description: "WHO approval for APIs used in essential cancer treatments",
        significance: "Enables supply to global health programs and developing markets"
      },
      {
        title: "ISO 14001:2015",
        issuer: "International Organization for Standardization",
        scope: "Environmental management",
        validUntil: "2026",
        description: "Environmental management system certification",
        significance: "Demonstrates commitment to environmental responsibility"
      },
      {
        title: "ISO 9001:2015",
        issuer: "International Organization for Standardization",
        scope: "Quality management",
        validUntil: "2025",
        description: "Quality management system certification",
        significance: "Ensures consistent quality across all operations"
      },
      {
        title: "ICH Q7 Compliance",
        issuer: "International Council for Harmonisation",
        scope: "GMP for APIs",
        validUntil: "Ongoing",
        description: "Good Manufacturing Practice for Active Pharmaceutical Ingredients",
        significance: "Global standard for API manufacturing quality"
      }
    ],
    publications: [
      {
        year: 2024,
        title: "Green Synthesis Pathways for Oncology APIs: A Sustainable Approach",
        journal: "Journal of Pharmaceutical Sciences",
        authors: "Dr. Sarah Chen, Dr. Michael Rodriguez, et al.",
        citations: 45,
        impact: "Introduced new synthesis methods adopted by 20+ pharmaceutical companies",
        abstract: "Novel green chemistry approaches that reduce solvent usage and environmental impact while maintaining API quality and yield."
      },
      {
        year: 2023,
        title: "AI-Driven Quality Control in Pharmaceutical Manufacturing",
        journal: "Pharmaceutical Technology",
        authors: "Dr. Priya Sharma, James Thompson, et al.",
        citations: 32,
        impact: "Framework adopted by regulatory agencies for AI validation",
        abstract: "Implementation of machine learning algorithms for real-time quality monitoring and predictive analytics in API manufacturing."
      },
      {
        year: 2023,
        title: "Cost-Effective Oncology API Production: Balancing Quality and Accessibility",
        journal: "International Journal of Pharmaceutics",
        authors: "Dr. Michael Rodriguez, Dr. Sarah Chen, et al.",
        citations: 28,
        impact: "Cost reduction strategies implemented globally",
        abstract: "Comprehensive analysis of manufacturing optimization techniques that reduce costs while maintaining regulatory compliance."
      },
      {
        year: 2022,
        title: "Global Supply Chain Resilience in Pharmaceutical Manufacturing",
        journal: "Supply Chain Management Review",
        authors: "James Thompson, Dr. Priya Sharma, et al.",
        citations: 38,
        impact: "Supply chain best practices adopted industry-wide",
        abstract: "Strategies for maintaining uninterrupted API supply during global disruptions and market volatility."
      },
      {
        year: 2021,
        title: "Regulatory Harmonization in Oncology API Development",
        journal: "Regulatory Affairs Professionals Society",
        authors: "Dr. Priya Sharma, Dr. Sarah Chen, et al.",
        citations: 52,
        impact: "Contributed to international regulatory guidelines",
        abstract: "Analysis of global regulatory requirements and strategies for streamlined approval processes across multiple markets."
      }
    ]
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Innovation: 'Lightbulb',
      Sustainability: 'Leaf',
      Quality: 'Shield',
      Partnership: 'Handshake',
      Technology: 'Cpu'
    };
    return icons?.[category] || 'Award';
  };

  const getCategoryColor = (category) => {
    const colors = {
      Innovation: 'text-primary',
      Sustainability: 'text-success',
      Quality: 'text-trust',
      Partnership: 'text-conversion',
      Technology: 'text-secondary'
    };
    return colors?.[category] || 'text-primary';
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Trophy" size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Recognition & Achievements</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industry Recognition for
            <span className="text-gradient block mt-2">Excellence & Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to scientific excellence, quality manufacturing, and sustainable practices has earned recognition from leading pharmaceutical organizations and regulatory bodies worldwide.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-accent'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>

        {/* Awards Section */}
        {activeCategory === 'awards' && (
          <div className="space-y-8">
            {recognitionData?.awards?.map((award, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-lg card-hover">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center ${getCategoryColor(award?.category)}`}>
                        <Icon name={getCategoryIcon(award?.category)} size={24} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className="text-xl font-bold text-foreground">{award?.title}</h3>
                          <span className="text-2xl font-bold text-primary">{award?.year}</span>
                        </div>
                        <p className="text-primary font-medium">{award?.organization}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {award?.description}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Tag" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{award?.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-success" />
                        <span className="text-sm text-success">{award?.impact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-32 flex lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-2">
                    <div className="text-center">
                      <Icon name="Award" size={32} className="text-conversion mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Section */}
        {activeCategory === 'certifications' && (
          <div className="grid md:grid-cols-2 gap-8">
            {recognitionData?.certifications?.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg card-hover">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center text-success flex-shrink-0">
                    <Icon name="Shield" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{cert?.title}</h3>
                    <p className="text-primary font-medium text-sm">{cert?.issuer}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success">Valid</div>
                    <div className="text-xs text-muted-foreground">Until {cert?.validUntil}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Scope</div>
                    <div className="text-sm text-muted-foreground">{cert?.scope}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Description</div>
                    <div className="text-sm text-muted-foreground">{cert?.description}</div>
                  </div>
                  
                  <div className="pt-3 border-t border-border">
                    <div className="text-sm font-medium text-foreground mb-1">Significance</div>
                    <div className="text-sm text-muted-foreground">{cert?.significance}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Publications Section */}
        {activeCategory === 'publications' && (
          <div className="space-y-6">
            {recognitionData?.publications?.map((pub, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg card-hover">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Icon name="FileText" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{pub?.title}</h3>
                        <p className="text-primary font-medium text-sm">{pub?.journal} • {pub?.year}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-3 text-sm">{pub?.authors}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{pub?.abstract}</p>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Icon name="Quote" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{pub?.citations} citations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-success" />
                        <span className="text-sm text-success">{pub?.impact}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-24 text-center">
                    <div className="text-2xl font-bold text-primary">{pub?.year}</div>
                    <div className="text-xs text-muted-foreground">Published</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-conversion/10 to-success/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Recognition by Numbers</h3>
            <p className="text-muted-foreground">Our achievements reflect our commitment to excellence across all aspects of pharmaceutical manufacturing.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Global Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-conversion mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Scientific Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Industry Citations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;