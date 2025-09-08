import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/ui/Header';
import Icon from '../components/AppIcon';
import Button from '../components/ui/Button';

// Import sections from existing pages
import HeroSection from './homepage/components/HeroSection';
import FeatureGrid from './homepage/components/FeatureGrid';

// Simplified Products Section (without all the complex filtering)
const ProductsSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Doxorubicin Hydrochloride",
      casNumber: "25316-40-9",
      therapeuticArea: "Oncology",
      purity: 99.5,
      description: "High-purity oncology API for advanced cancer treatments with proven efficacy.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Paclitaxel",
      casNumber: "33069-62-4", 
      therapeuticArea: "Oncology",
      purity: 98.8,
      description: "Complex natural product API for targeted cancer therapy applications.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Imatinib Mesylate",
      casNumber: "220127-57-1",
      therapeuticArea: "Oncology",
      purity: 99.2,
      description: "Targeted therapy API for chronic myeloid leukemia treatment.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">API Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive collection of high-quality pharmaceutical APIs with detailed molecular information and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProducts?.map((product) => (
            <div key={product?.id} className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                <img 
                  src={product?.image} 
                  alt={product?.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                    {product?.therapeuticArea}
                  </span>
                  <span className="text-xs text-success font-medium">
                    {product?.purity}% Purity
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {product?.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  CAS: {product?.casNumber}
                </p>
                <p className="text-muted-foreground">
                  {product?.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  iconName="Eye"
                  iconPosition="left"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            iconName="Package"
            iconPosition="left"
            className="btn-conversion"
          >
            Explore Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

// Simplified About Us Section
const AboutUsSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="Building2" size={20} />
                <span className="text-sm font-medium uppercase tracking-wide">About Us</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Pioneering the Future of 
                <span className="text-gradient block mt-2">Oncology APIs</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the belief that every molecule matters in the fight against cancer, Apicon Pharma has been transforming pharmaceutical manufacturing through precision chemistry and unwavering commitment to quality since our inception.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-conversion">50M+</div>
                <div className="text-sm text-muted-foreground">Patients Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">200+</div>
                <div className="text-sm text-muted-foreground">API Products</div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Core Values</h3>
              <div className="grid gap-4">
                {[
                  { icon: "Shield", title: "Quality First", desc: "Uncompromising commitment to pharmaceutical excellence" },
                  { icon: "Users", title: "Patient Focus", desc: "Every molecule designed with patient outcomes in mind" },
                  { icon: "Zap", title: "Innovation", desc: "Cutting-edge R&D driving breakthrough therapies" }
                ]?.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={value?.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{value?.title}</h4>
                      <p className="text-sm text-muted-foreground">{value?.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop"
                alt="Modern pharmaceutical laboratory"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} />
                  <div>
                    <div className="text-sm font-medium">FDA Approved</div>
                    <div className="text-xs opacity-80">Since 2015</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={20} />
                  <div>
                    <div className="text-sm font-medium">Global Reach</div>
                    <div className="text-xs opacity-80">45+ Countries</div>
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

// Contact Form Section
const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to partner with us? Contact our team for strategic partnerships, custom synthesis, and more.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData?.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData?.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData?.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Inquiry Type *
                </label>
                <select
                  name="inquiryType"
                  required
                  value={formData?.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                >
                  <option value="">Select type</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="api">API Procurement</option>
                  <option value="custom">Custom Synthesis</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData?.message}
                onChange={handleInputChange}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-vertical"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                type="submit"
                variant="default"
                size="lg"
                iconName="Send"
                iconPosition="left"
                className="btn-conversion"
              >
                Send Message
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Schedule Call
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Icon name="Mail" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-foreground">Email</h4>
            <p className="text-muted-foreground">partnership@apiconpharma.com</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center mx-auto">
              <Icon name="Phone" size={24} className="text-conversion" />
            </div>
            <h4 className="font-semibold text-foreground">Phone</h4>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
              <Icon name="MapPin" size={24} className="text-success" />
            </div>
            <h4 className="font-semibold text-foreground">Location</h4>
            <p className="text-muted-foreground">Global Headquarters</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Navigation Component for smooth scrolling
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'contact'];
      const scrollPosition = window?.scrollY + 100;

      for (const section of sections) {
        const element = document?.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window?.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document?.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-20 right-8 z-40 hidden lg:block">
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg">
        <nav className="flex flex-col space-y-2">
          {[
            { id: 'home', label: 'Home', icon: 'Home' },
            { id: 'products', label: 'Products', icon: 'Package' },
            { id: 'about', label: 'About', icon: 'Building2' },
            { id: 'contact', label: 'Contact', icon: 'Mail' }
          ]?.map((item) => (
            <button
              key={item?.id}
              onClick={() => scrollToSection(item?.id)}
              className={`group relative p-3 rounded-full transition-all duration-300 ${
                activeSection === item?.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
              title={item?.label}
            >
              <Icon name={item?.icon} size={18} />
              <span className="absolute right-full mr-3 px-2 py-1 bg-card border border-border rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item?.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

const SinglePageApp = () => {
  return (
    <>
      <Helmet>
        <title>Apicon Pharma - Precision Molecules for Life-Saving Treatments | Oncology API Supplier</title>
        <meta name="description" content="Leading global supplier of oncology APIs, bridging cutting-edge chemistry with compassionate care. Explore our API portfolio, learn about our company, and partner with us for breakthrough treatments." />
        <meta name="keywords" content="oncology APIs, pharmaceutical APIs, precision molecules, API portfolio, pharmaceutical partnerships, Apicon Pharma, cancer treatment APIs" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <Navigation />
        
        <main>
          {/* Home Section */}
          <section id="home">
            <HeroSection />
            <FeatureGrid />
          </section>

          {/* Products Section */}
          <ProductsSection />

          {/* About Us Section */}
          <AboutUsSection />

          {/* Contact Form Section */}
          <ContactFormSection />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                      <circle cx="12" cy="5" r="2" fill="currentColor" />
                      <circle cx="6" cy="12" r="2" fill="currentColor" />
                      <circle cx="18" cy="12" r="2" fill="currentColor" />
                      <circle cx="12" cy="19" r="2" fill="currentColor" />
                      <path d="M12 7v4m-4.5-1.5L12 11m0 0l4.5-1.5M12 11v6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Apicon Pharma</h3>
                    <p className="text-sm text-muted-foreground">Precision Molecules for Life</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Leading global supplier of oncology APIs, bridging cutting-edge chemistry with compassionate care in the fight against cancer.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>FDA Approved</span>
                  <span>•</span>
                  <span>EMA Certified</span>
                  <span>•</span>
                  <span>ICH Compliant</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><button onClick={() => document?.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Products</button></li>
                  <li><button onClick={() => document?.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">About Us</button></li>
                  <li><button onClick={() => document?.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Contact</button></li>
                  <li><a href="#quality" className="hover:text-primary transition-colors">Quality Assurance</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>partnership@apiconpharma.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>Global Headquarters</li>
                  <li>Available 24/7</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Apicon Pharma. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
                <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#compliance" className="hover:text-primary transition-colors">Compliance</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SinglePageApp;