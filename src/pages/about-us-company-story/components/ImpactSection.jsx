import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ImpactSection = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    treatments: 0,
    savings: 0,
    countries: 0
  });

  const finalValues = {
    patients: 50000000,
    treatments: 2500000,
    savings: 850,
    countries: 45
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const increment = finalValues?.[key] / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        if (step < steps) {
          current += increment;
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
          step++;
        }
      }, stepDuration);
    });

    return () => intervals?.forEach(clearInterval);
  }, []);

  const impactMetrics = [
    {
      icon: "Users",
      value: counters?.patients,
      suffix: "+",
      label: "Patients Reached",
      description: "Lives touched through our API contributions to cancer treatments worldwide",
      color: "text-primary"
    },
    {
      icon: "Pill",
      value: counters?.treatments,
      suffix: "+",
      label: "Treatments Enabled",
      description: "Individual treatment courses made possible through our pharmaceutical partnerships",
      color: "text-success"
    },
    {
      icon: "DollarSign",
      value: counters?.savings,
      suffix: "M+",
      label: "Cost Savings",
      description: "Healthcare cost reductions achieved through efficient API manufacturing",
      color: "text-conversion"
    },
    {
      icon: "Globe",
      value: counters?.countries,
      suffix: "+",
      label: "Countries Served",
      description: "Global reach ensuring cancer treatment accessibility across continents",
      color: "text-trust"
    }
  ];

  const impactStories = [
    {
      title: "Breakthrough in Pediatric Oncology",
      description: "Our specialized API manufacturing enabled a 40% cost reduction in childhood leukemia treatments, making therapy accessible to underserved populations.",
      icon: "Heart",
      metric: "15,000+ children treated"
    },
    {
      title: "Rare Cancer Treatment Access",
      description: "Developed APIs for orphan drugs targeting rare cancers, bringing hope to patients with limited treatment options.",
      icon: "Target",
      metric: "25 rare cancer types"
    },
    {
      title: "Global Supply Chain Resilience",
      description: "Maintained uninterrupted API supply during global disruptions, ensuring continuous cancer treatment availability.",
      icon: "Shield",
      metric: "99.8% supply reliability"
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + 'K';
    }
    return num?.toString();
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="TrendingUp" size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Global Impact</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Measuring Our Contribution to
            <span className="text-gradient block mt-2">Cancer Care Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every API we manufacture represents hope for patients and families facing cancer. Our impact extends far beyond molecules—it's measured in lives saved and treatments made accessible.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactMetrics?.map((metric, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-lg card-hover">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center ${metric?.color}`}>
                <Icon name={metric?.icon} size={32} />
              </div>
              <div className="space-y-2">
                <div className={`text-3xl font-bold ${metric?.color} animate-counter`}>
                  {metric?.label === "Cost Savings" ? `$${metric?.value}${metric?.suffix}` : `${formatNumber(metric?.value)}${metric?.suffix}`}
                </div>
                <div className="text-lg font-semibold text-foreground">{metric?.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stories of Impact</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real examples of how our pharmaceutical partnerships have transformed cancer treatment accessibility and outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {impactStories?.map((story, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg card-hover">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon name={story?.icon} size={24} />
                  </div>
                  <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {story?.metric}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{story?.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{story?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-conversion/10 to-success/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Us in Advancing Cancer Care
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Partner with us to expand access to life-saving cancer treatments through reliable, high-quality API manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-conversion px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
                <Icon name="Handshake" size={18} />
                <span>Partner With Us</span>
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-accent transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="FileText" size={18} />
                <span>Impact Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;