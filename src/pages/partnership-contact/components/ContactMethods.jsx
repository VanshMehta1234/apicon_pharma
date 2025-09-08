import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState('partnership');

  const contactMethods = [
    {
      id: 'partnership',
      title: 'New Partnership',
      description: 'Explore collaboration opportunities for your oncology pipeline',
      icon: 'Handshake',
      color: 'primary',
      responseTime: '< 4 hours',
      features: ['Dedicated Partnership Manager', 'Custom API Solutions', 'Regulatory Support']
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Get expert assistance with API specifications and development',
      icon: 'Settings',
      color: 'success',
      responseTime: '< 2 hours',
      features: ['Scientific Consultation', 'Molecular Analysis', 'Process Optimization']
    },
    {
      id: 'regulatory',
      title: 'Regulatory Questions',
      description: 'Navigate compliance requirements with our regulatory experts',
      icon: 'FileCheck',
      color: 'warning',
      responseTime: '< 6 hours',
      features: ['Compliance Guidance', 'Documentation Support', 'Audit Assistance']
    },
    {
      id: 'samples',
      title: 'Sample Requests',
      description: 'Request API samples for evaluation and testing',
      icon: 'Package',
      color: 'conversion',
      responseTime: '< 24 hours',
      features: ['Quality Samples', 'Fast Shipping', 'Technical Data Sheets']
    }
  ];

  const emergencyContacts = [
    {
      region: 'Americas',
      phone: '+1-555-APICON-1',
      timezone: 'EST/PST',
      hours: '24/7 Emergency'
    },
    {
      region: 'Europe',
      phone: '+44-20-APICON-2',
      timezone: 'CET/GMT',
      hours: '24/7 Emergency'
    },
    {
      region: 'Asia Pacific',
      phone: '+65-APICON-3',
      timezone: 'SGT/JST',
      hours: '24/7 Emergency'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Choose Your Contact Method
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select the most appropriate contact method for your inquiry. Our specialized teams ensure you get the right expertise for your specific needs.
          </p>
        </div>

        {/* Contact Method Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`relative bg-card rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer card-hover ${
                activeMethod === method?.id
                  ? `border-${method?.color} shadow-lg`
                  : 'border-border hover:border-primary/30'
              }`}
              onClick={() => setActiveMethod(method?.id)}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 bg-${method?.color}/10 rounded-lg flex items-center justify-center`}>
                  <Icon name={method?.icon} size={24} className={`text-${method?.color}`} />
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{method?.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method?.description}</p>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Clock" size={14} className="text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      Response: {method?.responseTime}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {method?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={12} className={`text-${method?.color}`} />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {activeMethod === method?.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={14} className="text-primary-foreground" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-destructive/5 rounded-xl p-8 border border-destructive/20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="AlertTriangle" size={24} className="text-destructive" />
              <h3 className="text-xl font-bold text-foreground">Emergency Contact</h3>
            </div>
            <p className="text-muted-foreground">
              For critical supply chain issues, regulatory urgent matters, or immediate technical support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts?.map((contact, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <div className="text-center space-y-3">
                  <h4 className="font-semibold text-foreground">{contact?.region}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <span className="font-mono text-sm text-foreground">{contact?.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{contact?.timezone}</span>
                    </div>
                    <div className="text-xs font-medium text-destructive">{contact?.hours}</div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                    fullWidth
                    className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;