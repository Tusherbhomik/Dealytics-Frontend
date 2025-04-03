'use client';

import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import AnalyticsChart from '@/components/AnalyticsChart';
import AnalyticsTabs from '@/components/AnalyticsTabs';

export default function CustomAnalytics() {
  const [selectedChart, setSelectedChart] = useState('xy');
  const [chartDropdownOpen, setChartDropdownOpen] = useState(false);

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-400 mb-6">
        <span>Pages</span>
        <span className="mx-2">/</span>
        <span className="text-white">Custom analytics</span>
      </div>
      
      <div className="mb-6">
        <h1 className="text-lg font-medium">Create and export analytics your way</h1>
      </div>
      
      {/* Company Info */}
      <div className="flex items-center justify-between bg-[#1a2b4b] rounded-lg p-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#2a3f5f] rounded-lg flex items-center justify-center text-sm">
            Logo
          </div>
          
          <div>
            <h2 className="text-lg font-bold">STAR TECH</h2>
            <p className="text-sm text-gray-400">webteam@startechbd.com</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-md font-semibold">3214 Products</div>
            </div>
            <div>
              <div className="text-md font-semibold">11 Offline Stores</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-md font-semibold">3214 Products</div>
            </div>
            <div>
              <div className="text-md font-semibold">5612 Followers</div>
            </div>
          </div>
        </div>
        
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
          DETAILS
        </button>
      </div>
      
      {/* Chart Options */}
      <div className="bg-[#1a2b4b] rounded-lg p-4 mb-6 relative">
        <div className="mb-4">
          <div 
            className="flex items-center justify-between bg-[#0d1a2d] p-2 rounded cursor-pointer"
            onClick={() => setChartDropdownOpen(!chartDropdownOpen)}
          >
            <span>Choose chart type</span>
            <ChevronDown size={16} />
          </div>
          
          {chartDropdownOpen && (
            <div className="absolute top-16 left-4 bg-[#0d1a2d] w-56 rounded-lg shadow-lg z-10">
              <div className="p-2">
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('column');
                    setChartDropdownOpen(false);
                  }}
                >
                  Column chart
                </div>
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('bar');
                    setChartDropdownOpen(false);
                  }}
                >
                  Bar graph
                </div>
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('pie');
                    setChartDropdownOpen(false);
                  }}
                >
                  Pie chart
                </div>
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('area');
                    setChartDropdownOpen(false);
                  }}
                >
                  Area chart
                </div>
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('line');
                    setChartDropdownOpen(false);
                  }}
                >
                  Line plot
                </div>
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('xy');
                    setChartDropdownOpen(false);
                  }}
                >
                  XY (Scatter) plot
                </div>
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('bubble');
                    setChartDropdownOpen(false);
                  }}
                >
                  Bubble diagram
                </div>
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('net');
                    setChartDropdownOpen(false);
                  }}
                >
                  Net chart
                </div>
                <div 
                  className="p-2 hover:bg-[#1a2b4b] rounded cursor-pointer"
                  onClick={() => {
                    setSelectedChart('columnLine');
                    setChartDropdownOpen(false);
                  }}
                >
                  Column and line
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Chart Section */}
        <div className="mb-6">
          <div className="text-right mb-2">
            <span className="text-blue-400">My Sales</span> + <span className="text-pink-500">Computer Mania BD Sales</span>
            <div className="text-xs text-gray-400">(+5) more in 2024</div>
          </div>
          
          <AnalyticsChart chartType={selectedChart} />
        </div>
        
        {/* Chart Configuration */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#0d1a2d] p-4 rounded-lg">
            <h3 className="font-medium mb-3">X Var</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm">Variable to plot</label>
                <div className="relative inline-flex">
                  <select className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm">
                    <option>Time</option>
                    <option>Product</option>
                    <option>Category</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">From</label>
                <input type="text" value="Jan 2024" className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm" readOnly />
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">To</label>
                <input type="text" value="Dec 2024" className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm" readOnly />
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">Increment</label>
                <div className="relative inline-flex">
                  <select className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm">
                    <option>Month</option>
                    <option>Week</option>
                    <option>Day</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0d1a2d] p-4 rounded-lg">
            <h3 className="font-medium mb-3">Y1 Var</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm">Variable to plot</label>
                <div className="relative inline-flex">
                  <select className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm">
                    <option>Sales</option>
                    <option>Revenue</option>
                    <option>Profit</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">Interpolation</label>
                <div className="relative inline-flex">
                  <select className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm">
                    <option>Linear</option>
                    <option>Curved</option>
                    <option>Step</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">Color</label>
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">Z-Position</label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center mr-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-sm">Front</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full border border-white mr-1"></div>
                    <span className="text-sm">Back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0d1a2d] p-4 rounded-lg">
            <h3 className="font-medium mb-3">Y2 Var</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm">Compare with</label>
                <div className="relative inline-flex">
                  <select className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm">
                    <option>Competitor</option>
                    <option>Previous Year</option>
                    <option>Target</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">Competitor</label>
                <div className="relative inline-flex">
                  <select className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm">
                    <option>Computer Mania BD</option>
                    <option>Ryans</option>
                    <option>Startech</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">Interpolation</label>
                <div className="relative inline-flex">
                  <select className="bg-[#1a2b4b] text-white border border-gray-700 rounded px-2 py-1 text-sm">
                    <option>Linear</option>
                    <option>Curved</option>
                    <option>Step</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
              
              <div className="flex justify-between">
                <label className="text-sm">Color</label>
                <div className="w-6 h-6 rounded-full bg-pink-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chart Display Options */}
        <div className="mt-4 flex justify-between">
          <div className="bg-[#0d1a2d] p-4 rounded-lg">
            <h3 className="font-medium mb-3">XY (Scatter) Plot Configuration</h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Type</h4>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <label className="text-sm">Lines only</label>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-white"></div>
                  <label className="text-sm">Points only</label>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-white"></div>
                  <label className="text-sm">Lines and points</label>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-white"></div>
                  <label className="text-sm">Tuple only</label>
                </div>
              </div>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                Each points will be connected one by one to form a polygon
              </p>
            </div>
          </div>
          
          <div className="bg-[#0d1a2d] p-4 rounded-lg">
            <h3 className="font-medium mb-3">Display options</h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-[#1a2b4b]" />
                <label className="text-sm">Don&apos;t smoothen</label>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-[#1a2b4b]" checked readOnly />
                <label className="text-sm">Fill</label>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-[#1a2b4b]" checked readOnly />
                <label className="text-sm">Show Labels</label>
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-[#1a2b4b]" checked readOnly />
                <label className="text-sm">Multiple Channel</label>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
              EXPORT PLOT
            </button>
            <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
              EXPORT DATA
            </button>
            <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
              SUMMARY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}