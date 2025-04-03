'use client';

import { useState } from 'react';

const FilterTags = () => {
  // Mock category data
  const categories = [
    'Electronics',
    'Furniture',
    'Kabab',
    'Food',
    'Stationary',
    'Electronics',
    'Kabab',
    'Food',
    'Food',
    'Food',
    'Electronics',
    'Furniture',
    'Food',
  ];

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Price Range Slider
  const [priceRange, setPriceRange] = useState(50);

  return (
    <div className="space-y-6">
      {/* Price Range Slider */}
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Category Tags */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category, idx) => (
          <button
            key={`${category}-${idx}`}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedFilters.includes(category)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => toggleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Feature Toggles */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center justify-between">
          <label className="text-sm">Noise Cancellation</label>
          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-700">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0"
              // onChange={() => {}}
            />
            <span className="absolute left-1 top-1 w-3 h-3 rounded-full bg-blue-500 transition-transform"></span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm">Wireless</label>
          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-700">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0"
              // onChange={() => {}}
            />
            <span className="absolute left-1 top-1 w-3 h-3 rounded-full bg-gray-500 transition-transform"></span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm">Metal Body</label>
          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-700">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0"
              // onChange={() => {}}
            />
            <span className="absolute left-1 top-1 w-3 h-3 rounded-full bg-blue-500 transition-transform"></span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm">RGB</label>
          <div className="relative inline-block w-10 h-5 rounded-full bg-gray-700">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0"
              // onChange={() => {}}
            />
            <span className="absolute left-1 top-1 w-3 h-3 rounded-full bg-blue-500 transition-transform"></span>
          </div>
        </div>
      </div>

      {/* Color Dropdown */}
      <div className="pt-2">
        <div className="flex items-center justify-between">
          <label className="text-sm">Colour:</label>
          <select className="bg-gray-800 text-white text-sm rounded px-2 py-1 border border-gray-600">
            <option>Any</option>
            <option>Black</option>
            <option>White</option>
            <option>Blue</option>
            <option>Red</option>
          </select>
        </div>
      </div>
      
      {/* Sort Options */}
      <div className="pt-4">
        <h3 className="text-sm font-semibold mb-3">Sort by</h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <label className="text-sm">Price</label>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-700"></div>
            <label className="text-sm">Number of sales</label>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-700"></div>
            <label className="text-sm">Rating</label>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-700"></div>
            <label className="text-sm">User engagement</label>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <label className="text-sm">Ascending</label>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-700"></div>
            <label className="text-sm">Descending</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTags;