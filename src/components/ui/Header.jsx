import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Detect active section
      const sections = ['home', 'products', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Products', path: '/products', icon: 'Package' },
    { name: 'About Us', path: '/about', icon: 'Building2' },
    { name: 'Contact Us', path: '/contact', icon: 'Contact' },
  ];

  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document?.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm"
    >
      <div className="w-full border-b border-border/50">
        <div className="flex items-center justify-between h-[72px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative flex items-center transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src="/assets/images/logo.png"
                  alt="Apicon Pharma Logo"
                  className="h-11 w-auto object-contain transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  Apicon Pharma
                </h1>
              </div>
            </button>
          </div>

          {/* Desktop Navigation & Contact */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Navigation */}
            <nav className="flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item?.path
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-foreground hover:text-primary hover:bg-accent/50'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="flex items-center space-x-5 pl-6 border-l border-border/50">
              <a 
                href="mailto:info@apiconpharma.com" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                title="Email us"
              >
                <Icon name="Mail" size={18} className="text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all" />
                <span className="font-medium">info@apiconpharma.com</span>
              </a>
              
              <a 
                href="tel:+911234567890" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                title="Call us"
              >
                <Icon name="Phone" size={18} className="text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all" />
                <span className="font-medium">+91 12345 67890</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2.5 rounded-lg border border-border transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'bg-primary text-primary-foreground border-primary shadow-sm' 
                : 'bg-background text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-accent/30'
            }`}
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border/50 shadow-lg">
            <div className="px-4 py-5">
              {/* Navigation Items */}
              <div className="space-y-1 mb-5">
                {navigationItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full ${
                      location.pathname === item?.path
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full shadow-sm ${
                    location.pathname === '/contact'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-primary/90 text-primary-foreground hover:bg-primary'
                  }`}
                >
                  <Icon name="Mail" size={18} />
                  <span>Contact</span>
                </Link>
              </div>

              {/* Contact Info in Mobile */}
              <div className="pt-5 border-t border-border/50 space-y-3">
                <div className="text-xs font-bold text-muted-foreground/80 uppercase tracking-wider mb-3">
                  Get in Touch
                </div>
                <a 
                  href="mailto:info@apiconpharma.com" 
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="Mail" size={18} className="text-primary/70 group-hover:text-primary" />
                  <span className="font-medium">info@apiconpharma.com</span>
                </a>
                <a 
                  href="tel:+911234567890" 
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="Phone" size={18} className="text-primary/70 group-hover:text-primary" />
                  <span className="font-medium">+91 12345 67890</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
