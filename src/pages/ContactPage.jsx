import React from 'react';
import Header from '../components/ui/Header';
import ContactFormSection from './homepage/components/ContactFormSection';
import Footer from '../components/Footer';

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-16">
      <ContactFormSection />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
