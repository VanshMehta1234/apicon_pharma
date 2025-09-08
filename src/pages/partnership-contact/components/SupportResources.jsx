import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupportResources = () => {
  const [activeResource, setActiveResource] = useState('documentation');

  const resources = [
    {
      id: 'documentation',
      title: 'Technical Documentation',
      description: 'Access comprehensive API specifications, safety data sheets, and regulatory documentation',
      icon: 'FileText',
      color: 'primary',
      items: [
        'API Specifications & Monographs',
        'Safety Data Sheets (SDS)',
        'Certificate of Analysis (CoA)',
        'Regulatory Filing Support',
        'Manufacturing Process Information'
      ]
    },
    {
      id: 'samples',
      title: 'Sample Portal',
      description: 'Request and track API samples for evaluation and testing purposes',
      icon: 'Package',
      color: 'success',
      items: [
        'Online Sample Request System',
        'Sample Tracking & Status',
        'Technical Data Packages',
        'Custom Sample Preparation',
        'Express Shipping Options'
      ]
    },
    {
      id: 'support',
      title: 'Technical Support',
      description: 'Get expert assistance from our scientific and regulatory teams',
      icon: 'HelpCircle',
      color: 'warning',
      items: [
        'Scientific Consultation',
        'Regulatory Guidance',
        'Process Development Support',
        'Quality Issue Resolution',
        'Training & Education'
      ]
    },
    {
      id: 'partnership',
      title: 'Partnership Portal',
      description: 'Dedicated resources for existing partners and collaboration opportunities',
      icon: 'Handshake',
      color: 'conversion',
      items: [
        'Partner Account Management',
        'Order Tracking & History',
        'Exclusive Partner Resources',
        'Joint Development Programs',
        'Strategic Partnership Opportunities'
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Download Catalog',
      description: 'Complete API product catalog with specifications',
      icon: 'Download',
      action: 'download',
      color: 'primary'
    },
    {
      title: 'Schedule Consultation',
      description: 'Book a meeting with our technical experts',
      icon: 'Calendar',
      action: 'schedule',
      color: 'success'
    },
    {
      title: 'Request Quote',
      description: 'Get pricing for your specific requirements',
      icon: 'Calculator',
      action: 'quote',
      color: 'warning'
    },
    {
      title: 'Live Chat',
      description: 'Instant support during business hours',
      icon: 'MessageCircle',
      action: 'chat',
      color: 'conversion'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical response time for inquiries?',
      answer: 'We respond to partnership inquiries within 4 hours, technical support within 2 hours, and emergency requests immediately. Response times may vary based on complexity and time zones.'
    },
    {
      question: 'Do you provide samples for evaluation?',
      answer: 'Yes, we provide API samples for qualified pharmaceutical companies. Sample requests are processed within 24-48 hours, and shipping typically takes 3-5 business days depending on location.'
    },
    {
      question: 'What regulatory documentation do you provide?',
      answer: 'We provide comprehensive regulatory packages including DMFs, CEPs, GMP certificates, analytical methods, stability data, and regulatory filing support for FDA, EMA, and other global authorities.'
    },
    {
      question: 'How do you ensure supply chain reliability?',
      answer: 'We maintain multiple manufacturing sites, strategic inventory levels, and backup suppliers. Our supply chain team provides regular updates and proactive communication about any potential impacts.'
    }
  ];

  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Support Resources & Quick Actions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive resources, documentation, and support tools to accelerate your API development and partnership journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {resources?.map((resource) => (
            <div
              key={resource?.id}
              className={`bg-card rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer card-hover ${
                activeResource === resource?.id
                  ? `border-${resource?.color} shadow-lg`
                  : 'border-border hover:border-primary/30'
              }`}
              onClick={() => setActiveResource(resource?.id)}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-${resource?.color}/10 rounded-lg flex items-center justify-center`}>
                  <Icon name={resource?.icon} size={24} className={`text-${resource?.color}`} />
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{resource?.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource?.description}</p>
                </div>

                {activeResource === resource?.id && (
                  <div className="space-y-2 pt-2 border-t border-border">
                    {resource?.items?.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={12} className={`text-${resource?.color}`} />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            Quick Actions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions?.map((action, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border card-hover">
                <div className="text-center space-y-4">
                  <div className={`w-12 h-12 bg-${action?.color}/10 rounded-lg flex items-center justify-center mx-auto`}>
                    <Icon name={action?.icon} size={24} className={`text-${action?.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{action?.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{action?.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName={action?.icon}
                    iconPosition="left"
                    fullWidth
                    className={`border-${action?.color} text-${action?.color} hover:bg-${action?.color} hover:text-${action?.color === 'warning' ? 'foreground' : action?.color + '-foreground'}`}
                  >
                    {action?.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs?.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                <h4 className="font-semibold text-foreground mb-3 flex items-start space-x-2">
                  <Icon name="HelpCircle" size={16} className="text-primary mt-1" />
                  <span>{faq?.question}</span>
                </h4>
                <p className="text-muted-foreground pl-6">{faq?.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for?
            </p>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Contact Support Team
            </Button>
          </div>
        </div>

        {/* Emergency Support Banner */}
        <div className="mt-16 bg-destructive/5 rounded-xl p-8 border border-destructive/20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="AlertTriangle" size={24} className="text-destructive" />
              <h3 className="text-xl font-bold text-foreground">24/7 Emergency Support</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For critical supply chain disruptions, quality issues, or urgent regulatory matters, 
              our emergency support team is available around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Phone"
                iconPosition="left"
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              >
                Emergency Hotline
              </Button>
              <Button
                variant="outline"
                iconName="Mail"
                iconPosition="left"
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                Emergency Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportResources;