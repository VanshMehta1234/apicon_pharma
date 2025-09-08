import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProductTable = ({ products, onCompare, comparedProducts, onViewDetails, onRequestSample }) => {
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (column) => {
    if (sortColumn !== column) return 'ArrowUpDown';
    return sortDirection === 'asc' ? 'ArrowUp' : 'ArrowDown';
  };

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

  const isComparing = (productId) => {
    return comparedProducts?.some(p => p?.id === productId);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 w-12">
                <Icon name="GitCompare" size={16} className="text-muted-foreground" />
              </th>
              <th className="text-left p-4 w-16">Structure</th>
              <th className="text-left p-4 min-w-[200px]">
                <button
                  onClick={() => handleSort('name')}
                  className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>API Name</span>
                  <Icon name={getSortIcon('name')} size={14} />
                </button>
              </th>
              <th className="text-left p-4">
                <button
                  onClick={() => handleSort('casNumber')}
                  className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>CAS Number</span>
                  <Icon name={getSortIcon('casNumber')} size={14} />
                </button>
              </th>
              <th className="text-left p-4">
                <button
                  onClick={() => handleSort('therapeuticArea')}
                  className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>Therapeutic Area</span>
                  <Icon name={getSortIcon('therapeuticArea')} size={14} />
                </button>
              </th>
              <th className="text-left p-4">
                <button
                  onClick={() => handleSort('purity')}
                  className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>Purity</span>
                  <Icon name={getSortIcon('purity')} size={14} />
                </button>
              </th>
              <th className="text-left p-4">
                <button
                  onClick={() => handleSort('molecularWeight')}
                  className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>MW (g/mol)</span>
                  <Icon name={getSortIcon('molecularWeight')} size={14} />
                </button>
              </th>
              <th className="text-left p-4">
                <button
                  onClick={() => handleSort('leadTime')}
                  className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <span>Lead Time</span>
                  <Icon name={getSortIcon('leadTime')} size={14} />
                </button>
              </th>
              <th className="text-left p-4">Regulatory Status</th>
              <th className="text-left p-4 w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr
                key={product?.id}
                className={`border-t border-border hover:bg-muted/30 transition-colors ${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                }`}
              >
                <td className="p-4">
                  <button
                    onClick={() => onCompare(product?.id)}
                    className={`p-2 rounded-md transition-colors ${
                      isComparing(product?.id)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                    }`}
                    title="Add to comparison"
                  >
                    <Icon name="GitCompare" size={14} />
                  </button>
                </td>
                <td className="p-4">
                  <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                    <Image
                      src={product?.molecularStructure}
                      alt={`${product?.name} structure`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </td>
                <td className="p-4">
                  <div>
                    <p className="font-medium text-foreground">{product?.name}</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[180px]">
                      {product?.iupacName}
                    </p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="font-mono text-sm text-foreground">{product?.casNumber}</span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {product?.therapeuticArea}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`font-medium ${getPurityColor(product?.purity)}`}>
                    {product?.purity}%
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-foreground">{product?.molecularWeight}</span>
                </td>
                <td className="p-4">
                  <span className="text-foreground">{product?.leadTime}</span>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {product?.regulatoryStatus?.slice(0, 2)?.map((status, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRegulatoryStatusColor(status?.status)}`}
                      >
                        {status?.authority}
                      </span>
                    ))}
                    {product?.regulatoryStatus?.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{product?.regulatoryStatus?.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Eye"
                      onClick={() => onViewDetails(product?.id)}
                      title="View details"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Download"
                      onClick={() => onRequestSample(product?.id)}
                      title="Request sample"
                      className="text-conversion hover:text-conversion hover:bg-conversion/10"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;