import React, { useState } from 'react';

import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ filters, onFiltersChange, onClearFilters, isOpen, onToggle }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const therapeuticAreas = [
    { value: 'all', label: 'All Therapeutic Areas' },
    { value: 'oncology', label: 'Oncology' },
    { value: 'cardiovascular', label: 'Cardiovascular' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'immunology', label: 'Immunology' },
    { value: 'endocrinology', label: 'Endocrinology' },
    { value: 'gastroenterology', label: 'Gastroenterology' }
  ];

  const regulatoryAuthorities = [
    { value: 'fda', label: 'FDA (US)' },
    { value: 'ema', label: 'EMA (EU)' },
    { value: 'pmda', label: 'PMDA (Japan)' },
    { value: 'nmpa', label: 'NMPA (China)' },
    { value: 'hc', label: 'Health Canada' },
    { value: 'tga', label: 'TGA (Australia)' }
  ];

  const purityRanges = [
    { value: 'all', label: 'All Purity Levels' },
    { value: '99+', label: '≥99%' },
    { value: '95-99', label: '95-99%' },
    { value: '90-95', label: '90-95%' },
    { value: '<90', label: '<90%' }
  ];

  const synthesisComplexity = [
    { value: 'all', label: 'All Complexity Levels' },
    { value: '1', label: 'Level 1 (Simple)' },
    { value: '2', label: 'Level 2 (Moderate)' },
    { value: '3', label: 'Level 3 (Complex)' },
    { value: '4', label: 'Level 4 (Advanced)' },
    { value: '5', label: 'Level 5 (Expert)' }
  ];

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...localFilters, [key]: value };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handleRegulatoryChange = (authority, checked) => {
    const updatedAuthorities = checked
      ? [...localFilters?.regulatoryAuthorities, authority]
      : localFilters?.regulatoryAuthorities?.filter(auth => auth !== authority);
    
    const updatedFilters = { ...localFilters, regulatoryAuthorities: updatedAuthorities };
    setLocalFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const handleClearAll = () => {
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
    setLocalFilters(clearedFilters);
    onClearFilters();
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (localFilters?.search) count++;
    if (localFilters?.therapeuticArea !== 'all') count++;
    if (localFilters?.purityRange !== 'all') count++;
    if (localFilters?.synthesisComplexity !== 'all') count++;
    if (localFilters?.molecularWeightMin || localFilters?.molecularWeightMax) count++;
    if (localFilters?.regulatoryAuthorities?.length > 0) count++;
    if (localFilters?.availableOnly) count++;
    if (localFilters?.newProducts) count++;
    return count;
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          fullWidth
        >
          Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`bg-card border border-border rounded-lg p-6 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              iconName="X"
              iconPosition="left"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {/* Search */}
          <div>
            <Input
              label="Search APIs"
              type="search"
              placeholder="CAS number, IUPAC name, or keyword..."
              value={localFilters?.search}
              onChange={(e) => handleFilterChange('search', e?.target?.value)}
            />
          </div>

          {/* Therapeutic Area */}
          <div>
            <Select
              label="Therapeutic Area"
              options={therapeuticAreas}
              value={localFilters?.therapeuticArea}
              onChange={(value) => handleFilterChange('therapeuticArea', value)}
            />
          </div>

          {/* Purity Range */}
          <div>
            <Select
              label="Purity Range"
              options={purityRanges}
              value={localFilters?.purityRange}
              onChange={(value) => handleFilterChange('purityRange', value)}
            />
          </div>

          {/* Synthesis Complexity */}
          <div>
            <Select
              label="Synthesis Complexity"
              options={synthesisComplexity}
              value={localFilters?.synthesisComplexity}
              onChange={(value) => handleFilterChange('synthesisComplexity', value)}
            />
          </div>

          {/* Molecular Weight Range */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Molecular Weight (g/mol)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="number"
                placeholder="Min"
                value={localFilters?.molecularWeightMin}
                onChange={(e) => handleFilterChange('molecularWeightMin', e?.target?.value)}
              />
              <Input
                type="number"
                placeholder="Max"
                value={localFilters?.molecularWeightMax}
                onChange={(e) => handleFilterChange('molecularWeightMax', e?.target?.value)}
              />
            </div>
          </div>

          {/* Regulatory Authorities */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Regulatory Approval
            </label>
            <div className="space-y-2">
              {regulatoryAuthorities?.map((authority) => (
                <Checkbox
                  key={authority?.value}
                  label={authority?.label}
                  checked={localFilters?.regulatoryAuthorities?.includes(authority?.value)}
                  onChange={(e) => handleRegulatoryChange(authority?.value, e?.target?.checked)}
                />
              ))}
            </div>
          </div>

          {/* Additional Filters */}
          <div className="border-t border-border pt-6">
            <label className="block text-sm font-medium text-foreground mb-3">
              Additional Options
            </label>
            <div className="space-y-2">
              <Checkbox
                label="Available for immediate shipment"
                checked={localFilters?.availableOnly}
                onChange={(e) => handleFilterChange('availableOnly', e?.target?.checked)}
              />
              <Checkbox
                label="New products (last 6 months)"
                checked={localFilters?.newProducts}
                onChange={(e) => handleFilterChange('newProducts', e?.target?.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;