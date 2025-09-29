import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = ['All', 'Oncology'];

  const products = [
    {
      id: 1,
      name: 'Letrozole',
      casNumber: '112809-51-5',
      category: 'Oncology',
      purity: 99.5,
      price: 0,
      unit: 'API',
      therapeutic: 'Aromatase Inhibitor',
      placeholderImage: '/assets/images/p1.png',
      image: '/assets/images/Letrozole.jpg',
      description: 'Potent non-steroidal aromatase inhibitor for hormone-sensitive breast cancer.',
      availability: 'In Stock'
    },
    {
      id: 2,
      name: 'Imatinib',
      casNumber: '152459-95-5',
      category: 'Oncology',
      purity: 99.2,
      price: 0,
      unit: 'API',
      therapeutic: 'Tyrosine Kinase Inhibitor',
      placeholderImage: '/assets/images/p3.png',
      image: '/assets/images/Imatinib.jpg',
      description: 'First-in-class BCR-ABL tyrosine kinase inhibitor for CML and other malignancies.',
      availability: 'In Stock'
    },
    {
      id: 3,
      name: 'Nilotinib',
      casNumber: '641571-10-0',
      category: 'Oncology',
      purity: 99.0,
      price: 0,
      unit: 'API',
      therapeutic: 'Tyrosine Kinase Inhibitor',
      placeholderImage: '/assets/images/p4.png',
      image: '/assets/images/Nilotinib.jpg',
      description: 'Second-generation BCR-ABL tyrosine kinase inhibitor designed to overcome resistance.',
      availability: 'In Stock'
    },
    {
      id: 4,
      name: 'Enzalutamide',
      casNumber: '915087-33-1',
      category: 'Oncology',
      purity: 99.3,
      price: 0,
      unit: 'API',
      therapeutic: 'Androgen Receptor Inhibitor',
      placeholderImage: '/assets/images/p5.png',
      image: '/assets/images/Enzalutamide.png',
      description: 'Androgen receptor signaling inhibitor for metastatic castration-resistant prostate cancer.',
      availability: 'In Stock'
    }
  ];

  // Filter products
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.casNumber.includes(searchTerm);
    return categoryMatch && searchMatch;
  });

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-primary/20 shadow-sm mb-6">
            <Icon name="Package" size={18} className="text-primary mr-2" />
            <span className="text-sm font-semibold text-primary">PHARMACEUTICAL API PORTFOLIO</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Precision APIs for
            <br />
            <span className="text-primary">Life-Saving Therapies</span>
          </h2>

          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Discover our comprehensive collection of high-quality pharmaceutical APIs with detailed molecular information, regulatory compliance, and proven therapeutic efficacy.
          </p>

          {/* Search & Filter Bar */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transition-all duration-800 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Bar */}
              <div className="relative md:col-span-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="Search" size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or CAS number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Counter */}
            <div className="mt-4 flex items-center justify-between text-gray-600 text-sm">
              <span>
                Showing <span className="font-semibold text-primary">{filteredProducts.length}</span> of {products.length} products
              </span>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={14} className="text-green-600" />
                <span>All products are cGMP certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative bg-white h-64 md:h-72 overflow-hidden flex items-center justify-center">
                {/* Default: per-product placeholder (fully contained) */}
                <img
                  src={product.placeholderImage || '/assets/images/p2.png'}
                  alt={`${product.name} laboratory`}
                  className="max-h-full max-w-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                {/* Hover: specific product image (fully contained) */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 m-auto max-h-full max-w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                

                {/* Under Development Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                  Under Development
                </div>

                {/* Price */}
                <div className="absolute bottom-3 right-3 text-white text-right">
                  <div className="text-sm opacity-90">{product.therapeutic || product.unit}</div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gray-600 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Hash" size={14} className="text-primary" />
                      <span className="font-mono">CAS: {product.casNumber}</span>
                    </div>
                    {product.therapeutic && (
                      <div className="flex items-center gap-1">
                        <Icon name="Beaker" size={14} className="text-primary" />
                        <span>{product.therapeutic}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Removed non-functional action buttons */}
              </div>
            </div>
          ))}
        </div>

        {/* Removed non-functional CTA buttons; keeping informational copy */}
        <div className="text-center">
          <p className="text-gray-600 mt-4 text-sm">
            Can't find what you're looking for? Our team can synthesize custom APIs to your exact specifications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
