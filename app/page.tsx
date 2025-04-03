import Link from 'next/link';
import { Search, Settings, Bell, ArrowRight } from 'lucide-react';
import TrendingProducts from '@/components/TrendingProducts';
import SuggestedDeals from '@/components/SuggestedDeals';
import FilterTags from '@/components/FilterTags';

export default function Home() {
  return (
    <div>
      {/* Search and Navigation Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Type here..."
            className="w-full bg-[#1a2b4b] text-white py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-4 ml-4">
          <button className="p-2 rounded-lg bg-[#1a2b4b] hover:bg-[#27395e] transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg bg-[#1a2b4b] hover:bg-[#27395e] transition-colors">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Filters Section (Right Side) */}
      <div className="flex gap-8">
        <div className="flex-1">
          {/* Trending Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Trending Right Now</h2>
              <Link href="/trending" className="flex items-center gap-1 text-sm bg-[#1a2b4b] hover:bg-[#27395e] px-3 py-1 rounded-lg transition-colors">
                SEE ALL <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <TrendingProducts />
          </div>
          
          {/* Suggested Deals Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Your Suggested Deals</h2>
              <Link href="/deals" className="flex items-center gap-1 text-sm bg-[#1a2b4b] hover:bg-[#27395e] px-3 py-1 rounded-lg transition-colors">
                SEE ALL <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <SuggestedDeals />
          </div>
        </div>
        
        {/* Filters Panel */}
        <div className="w-64 p-4 bg-[#1a2b4b] rounded-lg h-fit">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <FilterTags />
        </div>
      </div>
    </div>
  );
}