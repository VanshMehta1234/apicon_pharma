import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#06243A] via-[#08314F] to-[#0B406A] reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 reveal" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/assets/images/page1.bmp" alt="Apicon Pharma Logo" className="w-10 h-10 rounded-md object-cover shadow-sm" />
              <div>
                <h3 className="text-lg font-bold text-white">Apicon Pharma</h3>
                <p className="text-sm text-white/90">Precision Molecules for Life</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Leading global supplier of oncology APIs, bridging cutting-edge chemistry with compassionate care in the fight against cancer
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">FDA Approved</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">EMA Certified</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">ICH Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal" style={{ transitionDelay: '160ms' }}>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><button onClick={() => document?.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Products</button></li>
              <li><button onClick={() => document?.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => document?.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Contact</button></li>
              <li><a href="#quality" className="hover:text-primary transition-colors">Quality Assurance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="reveal" style={{ transitionDelay: '220ms' }}>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>partnership@apiconpharma.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Global Headquarters</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center reveal" style={{ transitionDelay: '280ms' }}>
          <p className="text-sm text-white/80">
            © {new Date()?.getFullYear()} Apicon Pharma. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-white/80">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#compliance" className="hover:text-primary transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



