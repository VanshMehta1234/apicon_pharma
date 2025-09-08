import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const milestones = [
    {
      year: 2009,
      title: "Foundation & Vision",
      description: "Founded with a mission to make oncology APIs more accessible through innovative chemistry.",
      icon: "Rocket"
    },
    {
      year: 2015,
      title: "FDA Approval & Global Expansion",
      description: "Achieved FDA approval and expanded operations globally with manufacturing facilities across key markets.",
      icon: "Globe"
    },
    {
      year: 2021,
      title: "Digital Innovation",
      description: "Implemented AI-driven quality control and digital supply chain management, setting new industry standards.",
      icon: "Cpu"
    },
    {
      year: 2024,
      title: "Future of Oncology",
      description: "Leading the next generation of oncology APIs with personalized medicine solutions.",
      icon: "Target"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Journey of Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small research lab to a global leader in oncology APIs, our timeline reflects our commitment to advancing cancer treatment accessibility.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-border lg:block hidden"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div
                key={milestone?.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
                onMouseEnter={() => setActiveYear(milestone?.year)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden">
                  <div className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                    activeYear === milestone?.year 
                      ? 'bg-primary border-primary shadow-lg scale-125' 
                      : 'bg-background border-border'
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover ${
                    activeYear === milestone?.year ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  }`}>
                    <div className={`flex items-center space-x-3 mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    } justify-start`}>
                      <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${
                        activeYear === milestone?.year ? 'bg-primary text-primary-foreground' : 'text-primary'
                      } transition-all duration-300`}>
                        <Icon name={milestone?.icon} size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{milestone?.year}</div>
                        <div className="text-sm text-muted-foreground">Milestone</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {milestone?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;