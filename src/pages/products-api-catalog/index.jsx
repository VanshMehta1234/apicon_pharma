import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProductCard from './components/ProductCard';
import FilterPanel from './components/FilterPanel';
import ComparisonPanel from './components/ComparisonPanel';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import ProductTable from './components/ProductTable';
import Pagination from './components/Pagination';

const ProductsAPICatalog = () => {
  // Mock data for APIs
  const mockProducts = [
    {
      id: 1,
      name: "Doxorubicin Hydrochloride",
      casNumber: "25316-40-9",
      iupacName: "(7S,9S)-7-[(2R,4S,5S,6S)-4-amino-5-hydroxy-6-methyloxan-2-yl]oxy-6,9,11-trihydroxy-9-(2-hydroxyacetyl)-4-methoxy-8,10-dihydro-7H-tetracene-5,12-dione;hydrochloride",
      therapeuticArea: "Oncology",
      purity: 99.5,
      molecularWeight: 579.98,
      leadTime: "4-6 weeks",
      availableQuantity: "50kg",
      synthesisComplexity: 4,
      solubility: "Soluble in water, methanol",
      storageConditions: "Store at 2-8°C, protect from light",
      molecularStructure: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=150&fit=crop",
      regulatoryStatus: [
        { authority: "FDA", status: "Approved" },
        { authority: "EMA", status: "Approved" },
        { authority: "PMDA", status: "Approved" }
      ],
      isNew: false,
      dateAdded: new Date('2024-01-15')
    },
    {
      id: 2,
      name: "Paclitaxel",
      casNumber: "33069-62-4",
      iupacName: "(1S,2S,3R,4S,7R,9S,10S,12R,15S)-4,12-diacetoxy-15-{[(2R,3S)-3-benzamido-2-hydroxy-3-phenylpropanoyl]oxy}-1-hydroxy-10,14,17,17-tetramethyl-11-oxo-6-oxatetracyclo[11.3.1.0³,¹⁰.0⁴,⁷]heptadec-13-en-2-yl benzoate",
      therapeuticArea: "Oncology",
      purity: 98.8,
      molecularWeight: 853.91,
      leadTime: "6-8 weeks",
      availableQuantity: "25kg",
      synthesisComplexity: 5,
      solubility: "Practically insoluble in water",
      storageConditions: "Store at room temperature, protect from light",
      molecularStructure: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=200&h=150&fit=crop",
      regulatoryStatus: [
        { authority: "FDA", status: "Approved" },
        { authority: "EMA", status: "Approved" },
        { authority: "NMPA", status: "Under Review" }
      ],
      isNew: true,
      dateAdded: new Date('2024-08-20')
    },
    {
      id: 3,
      name: "Imatinib Mesylate",
      casNumber: "220127-57-1",
      iupacName: "4-[(4-methylpiperazin-1-yl)methyl]-N-[4-methyl-3-[(4-pyridin-3-ylpyrimidin-2-yl)amino]phenyl]benzamide;methanesulfonic acid",
      therapeuticArea: "Oncology",
      purity: 99.2,
      molecularWeight: 589.71,
      leadTime: "3-4 weeks",
      availableQuantity: "100kg",
      synthesisComplexity: 3,
      solubility: "Soluble in water",
      storageConditions: "Store at room temperature",
      molecularStructure: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=200&h=150&fit=crop",
      regulatoryStatus: [
        { authority: "FDA", status: "Approved" },
        { authority: "EMA", status: "Approved" },
        { authority: "TGA", status: "Approved" }
      ],
      isNew: false,
      dateAdded: new Date('2023-11-10')
    },
    {
      id: 4,
      name: "Sorafenib Tosylate",
      casNumber: "475207-59-1",
      iupacName: "4-[4-[[4-chloro-3-(trifluoromethyl)phenyl]carbamoylamino]phenoxy]-N-methylpyridine-2-carboxamide;4-methylbenzenesulfonic acid",
      therapeuticArea: "Oncology",
      purity: 98.5,
      molecularWeight: 637.03,
      leadTime: "5-7 weeks",
      availableQuantity: "30kg",
      synthesisComplexity: 4,
      solubility: "Slightly soluble in water",
      storageConditions: "Store at 2-8°C",
      molecularStructure: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=200&h=150&fit=crop",
      regulatoryStatus: [
        { authority: "FDA", status: "Approved" },
        { authority: "EMA", status: "Approved" },
        { authority: "HC", status: "Under Review" }
      ],
      isNew: true,
      dateAdded: new Date('2024-09-01')
    },
    {
      id: 5,
      name: "Erlotinib Hydrochloride",
      casNumber: "183319-69-9",
      iupacName: "N-(3-ethynylphenyl)-6,7-bis(2-methoxyethoxy)quinazolin-4-amine;hydrochloride",
      therapeuticArea: "Oncology",
      purity: 99.8,
      molecularWeight: 429.90,
      leadTime: "4-5 weeks",
      availableQuantity: "75kg",
      synthesisComplexity: 3,
      solubility: "Soluble in DMSO",
      storageConditions: "Store at room temperature, protect from moisture",
      molecularStructure: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=200&h=150&fit=crop",
      regulatoryStatus: [
        { authority: "FDA", status: "Approved" },
        { authority: "EMA", status: "Approved" },
        { authority: "PMDA", status: "Approved" }
      ],
      isNew: false,
      dateAdded: new Date('2024-02-28')
    },
    {
      id: 6,
      name: "Bevacizumab",
      casNumber: "216974-75-3",
      iupacName: "Recombinant humanized monoclonal antibody",
      therapeuticArea: "Oncology",
      purity: 97.5,
      molecularWeight: 149000,
      leadTime: "8-12 weeks",
      availableQuantity: "5kg",
      synthesisComplexity: 5,
      solubility: "Soluble in aqueous buffer",
      storageConditions: "Store at 2-8°C, do not freeze",
      molecularStructure: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop",
      regulatoryStatus: [
        { authority: "FDA", status: "Approved" },
        { authority: "EMA", status: "Approved" },
        { authority: "NMPA", status: "Development" }
      ],
      isNew: true,
      dateAdded: new Date('2024-08-15')
    }
  ];

  // Search suggestions
  const searchSuggestions = [
    "Doxorubicin Hydrochloride",
    "Paclitaxel",
    "Imatinib Mesylate",
    "Sorafenib Tosylate",
    "Erlotinib Hydrochloride",
    "Bevacizumab",
    "25316-40-9",
    "33069-62-4",
    "220127-57-1",
    "Oncology",
    "Cardiovascular",
    "Neurology",
    "Immunology"
  ];

  // State management
  const [filters, setFilters] = useState({
    search: '',
    therapeuticArea: 'all',
    purityRange: 'all',
    synthesisComplexity: 'all',
    molecularWeightMin: '',
    molecularWeightMax: '',
    regulatoryAuthorities: [],
    availableOnly: false,
    newProducts: false
  });

  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [comparedProducts, setComparedProducts] = useState([]);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts?.filter(product => {
      // Search filter
      if (filters?.search) {
        const searchTerm = filters?.search?.toLowerCase();
        const matchesSearch = 
          product?.name?.toLowerCase()?.includes(searchTerm) ||
          product?.casNumber?.toLowerCase()?.includes(searchTerm) ||
          product?.iupacName?.toLowerCase()?.includes(searchTerm) ||
          product?.therapeuticArea?.toLowerCase()?.includes(searchTerm);
        if (!matchesSearch) return false;
      }

      // Therapeutic area filter
      if (filters?.therapeuticArea !== 'all') {
        if (product?.therapeuticArea?.toLowerCase() !== filters?.therapeuticArea?.toLowerCase()) {
          return false;
        }
      }

      // Purity filter
      if (filters?.purityRange !== 'all') {
        const purity = product?.purity;
        switch (filters?.purityRange) {
          case '99+':
            if (purity < 99) return false;
            break;
          case '95-99':
            if (purity < 95 || purity >= 99) return false;
            break;
          case '90-95':
            if (purity < 90 || purity >= 95) return false;
            break;
          case '<90':
            if (purity >= 90) return false;
            break;
        }
      }

      // Synthesis complexity filter
      if (filters?.synthesisComplexity !== 'all') {
        if (product?.synthesisComplexity !== parseInt(filters?.synthesisComplexity)) {
          return false;
        }
      }

      // Molecular weight filter
      if (filters?.molecularWeightMin && product?.molecularWeight < parseFloat(filters?.molecularWeightMin)) {
        return false;
      }
      if (filters?.molecularWeightMax && product?.molecularWeight > parseFloat(filters?.molecularWeightMax)) {
        return false;
      }

      // Regulatory authorities filter
      if (filters?.regulatoryAuthorities?.length > 0) {
        const hasApproval = product?.regulatoryStatus?.some(status => 
          filters?.regulatoryAuthorities?.includes(status?.authority?.toLowerCase()) && 
          status?.status === 'Approved'
        );
        if (!hasApproval) return false;
      }

      // Available only filter
      if (filters?.availableOnly) {
        const availableQty = parseInt(product?.availableQuantity);
        if (availableQty <= 0) return false;
      }

      // New products filter
      if (filters?.newProducts) {
        const sixMonthsAgo = new Date();
        sixMonthsAgo?.setMonth(sixMonthsAgo?.getMonth() - 6);
        if (product?.dateAdded < sixMonthsAgo) return false;
      }

      return true;
    });

    // Sort products
    filtered?.sort((a, b) => {
      let aValue = a?.[sortBy];
      let bValue = b?.[sortBy];

      if (sortBy === 'dateAdded') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (typeof aValue === 'string') {
        aValue = aValue?.toLowerCase();
        bValue = bValue?.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [filters, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts?.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Event handlers
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      search: '',
      therapeuticArea: 'all',
      purityRange: 'all',
      synthesisComplexity: 'all',
      molecularWeightMin: '',
      molecularWeightMax: '',
      regulatoryAuthorities: [],
      availableOnly: false,
      newProducts: false
    };
    setFilters(clearedFilters);
    setCurrentPage(1);
  };

  const handleSearch = (searchTerm) => {
    setFilters(prev => ({ ...prev, search: searchTerm }));
    setCurrentPage(1);
  };

  const handleSortChange = (newSortBy, newSortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    setCurrentPage(1);
  };

  const handleCompare = (productId) => {
    const product = mockProducts?.find(p => p?.id === productId);
    if (!product) return;

    const isAlreadyComparing = comparedProducts?.some(p => p?.id === productId);
    
    if (isAlreadyComparing) {
      setComparedProducts(prev => prev?.filter(p => p?.id !== productId));
    } else if (comparedProducts?.length < 4) {
      setComparedProducts(prev => [...prev, product]);
    }
  };

  const handleRemoveFromComparison = (productId) => {
    setComparedProducts(prev => prev?.filter(p => p?.id !== productId));
  };

  const handleClearComparison = () => {
    setComparedProducts([]);
  };

  const handleExportComparison = () => {
    // Mock export functionality
    console.log('Exporting comparison:', comparedProducts);
    alert('Comparison exported successfully!');
  };

  const handleViewDetails = (productId) => {
    // Mock view details functionality
    console.log('Viewing details for product:', productId);
    alert(`Viewing details for product ID: ${productId}`);
  };

  const handleRequestSample = (productId) => {
    // Mock sample request functionality
    console.log('Requesting sample for product:', productId);
    alert(`Sample request submitted for product ID: ${productId}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>API Catalog - Precision Molecules for Life | Apicon Pharma</title>
        <meta name="description" content="Explore our comprehensive catalog of high-quality oncology APIs with advanced filtering, molecular structure visualization, and regulatory documentation. Find the perfect API for your pharmaceutical formulations." />
        <meta name="keywords" content="pharmaceutical APIs, oncology APIs, molecular structures, drug development, pharmaceutical ingredients, regulatory approval, API catalog" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 via-background to-conversion/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                API Catalog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive collection of high-quality pharmaceutical APIs with detailed molecular information, regulatory documentation, and advanced search capabilities.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar 
                onSearch={handleSearch}
                suggestions={searchSuggestions}
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {filteredAndSortedProducts?.length}
                </div>
                <div className="text-sm text-muted-foreground">APIs Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-1">
                  {mockProducts?.filter(p => p?.regulatoryStatus?.some(s => s?.status === 'Approved'))?.length}
                </div>
                <div className="text-sm text-muted-foreground">FDA Approved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-conversion mb-1">
                  {mockProducts?.filter(p => p?.isNew)?.length}
                </div>
                <div className="text-sm text-muted-foreground">New This Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-1">
                  {new Set(mockProducts.map(p => p.therapeuticArea))?.size}
                </div>
                <div className="text-sm text-muted-foreground">Therapeutic Areas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Panel */}
              <div className="lg:w-80 flex-shrink-0">
                <FilterPanel
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  onClearFilters={handleClearFilters}
                  isOpen={isFilterPanelOpen}
                  onToggle={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                />
              </div>

              {/* Products Section */}
              <div className="flex-1">
                {/* Sort Controls */}
                <div className="mb-6">
                  <SortControls
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    onSortChange={handleSortChange}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                    totalResults={filteredAndSortedProducts?.length}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                  />
                </div>

                {/* Products Display */}
                {paginatedProducts?.length > 0 ? (
                  <>
                    {viewMode === 'grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                        {paginatedProducts?.map((product) => (
                          <ProductCard
                            key={product?.id}
                            product={product}
                            onCompare={handleCompare}
                            isComparing={comparedProducts?.some(p => p?.id === product?.id)}
                            onViewDetails={handleViewDetails}
                            onRequestSample={handleRequestSample}
                          />
                        ))}
                      </div>
                    )}

                    {viewMode === 'list' && (
                      <div className="space-y-4 mb-8">
                        {paginatedProducts?.map((product) => (
                          <ProductCard
                            key={product?.id}
                            product={product}
                            onCompare={handleCompare}
                            isComparing={comparedProducts?.some(p => p?.id === product?.id)}
                            onViewDetails={handleViewDetails}
                            onRequestSample={handleRequestSample}
                          />
                        ))}
                      </div>
                    )}

                    {viewMode === 'table' && (
                      <div className="mb-8">
                        <ProductTable
                          products={paginatedProducts}
                          onCompare={handleCompare}
                          comparedProducts={comparedProducts}
                          onViewDetails={handleViewDetails}
                          onRequestSample={handleRequestSample}
                        />
                      </div>
                    )}

                    {/* Pagination */}
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      totalItems={filteredAndSortedProducts?.length}
                      itemsPerPage={itemsPerPage}
                      onPageChange={handlePageChange}
                      onItemsPerPageChange={handleItemsPerPageChange}
                    />
                  </>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No APIs Found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search criteria or filters to find more results.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleClearFilters}
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Panel */}
        <ComparisonPanel
          comparedProducts={comparedProducts}
          onRemoveFromComparison={handleRemoveFromComparison}
          onClearComparison={handleClearComparison}
          onExportComparison={handleExportComparison}
        />
      </div>
    </>
  );
};

export default ProductsAPICatalog;