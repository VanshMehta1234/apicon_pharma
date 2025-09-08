import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GlobalPresenceSection = () => {
  const [selectedRegion, setSelectedRegion] = useState('north-america');

  const regions = [
    {
      id: 'north-america',
      name: 'North America',
      icon: 'MapPin',
      facilities: 3,
      employees: 450,
      partnerships: 85
    },
    {
      id: 'europe',
      name: 'Europe',
      icon: 'MapPin',
      facilities: 2,
      employees: 320,
      partnerships: 120
    },
    {
      id: 'asia-pacific',
      name: 'Asia Pacific',
      icon: 'MapPin',
      facilities: 4,
      employees: 680,
      partnerships: 200
    },
    {
      id: 'latin-america',
      name: 'Latin America',
      icon: 'MapPin',
      facilities: 1,
      employees: 150,
      partnerships: 45
    }
  ];

  const regionDetails = {
    'north-america': {
      headquarters: "Boston, Massachusetts",
      keyFacilities: [
        {
          location: "Boston, MA",
          type: "Global Headquarters & R&D Center",
          established: 2009,
          specialization: "Oncology API Research & Development",
          employees: 180,
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
        },
        {
          location: "Research Triangle, NC",
          type: "Manufacturing & Quality Control",
          established: 2015,
          specialization: "Large-scale API Production",
          employees: 220,
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop"
        },
        {
          location: "San Francisco, CA",
          type: "Innovation Lab",
          established: 2020,
          specialization: "Next-generation Synthesis Technologies",
          employees: 50,
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        }
      ],
      partnerships: [
        "Major pharmaceutical companies across US and Canada",
        "Leading cancer research institutions",
        "Biotech startups developing novel therapies"
      ],
      achievements: [
        "First FDA-approved oncology API (2012)",
        "50+ regulatory submissions",
        "Leading supplier to top 10 pharma companies"
      ]
    },
    'europe': {
      headquarters: "Zurich, Switzerland",
      keyFacilities: [
        {
          location: "Zurich, Switzerland",
          type: "European Headquarters",
          established: 2016,
          specialization: "Regulatory Affairs & Business Development",
          employees: 120,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        },
        {
          location: "Dublin, Ireland",
          type: "Manufacturing Facility",
          established: 2018,
          specialization: "EU Market API Production",
          employees: 200,
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop"
        }
      ],
      partnerships: [
        "European Medicines Agency collaboration",
        "Partnerships with EU pharmaceutical leaders",
        "Academic research collaborations"
      ],
      achievements: [
        "EMA certification achieved (2017)",
        "30+ European market approvals",
        "Sustainable manufacturing recognition"
      ]
    },
    'asia-pacific': {
      headquarters: "Singapore",
      keyFacilities: [
        {
          location: "Singapore",
          type: "Asia-Pacific Headquarters",
          established: 2017,
          specialization: "Regional Operations & Distribution",
          employees: 150,
          image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop"
        },
        {
          location: "Hyderabad, India",
          type: "Manufacturing Complex",
          established: 2019,
          specialization: "Cost-effective API Production",
          employees: 380,
          image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop"
        },
        {
          location: "Tokyo, Japan",
          type: "Quality Assurance Center",
          established: 2021,
          specialization: "Advanced Quality Control",
          employees: 80,
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        },
        {
          location: "Shanghai, China",
          type: "Distribution Hub",
          established: 2022,
          specialization: "Supply Chain Management",
          employees: 70,
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
        }
      ],
      partnerships: [
        "Leading Asian pharmaceutical manufacturers",
        "Government health initiatives",
        "Regional cancer treatment programs"
      ],
      achievements: [
        "Largest regional manufacturing capacity",
        "40% cost reduction through local production",
        "200+ pharmaceutical partnerships"
      ]
    },
    'latin-america': {
      headquarters: "São Paulo, Brazil",
      keyFacilities: [
        {
          location: "São Paulo, Brazil",
          type: "Latin America Hub",
          established: 2023,
          specialization: "Regional Distribution & Support",
          employees: 150,
          image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
        }
      ],
      partnerships: [
        "Brazilian pharmaceutical companies",
        "Regional health ministries",
        "Cancer treatment accessibility programs"
      ],
      achievements: [
        "Newest regional expansion",
        "Focus on treatment accessibility",
        "Growing partnership network"
      ]
    }
  };

  const globalStats = [
    {
      icon: "Building2",
      value: "10",
      suffix: "+",
      label: "Global Facilities",
      description: "Manufacturing, R&D, and distribution centers worldwide"
    },
    {
      icon: "Users",
      value: "1,600",
      suffix: "+",
      label: "Team Members",
      description: "Scientists, engineers, and professionals across all regions"
    },
    {
      icon: "Handshake",
      value: "450",
      suffix: "+",
      label: "Partnerships",
      description: "Pharmaceutical companies and research institutions"
    },
    {
      icon: "Globe",
      value: "45",
      suffix: "+",
      label: "Countries Served",
      description: "Global reach ensuring treatment accessibility"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Globe" size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Global Presence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Worldwide Network for
            <span className="text-gradient block mt-2">Global Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our global presence ensures reliable API supply and local support for pharmaceutical partners worldwide, bringing cancer treatments closer to patients who need them most.
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {globalStats?.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-lg card-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Icon name={stat?.icon} size={32} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat?.value}{stat?.suffix}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat?.label}</div>
              <p className="text-sm text-muted-foreground">{stat?.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Map Section */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          {/* Region Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {regions?.map((region) => (
              <button
                key={region?.id}
                onClick={() => setSelectedRegion(region?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedRegion === region?.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-foreground hover:bg-accent'
                }`}
              >
                <Icon name={region?.icon} size={20} />
                <span>{region?.name}</span>
                <div className="ml-2 flex space-x-2 text-xs">
                  <span className="bg-white/20 px-2 py-1 rounded">{region?.facilities} facilities</span>
                </div>
              </button>
            ))}
          </div>

          {/* World Map Placeholder */}
          <div className="relative mb-8">
            <div className="bg-muted/30 rounded-xl p-8 text-center">
              <Icon name="Globe" size={64} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {regionDetails?.[selectedRegion]?.headquarters}
              </h3>
              <p className="text-muted-foreground">
                Regional headquarters for {regions?.find(r => r?.id === selectedRegion)?.name}
              </p>
            </div>
          </div>

          {/* Region Details */}
          <div className="space-y-8">
            {/* Facilities */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Key Facilities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionDetails?.[selectedRegion]?.keyFacilities?.map((facility, index) => (
                  <div key={index} className="bg-muted/30 rounded-xl p-6">
                    <Image
                      src={facility?.image}
                      alt={facility?.location}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{facility?.location}</h4>
                      <p className="text-sm text-primary font-medium">{facility?.type}</p>
                      <p className="text-sm text-muted-foreground">{facility?.specialization}</p>
                      <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                        <span>Est. {facility?.established}</span>
                        <span>{facility?.employees} employees</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnerships & Achievements */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Handshake" size={20} className="text-primary" />
                  <span>Key Partnerships</span>
                </h4>
                <div className="space-y-2">
                  {regionDetails?.[selectedRegion]?.partnerships?.map((partnership, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{partnership}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="Award" size={20} className="text-conversion" />
                  <span>Regional Achievements</span>
                </h4>
                <div className="space-y-2">
                  {regionDetails?.[selectedRegion]?.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Star" size={16} className="text-conversion flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Teams Highlight */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Local Teams, Global Standards</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our regional teams combine local market expertise with global quality standards, ensuring optimal support for pharmaceutical partners in every market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: "Americas",
                focus: "Innovation & Regulatory Leadership",
                team: "650+ professionals",
                specialties: ["FDA regulatory expertise", "Advanced R&D capabilities", "Innovation partnerships"],
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop"
              },
              {
                region: "Europe",
                focus: "Quality & Sustainability",
                team: "320+ professionals",
                specialties: ["EMA compliance", "Sustainable manufacturing", "European market access"],
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
              },
              {
                region: "Asia-Pacific",
                focus: "Scale & Accessibility",
                team: "680+ professionals",
                specialties: ["Cost-effective production", "Regional partnerships", "Market accessibility"],
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
              }
            ]?.map((team, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                <Image
                  src={team?.image}
                  alt={`${team?.region} team`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-foreground mb-2">{team?.region}</h4>
                <p className="text-primary font-medium mb-2">{team?.focus}</p>
                <p className="text-sm text-muted-foreground mb-4">{team?.team}</p>
                <div className="space-y-1">
                  {team?.specialties?.map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Dot" size={12} className="text-primary" />
                      <span className="text-xs text-muted-foreground">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;