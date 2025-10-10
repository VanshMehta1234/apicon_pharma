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
    { name: 'Contact', path: '/contact', icon: 'Mail' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-scientific bg-background shadow-md border-b border-border`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <div className="relative flex items-center h-12 sm:h-14 transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src="/assets/images/logo.png"
                  alt="Apicon Pharma Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-all duration-300"
                  loading="eager"
                />
              </div>
                <div className="flex flex-col justify-center h-full">
                  <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-scientific text-center">
                    Apicon Pharma
                  </h1>
                </div>
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-scientific ${
                  location.pathname === item?.path
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:text-primary hover:bg-accent'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
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
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-scientific w-full ${
                      location.pathname === item?.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </Link>
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