'use client';

import { useState } from 'react';

interface AnalyticsTabsProps {
  defaultTab?: string;
}

const AnalyticsTabs = ({ defaultTab = 'price' }: AnalyticsTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const tabs = [
    { id: 'price', label: 'Price history' },
    { id: 'review', label: 'Review Comparison' },
    { id: 'competition', label: 'Competition History' },
  ];
  
  return (
    <div className="bg-[#0d1a2d] rounded-lg overflow-hidden">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? 'bg-[#1a2b4b] text-white'
                : 'text-gray-400 hover:text-white hover:bg-[#162238]'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="p-4">
        {activeTab === 'price' && (
          <div className="text-center py-4">
            Price history chart would appear here
          </div>
        )}
        
        {activeTab === 'review' && (
          <div className="text-center py-4">
            Review comparison chart would appear here
          </div>
        )}
        
        {activeTab === 'competition' && (
          <div className="text-center py-4">
            Competition history chart would appear here
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsTabs;