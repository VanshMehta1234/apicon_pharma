import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';


const SearchBar = ({ onSearch, suggestions = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const filteredSuggestions = suggestions?.filter(suggestion =>
    suggestion?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  )?.slice(0, 8);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef?.current && !suggestionsRef?.current?.contains(event?.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    setSearchTerm(value);
    setShowSuggestions(value?.length > 0);
    setSelectedIndex(-1);
    onSearch(value);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || filteredSuggestions?.length === 0) return;

    switch (e?.key) {
      case 'ArrowDown':
        e?.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions?.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e?.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e?.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(filteredSuggestions?.[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    onSearch(suggestion);
    inputRef?.current?.focus();
  };

  const handleClear = () => {
    setSearchTerm('');
    setShowSuggestions(false);
    setSelectedIndex(-1);
    onSearch('');
    inputRef?.current?.focus();
  };

  return (
    <div className="relative" ref={suggestionsRef}>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          <Icon name="Search" size={20} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(searchTerm?.length > 0)}
          placeholder="Search by CAS number, IUPAC name, or therapeutic area..."
          className="w-full pl-10 pr-10 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        )}
      </div>
      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions?.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {filteredSuggestions?.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full text-left px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors ${
                index === selectedIndex ? 'bg-accent text-accent-foreground' : 'text-popover-foreground'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon name="Search" size={16} className="text-muted-foreground" />
                <span className="text-sm">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
      {/* Search Tips */}
      {showSuggestions && searchTerm?.length > 0 && filteredSuggestions?.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 p-4">
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">Search tips:</p>
            <ul className="space-y-1 text-xs">
              <li>• Use CAS numbers for exact matches (e.g., 50-02-2)</li>
              <li>• Search by therapeutic area (e.g., oncology, cardiology)</li>
              <li>• Use partial IUPAC names or common names</li>
              <li>• Try molecular weight ranges (e.g., 200-400)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;