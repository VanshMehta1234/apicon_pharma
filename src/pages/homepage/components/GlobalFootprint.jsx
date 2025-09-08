import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const GlobalFootprint = () => {
  const [selectedRegion, setSelectedRegion] = useState('global');

  const regions = [
    {
      id: 'global',
      name: 'Global Overview',
      description: 'Worldwide presence with strategic manufacturing and distribution centers',
      stats: {
        countries: '85+',
        facilities: '8',
        certifications: '45+',
        partners: '150+'
      }
    },
    {
      id: 'americas',
      name: 'Americas',
      description: 'FDA-approved facilities serving North and South American markets',
      stats: {
        countries: '25+',
        facilities: '3',
        certifications: '15+',
        partners: '45+'
      }
    },
    {
      id: 'europe',
      name: 'Europe',
      description: 'EMA-compliant operations across European pharmaceutical markets',
      stats: {
        countries: '35+',
        facilities: '3',
        certifications: '18+',
        partners: '65+'
      }
    },
    {
      id: 'asia',
      name: 'Asia-Pacific',
      description: 'Strategic presence in the fastest-growing pharmaceutical region',
      stats: {
        countries: '25+',
        facilities: '2',
        certifications: '12+',
        partners: '40+'
      }
    }
  ];

  const certifications = [
    { name: 'FDA', icon: 'Shield', region: 'US Food & Drug Administration' },
    { name: 'EMA', icon: 'Award', region: 'European Medicines Agency' },
    { name: 'ICH', icon: 'Globe', region: 'International Council for Harmonisation' },
    { name: 'WHO-GMP', icon: 'CheckCircle', region: 'World Health Organization GMP' },
    { name: 'ISO 9001', icon: 'Star', region: 'Quality Management Systems' },
    { name: 'ISO 14001', icon: 'Leaf', region: 'Environmental Management' }
  ];

  const currentRegion = regions?.find(r => r?.id === selectedRegion);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic worldwide presence ensuring reliable supply chain and regulatory compliance across all major pharmaceutical markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Interactive Map Section */}
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Manufacturing Footprint
                </h3>
                
                {/* Region Selector */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {regions?.map((region) => (
                    <button
                      key={region?.id}
                      onClick={() => setSelectedRegion(region?.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedRegion === region?.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {region?.name}
                    </button>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="relative h-64 bg-muted/50 rounded-xl overflow-hidden mb-6">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Apicon Pharma Global Locations"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=40.7128,-74.0060&z=2&output=embed"
                    className="border-0"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Region Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {currentRegion?.stats?.countries}
                    </div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-trust mb-1">
                      {currentRegion?.stats?.facilities}
                    </div>
                    <div className="text-sm text-muted-foreground">Facilities</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-conversion mb-1">
                      {currentRegion?.stats?.certifications}
                    </div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {currentRegion?.stats?.partners}
                    </div>
                    <div className="text-sm text-muted-foreground">Partners</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Compliance */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Regulatory Certifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {certifications?.map((cert, index) => (
                    <div
                      key={cert?.name}
                      className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={cert?.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {cert?.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {cert?.region}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supply Chain Reliability */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Supply Chain Excellence
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-trust/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Truck" size={20} className="text-trust" />
                      <span className="text-sm font-medium text-foreground">On-Time Delivery</span>
                    </div>
                    <span className="text-lg font-bold text-trust">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">Lead Time Accuracy</span>
                    </div>
                    <span className="text-lg font-bold text-primary">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-conversion/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Shield" size={20} className="text-conversion" />
                      <span className="text-sm font-medium text-foreground">Quality Compliance</span>
                    </div>
                    <span className="text-lg font-bold text-conversion">100%</span>
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

export default GlobalFootprint;