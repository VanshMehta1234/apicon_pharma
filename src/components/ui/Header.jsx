import React, { useState, useEffect } from 'react';
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
    { name: 'Home', section: 'home', icon: 'Home' },
    { name: 'Products', section: 'products', icon: 'Package' },
    { name: 'About Us', section: 'about', icon: 'Building2' },
    { name: 'Contact', section: 'contact', icon: 'Mail' },
  ];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-scientific ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <div className="relative">
                <img
                  src="/assets/images/page1.bmp"
                  alt="Apicon Pharma Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover shadow-sm"
                  loading="eager"
                />
              </div>
              <div className="block">
                <h1 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-scientific">
                  Apicon Pharma
                </h1>
                <p className="text-xs text-muted-foreground -mt-1 hidden xs:block">
                  Precision Molecules for Life
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems?.map((item) => (
              <button
                key={item?.section}
                onClick={() => scrollToSection(item?.section)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-scientific ${
                  activeSection === item?.section
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:text-primary hover:bg-accent'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </button>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-md border border-border transition-all duration-scientific ${
              isMobileMenuOpen 
                ? 'bg-background text-foreground border-primary shadow-sm' 
                : 'bg-background text-muted-foreground hover:text-primary hover:border-primary/50'
            }`}
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border shadow-lg">
            <div className="px-4 py-4">
              {/* Navigation Items */}
              <div className="space-y-2">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.section}
                    onClick={() => scrollToSection(item?.section)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-scientific w-full ${
                      activeSection === item?.section
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </button>
                ))}
              </div>
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;