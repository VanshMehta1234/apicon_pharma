import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import GlobalOffices from './components/GlobalOffices';
import SupportResources from './components/SupportResources';

const PartnershipContact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactHero />
        <ContactMethods />
        <ContactForm />
        <GlobalOffices />
        <SupportResources />
      </main>
    </div>
  );
};

export default PartnershipContact;