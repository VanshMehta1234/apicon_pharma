import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const contactOptions = [
    {
      title: "Partnership Consultation",
      description: "Discuss API requirements and explore collaboration opportunities with our business development team.",
      icon: "Handshake",
      color: "primary",
      action: "Schedule Consultation",
      link: "/partnership-contact"
    },
    {
      title: "Technical Support",
      description: "Get expert guidance on API specifications, synthesis pathways, and regulatory requirements.",
      icon: "MessageCircle",
      color: "trust",
      action: "Contact Technical Team",
      link: "/partnership-contact"
    },
    {
      title: "Sample Requests",
      description: "Request API samples for evaluation and testing in your pharmaceutical development programs.",
      icon: "Package",
      color: "conversion",
      action: "Request Samples",
      link: "/products-api-catalog"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        button: "bg-primary hover:bg-primary/90 text-primary-foreground"
      },
      trust: {
        bg: "bg-trust/10",
        text: "text-trust",
        border: "border-trust/20",
        button: "bg-trust hover:bg-trust/90 text-trust-foreground"
      },
      conversion: {
        bg: "bg-conversion/10",
        text: "text-conversion",
        border: "border-conversion/20",
        button: "bg-conversion hover:bg-conversion/90 text-conversion-foreground"
      }
    };
    return colorMap?.[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Cancer Treatment Together?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Join leading pharmaceutical companies worldwide in developing life-saving oncology treatments. Let's discuss how our precision molecules can accelerate your next breakthrough.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products-api-catalog">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Package"
                  iconPosition="left"
                  className="btn-conversion w-full sm:w-auto"
                >
                  Explore API Portfolio
                </Button>
              </Link>
              <Link to="/partnership-contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Options Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactOptions?.map((option, index) => {
              const colors = getColorClasses(option?.color);
              return (
                <div
                  key={index}
                  className={`bg-card border ${colors?.border} rounded-2xl p-8 text-center card-hover transition-all duration-500`}
                >
                  <div className={`w-16 h-16 ${colors?.bg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon name={option?.icon} size={32} className={colors?.text} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {option?.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {option?.description}
                  </p>
                  <Link to={option?.link}>
                    <Button
                      variant="default"
                      size="sm"
                      className={colors?.button}
                      fullWidth
                    >
                      {option?.action}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Stay Updated on API Innovations
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get the latest insights on oncology API developments, regulatory updates, and industry trends delivered to your inbox monthly.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-trust" />
                      <span>Monthly industry insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-trust" />
                      <span>Regulatory updates</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  {!isSubscribed ? (
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e?.target?.value)}
                        required
                        className="w-full"
                      />
                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        iconName="Mail"
                        iconPosition="left"
                        fullWidth
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Subscribe to Updates
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center p-8 bg-trust/5 rounded-xl">
                      <Icon name="CheckCircle" size={48} className="text-trust mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Successfully Subscribed!
                      </h4>
                      <p className="text-muted-foreground">
                        Thank you for subscribing. You'll receive our next update soon.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
              <Link to="/about-us-company-story" className="hover:text-primary transition-colors duration-300">
                Learn About Our Story
              </Link>
              <span>•</span>
              <Link to="/products-api-catalog" className="hover:text-primary transition-colors duration-300">
                Browse API Catalog
              </Link>
              <span>•</span>
              <Link to="/partnership-contact" className="hover:text-primary transition-colors duration-300">
                Partnership Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;