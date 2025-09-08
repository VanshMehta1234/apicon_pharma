import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeadershipSection = () => {
  const [activeLeader, setActiveLeader] = useState(0);

  const leaders = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      credentials: "Ph.D. Pharmaceutical Chemistry, MIT | 20+ years industry experience",
      statement: `"Every molecule we create carries the potential to save lives. My vision for Apicon has always been to bridge the gap between cutting-edge chemistry and accessible cancer treatments. We're not just manufacturing APIs—we're manufacturing hope."`,
      expertise: ["Oncology API Development", "Regulatory Strategy", "Global Operations"],
      achievements: ["50+ peer-reviewed publications", "FDA Advisory Committee member", "Pharmaceutical Innovation Award 2023"]
    },
    {
      name: "Dr. Michael Rodriguez",
      position: "Chief Scientific Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      credentials: "Ph.D. Organic Chemistry, Stanford | Former Roche Senior Scientist",
      statement: `"Innovation in pharmaceutical chemistry isn't just about new molecules—it's about making existing treatments more accessible. Our proprietary synthesis methods have reduced costs while maintaining the highest quality standards."`,
      expertise: ["Synthetic Chemistry", "Process Development", "Quality Assurance"],
      achievements: ["15 patents in API synthesis", "Green Chemistry Award", "Industry Innovation Leader"]
    },
    {
      name: "Dr. Priya Sharma",
      position: "Chief Regulatory Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      credentials: "Ph.D. Regulatory Science, Johns Hopkins | Former FDA Senior Reviewer",
      statement: `"Regulatory excellence isn't a barrier—it's our pathway to global impact. My team ensures that every API meets the highest international standards, enabling our partners to bring treatments to patients worldwide."`,
      expertise: ["Global Regulatory Strategy", "FDA Relations", "International Compliance"],
      achievements: ["Led 100+ successful regulatory submissions", "Regulatory Excellence Award", "International harmonization expert"]
    },
    {
      name: "James Thompson",
      position: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      credentials: "MBA Operations, Wharton | Former Pfizer VP Manufacturing",
      statement: `"Operational excellence in pharmaceutical manufacturing means zero compromise on quality while optimizing for accessibility. We've built a supply chain that's both resilient and responsive to global healthcare needs."`,
      expertise: ["Manufacturing Operations", "Supply Chain Management", "Quality Systems"],
      achievements: ["99.8% on-time delivery record", "Operational Excellence Award", "Global supply chain optimization"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Users" size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Leadership Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Visionaries Behind the
            <span className="text-gradient block mt-2">Scientific Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our leadership team combines decades of pharmaceutical expertise with an unwavering commitment to making cancer treatments more accessible through innovative API manufacturing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leader Cards */}
          <div className="lg:col-span-1 space-y-4">
            {leaders?.map((leader, index) => (
              <div
                key={index}
                onClick={() => setActiveLeader(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeLeader === index
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card hover:bg-accent'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={leader?.image}
                      alt={leader?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {activeLeader === index && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                        <Icon name="Check" size={14} className="text-success-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold truncate ${
                      activeLeader === index ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {leader?.name}
                    </h3>
                    <p className={`text-sm truncate ${
                      activeLeader === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {leader?.position}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`${
                      activeLeader === index ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Active Leader Details */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Leader Image */}
                <div className="md:w-1/3">
                  <div className="relative">
                    <Image
                      src={leaders?.[activeLeader]?.image}
                      alt={leaders?.[activeLeader]?.name}
                      className="w-full aspect-square rounded-xl object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>

                {/* Leader Info */}
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {leaders?.[activeLeader]?.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {leaders?.[activeLeader]?.position}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {leaders?.[activeLeader]?.credentials}
                    </p>
                  </div>

                  {/* Statement */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <Icon name="Quote" size={24} className="text-primary mb-2" />
                    <p className="text-foreground italic leading-relaxed">
                      {leaders?.[activeLeader]?.statement}
                    </p>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leaders?.[activeLeader]?.expertise?.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {leaders?.[activeLeader]?.achievements?.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="Award" size={16} className="text-conversion flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Leadership Principles</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The values that guide our leadership team in making decisions that impact global cancer care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="Microscope" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Scientific Rigor</h4>
              <p className="text-muted-foreground text-sm">
                Every decision backed by data, every process validated by science, every outcome measured for impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center text-success">
                <Icon name="Handshake" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Collaborative Partnership</h4>
              <p className="text-muted-foreground text-sm">
                Building lasting relationships with pharmaceutical partners to maximize patient impact globally.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-conversion/10 flex items-center justify-center text-conversion">
                <Icon name="Heart" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Patient-Centric Innovation</h4>
              <p className="text-muted-foreground text-sm">
                Innovation driven by patient needs, accessibility concerns, and treatment outcome improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;