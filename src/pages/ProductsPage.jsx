import React from 'react';
import Header from '../components/ui/Header';
import ProductsSection from './homepage/components/ProductsSection';
import Footer from '../components/Footer';

const ProductsPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-16">
      <ProductsSection />
    </main>
    <Footer />
  </div>
);

export default ProductsPage;
