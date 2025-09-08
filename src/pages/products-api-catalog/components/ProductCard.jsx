import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onCompare, isComparing, onViewDetails, onRequestSample }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 card-hover">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{product?.name}</h3>
          <p className="text-sm text-muted-foreground">{product?.casNumber}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onCompare(product?.id)}
            className={`p-2 rounded-md transition-colors ${
              isComparing 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
            }`}
            title="Add to comparison"
          >
            <Icon name="GitCompare" size={16} />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-md bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground transition-colors"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
          </button>
        </div>
      </div>
      {/* Molecular Structure */}
      <div className="mb-4">
        <div className="relative bg-muted rounded-lg p-4 h-32 flex items-center justify-center">
          <Image
            src={product?.molecularStructure}
            alt={`${product?.name} molecular structure`}
            className="max-h-full max-w-full object-contain"
          />
          <button
            onClick={() => onViewDetails(product?.id)}
            className="absolute top-2 right-2 p-1 bg-background/80 rounded-md hover:bg-background transition-colors"
            title="View 3D structure"
          >
            <Icon name="Maximize2" size={14} />
          </button>
        </div>
      </div>
      {/* Key Information */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Purity</p>
          <p className={`text-sm font-medium ${getPurityColor(product?.purity)}`}>
            {product?.purity}%
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Molecular Weight</p>
          <p className="text-sm font-medium text-foreground">{product?.molecularWeight} g/mol</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Lead Time</p>
          <p className="text-sm font-medium text-foreground">{product?.leadTime}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Available Qty</p>
          <p className="text-sm font-medium text-foreground">{product?.availableQuantity}</p>
        </div>
      </div>
      {/* Therapeutic Area */}
      <div className="mb-4">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {product?.therapeuticArea}
        </span>
      </div>
      {/* Regulatory Status */}
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2">Regulatory Status</p>
        <div className="flex flex-wrap gap-2">
          {product?.regulatoryStatus?.map((status, index) => (
            <span
              key={index}
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRegulatoryStatusColor(status?.status)}`}
            >
              {status?.authority}: {status?.status}
            </span>
          ))}
        </div>
      </div>
      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-border pt-4 mb-4 space-y-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">IUPAC Name</p>
            <p className="text-sm text-foreground">{product?.iupacName}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Synthesis Complexity</p>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(product?.synthesisComplexity / 5) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{product?.synthesisComplexity}/5</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Solubility</p>
            <p className="text-sm text-foreground">{product?.solubility}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Storage Conditions</p>
            <p className="text-sm text-foreground">{product?.storageConditions}</p>
          </div>
        </div>
      )}
      {/* Actions */}
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          iconName="FileText"
          iconPosition="left"
          onClick={() => onViewDetails(product?.id)}
          className="flex-1"
        >
          Details
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="Download"
          iconPosition="left"
          onClick={() => onRequestSample(product?.id)}
          className="flex-1 bg-conversion hover:bg-conversion/90 text-conversion-foreground"
        >
          Sample
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;