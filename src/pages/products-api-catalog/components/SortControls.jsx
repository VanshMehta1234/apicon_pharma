import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SortControls = ({ 
  sortBy, 
  sortOrder, 
  onSortChange, 
  viewMode, 
  onViewModeChange, 
  totalResults,
  currentPage,
  itemsPerPage 
}) => {
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'purity', label: 'Purity' },
    { value: 'molecularWeight', label: 'Molecular Weight' },
    { value: 'leadTime', label: 'Lead Time' },
    { value: 'synthesisComplexity', label: 'Synthesis Complexity' },
    { value: 'therapeuticArea', label: 'Therapeutic Area' },
    { value: 'dateAdded', label: 'Date Added' },
    { value: 'availability', label: 'Availability' }
  ];

  const handleSortByChange = (value) => {
    onSortChange(value, sortOrder);
  };

  const handleSortOrderToggle = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    onSortChange(sortBy, newOrder);
  };

  const getResultsText = () => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalResults);
    return `${startItem}-${endItem} of ${totalResults} APIs`;
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card border border-border rounded-lg p-4">
      {/* Results Count */}
      <div className="flex items-center space-x-2">
        <Icon name="Database" size={16} className="text-muted-foreground" />
        <span className="text-sm text-foreground font-medium">
          {getResultsText()}
        </span>
      </div>

      {/* Sort and View Controls */}
      <div className="flex items-center space-x-4">
        {/* Sort Controls */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
          <div className="flex items-center space-x-1">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={handleSortByChange}
              className="min-w-[140px]"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleSortOrderToggle}
              iconName={sortOrder === 'asc' ? 'ArrowUp' : 'ArrowDown'}
              title={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
            />
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-1 border border-border rounded-md p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`}
            title="Grid view"
          >
            <Icon name="Grid3X3" size={16} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`}
            title="List view"
          >
            <Icon name="List" size={16} />
          </button>
          <button
            onClick={() => onViewModeChange('table')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'table' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`}
            title="Table view"
          >
            <Icon name="Table" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortControls;