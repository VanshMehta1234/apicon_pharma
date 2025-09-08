import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ComparisonPanel = ({ comparedProducts, onRemoveFromComparison, onClearComparison, onExportComparison }) => {
  if (comparedProducts?.length === 0) return null;

  const getRegulatoryStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'text-success bg-success/10';
      case 'Under Review': return 'text-warning bg-warning/10';
      case 'Development': return 'text-primary bg-primary/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getPurityColor = (purity) => {
    if (purity >= 99) return 'text-success';
    if (purity >= 95) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Icon name="GitCompare" size={20} className="text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Compare APIs ({comparedProducts?.length}/4)
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              onClick={onExportComparison}
              disabled={comparedProducts?.length < 2}
            >
              Export
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClearComparison}
            >
              Clear All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
          {comparedProducts?.map((product) => (
            <div key={product?.id} className="bg-muted rounded-lg p-4 relative">
              <button
                onClick={() => onRemoveFromComparison(product?.id)}
                className="absolute top-2 right-2 p-1 bg-background/80 rounded-full hover:bg-background transition-colors"
              >
                <Icon name="X" size={14} />
              </button>

              {/* Product Header */}
              <div className="mb-3">
                <h4 className="font-medium text-foreground text-sm mb-1">{product?.name}</h4>
                <p className="text-xs text-muted-foreground">{product?.casNumber}</p>
              </div>

              {/* Molecular Structure */}
              <div className="mb-3">
                <div className="bg-background rounded p-2 h-16 flex items-center justify-center">
                  <Image
                    src={product?.molecularStructure}
                    alt={`${product?.name} structure`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Key Specs */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Purity:</span>
                  <span className={`font-medium ${getPurityColor(product?.purity)}`}>
                    {product?.purity}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">MW:</span>
                  <span className="font-medium text-foreground">{product?.molecularWeight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lead Time:</span>
                  <span className="font-medium text-foreground">{product?.leadTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Complexity:</span>
                  <span className="font-medium text-foreground">{product?.synthesisComplexity}/5</span>
                </div>
              </div>

              {/* Therapeutic Area */}
              <div className="mt-3">
                <span className="inline-block px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                  {product?.therapeuticArea}
                </span>
              </div>

              {/* Regulatory Status */}
              <div className="mt-3">
                <p className="text-xs text-muted-foreground mb-1">Regulatory:</p>
                <div className="flex flex-wrap gap-1">
                  {product?.regulatoryStatus?.slice(0, 2)?.map((status, index) => (
                    <span
                      key={index}
                      className={`inline-block px-1 py-0.5 rounded text-xs ${getRegulatoryStatusColor(status?.status)}`}
                    >
                      {status?.authority}
                    </span>
                  ))}
                  {product?.regulatoryStatus?.length > 2 && (
                    <span className="text-xs text-muted-foreground">
                      +{product?.regulatoryStatus?.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add More Placeholder */}
          {comparedProducts?.length < 4 && (
            <div className="bg-muted/50 rounded-lg p-4 border-2 border-dashed border-border flex flex-col items-center justify-center text-center">
              <Icon name="Plus" size={24} className="text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Add up to {4 - comparedProducts?.length} more APIs to compare
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPanel;