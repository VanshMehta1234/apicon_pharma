import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GlobalOffices = () => {
  const [selectedRegion, setSelectedRegion] = useState('americas');

  const offices = {
    americas: [
      {
        city: 'Boston, MA',
        type: 'Global Headquarters',
        address: '100 Innovation Drive, Cambridge, MA 02139, USA',
        phone: '+1 (617) 555-0100',
        email: 'americas@apiconpharma.com',
        timezone: 'EST (UTC-5)',
        languages: ['English', 'Spanish'],
        specialties: ['R&D', 'Regulatory Affairs', 'Business Development'],
        coordinates: '42.3601,-71.0589'
      },
      {
        city: 'San Francisco, CA',
        type: 'West Coast Office',
        address: '450 Mission Street, San Francisco, CA 94105, USA',
        phone: '+1 (415) 555-0200',
        email: 'westcoast@apiconpharma.com',
        timezone: 'PST (UTC-8)',
        languages: ['English'],
        specialties: ['Partnership Development', 'Technical Support'],
        coordinates: '37.7749,-122.4194'
      }
    ],
    europe: [
      {
        city: 'London, UK',
        type: 'European Headquarters',
        address: '25 Canary Wharf, London E14 5AB, United Kingdom',
        phone: '+44 20 7555 0100',
        email: 'europe@apiconpharma.com',
        timezone: 'GMT (UTC+0)',
        languages: ['English', 'French', 'German'],
        specialties: ['Regulatory Affairs', 'Quality Assurance', 'Supply Chain'],
        coordinates: '51.5074,-0.1278'
      },
      {
        city: 'Frankfurt, Germany',
        type: 'Manufacturing Hub',
        address: 'Industriestraße 15, 60528 Frankfurt am Main, Germany',
        phone: '+49 69 555 0200',
        email: 'germany@apiconpharma.com',
        timezone: 'CET (UTC+1)',
        languages: ['German', 'English'],
        specialties: ['Manufacturing', 'Quality Control', 'Technical Services'],
        coordinates: '50.1109,8.6821'
      }
    ],
    asia: [
      {
        city: 'Singapore',
        type: 'Asia-Pacific Headquarters',
        address: '1 Marina Bay, Singapore 018989',
        phone: '+65 6555 0100',
        email: 'asiapac@apiconpharma.com',
        timezone: 'SGT (UTC+8)',
        languages: ['English', 'Mandarin', 'Japanese'],
        specialties: ['Regional Distribution', 'Regulatory Affairs', 'Partnership'],
        coordinates: '1.3521,103.8198'
      },
      {
        city: 'Mumbai, India',
        type: 'Manufacturing & R&D',
        address: 'Bandra Kurla Complex, Mumbai 400051, India',
        phone: '+91 22 555 0300',
        email: 'india@apiconpharma.com',
        timezone: 'IST (UTC+5:30)',
        languages: ['English', 'Hindi'],
        specialties: ['Manufacturing', 'R&D', 'Cost Engineering'],
        coordinates: '19.0760,72.8777'
      }
    ]
  };

  const regions = [
    { id: 'americas', name: 'Americas', icon: 'MapPin', count: offices?.americas?.length },
    { id: 'europe', name: 'Europe', icon: 'Building2', count: offices?.europe?.length },
    { id: 'asia', name: 'Asia-Pacific', icon: 'Globe', count: offices?.asia?.length }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Global Presence, Local Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our worldwide network of offices ensures local support with global standards. 
            Connect with the office nearest to you for personalized assistance.
          </p>
        </div>

        {/* Region Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-lg p-2 border border-border">
            {regions?.map((region) => (
              <button
                key={region?.id}
                onClick={() => setSelectedRegion(region?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedRegion === region?.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <Icon name={region?.icon} size={16} />
                <span>{region?.name}</span>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                  {region?.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Office Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {offices?.[selectedRegion]?.map((office, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg border border-border card-hover">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{office?.city}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {office?.type}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Building2" size={24} className="text-primary" />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={16} className="text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-foreground">{office?.address}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{office?.phone}</p>
                        <p className="text-xs text-muted-foreground">{office?.timezone}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{office?.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Languages Supported:</p>
                  <div className="flex flex-wrap gap-2">
                    {office?.languages?.map((language, langIndex) => (
                      <span
                        key={langIndex}
                        className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Specialties:</p>
                  <div className="space-y-2">
                    {office?.specialties?.map((specialty, specIndex) => (
                      <div key={specIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={12} className="text-success" />
                        <span className="text-sm text-muted-foreground">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="h-48 rounded-lg overflow-hidden border border-border">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={office?.city}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${office?.coordinates}&z=14&output=embed`}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Call Office
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Mail"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Send Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Navigation"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center">
          <div className="bg-accent/50 rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Don't see your region?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're expanding globally and may have local representatives in your area. 
              Contact our global headquarters for assistance with regional partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              >
                Contact Global Team
              </Button>
              <Button
                variant="outline"
                iconName="Users"
                iconPosition="left"
              >
                Find Local Representative
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOffices;