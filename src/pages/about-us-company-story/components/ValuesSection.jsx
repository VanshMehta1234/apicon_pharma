import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesSection = () => {
  const coreValues = [
    {
      title: "Scientific Rigor",
      icon: "Microscope",
      description: "Every molecule, every process, every decision is grounded in rigorous scientific methodology and validated through comprehensive testing.",
      examples: [
        "Triple-validated synthesis protocols",
        "Peer-reviewed research publications",
        "Continuous process optimization"
      ],
      testimonial: {
        quote: "The level of scientific detail and validation at Apicon exceeds industry standards. Their commitment to research-backed processes gives us complete confidence in their APIs.",
        author: "Dr. Jennifer Walsh",
        role: "Head of Quality, PharmaCorp"
      },
      color: "primary"
    },
    {
      title: "Collaborative Partnership",
      icon: "Handshake",
      description: "We believe in building lasting relationships with pharmaceutical partners, working together to overcome challenges and maximize patient impact.",
      examples: [
        "Joint development programs",
        "Transparent communication protocols",
        "Shared success metrics"
      ],
      testimonial: {
        quote: "Apicon doesn't just supply APIs—they become true partners in our mission. Their collaborative approach has been instrumental in bringing our treatments to market faster.",
        author: "Mark Stevens",
        role: "VP Procurement, Global Therapeutics"
      },
      color: "success"
    },
    {
      title: "Accessible Innovation",
      icon: "Heart",
      description: "Innovation must serve accessibility. We develop breakthrough technologies that reduce costs while maintaining quality, making treatments available to more patients.",
      examples: [
        "Cost-reduction synthesis methods",
        "Scalable manufacturing processes",
        "Global distribution networks"
      ],
      testimonial: {
        quote: "Their innovative manufacturing approach reduced our API costs by 35% without compromising quality. This directly translates to more affordable treatments for patients.",
        author: "Dr. Raj Patel",
        role: "Chief Scientific Officer, MedLife Solutions"
      },
      color: "conversion"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        accent: "bg-primary"
      },
      success: {
        bg: "bg-success/10",
        text: "text-success",
        border: "border-success/20",
        accent: "bg-success"
      },
      conversion: {
        bg: "bg-conversion/10",
        text: "text-conversion",
        border: "border-conversion/20",
        accent: "bg-conversion"
      }
    };
    return colors?.[color];
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Compass" size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Core Values</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Values That Drive Our
            <span className="text-gradient block mt-2">Mission Forward</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our core values aren't just words on a wall—they're the principles that guide every decision, every partnership, and every innovation in our journey to advance cancer care.
          </p>
        </div>

        {/* Values Cards */}
        <div className="space-y-16">
          {coreValues?.map((value, index) => {
            const colors = getColorClasses(value?.color);
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl ${colors?.bg} flex items-center justify-center ${colors?.text}`}>
                      <Icon name={value?.icon} size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{value?.title}</h3>
                      <div className={`w-12 h-1 ${colors?.accent} rounded-full mt-2`}></div>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {value?.description}
                  </p>

                  {/* Examples */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">How We Live This Value:</h4>
                    <div className="space-y-2">
                      {value?.examples?.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Icon name="CheckCircle" size={16} className={colors?.text} />
                          <span className="text-muted-foreground">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className={`border-l-4 ${colors?.border} pl-6 py-4 bg-muted/30 rounded-r-lg`}>
                    <p className="text-foreground italic mb-3">"{value?.testimonial?.quote}"</p>
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full ${colors?.accent} flex items-center justify-center text-white text-sm font-bold`}>
                        {value?.testimonial?.author?.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{value?.testimonial?.author}</div>
                        <div className="text-sm text-muted-foreground">{value?.testimonial?.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Visual */}
                <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className={`absolute inset-0 ${colors?.bg} rounded-2xl transform rotate-3`}></div>
                    <div className="relative bg-card rounded-2xl p-6 shadow-lg">
                      <Image
                        src={
                          index === 0 
                            ? "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop"
                            : index === 1
                            ? "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                            : "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                        }
                        alt={`${value?.title} in action`}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      
                      {/* Floating Badge */}
                      <div className={`absolute -top-3 -right-3 ${colors?.accent} text-white px-4 py-2 rounded-lg shadow-lg`}>
                        <div className="flex items-center space-x-2">
                          <Icon name={value?.icon} size={16} />
                          <span className="text-sm font-medium">{value?.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Employee Voices */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Voices from Our Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear how our values come to life through the experiences of our team members across different departments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Working at Apicon means knowing that every day, my research contributes to saving lives. The scientific rigor here is unmatched, but it's the human impact that drives us.",
                author: "Dr. Lisa Chen",
                role: "Senior Research Scientist",
                department: "R&D",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "The collaborative culture here is extraordinary. We don't just work with partners—we become part of their mission to bring treatments to patients who need them most.",
                author: "Michael Torres",
                role: "Partnership Manager",
                department: "Business Development",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              },
              {
                quote: "Innovation at Apicon isn't about complexity—it's about making life-saving treatments accessible to everyone. That's what gets me excited about coming to work every day.",
                author: "Sarah Kim",
                role: "Process Engineer",
                department: "Manufacturing",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
              }
            ]?.map((voice, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={voice?.image}
                    alt={voice?.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{voice?.author}</div>
                    <div className="text-sm text-muted-foreground">{voice?.role}</div>
                    <div className="text-xs text-primary">{voice?.department}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">"{voice?.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;