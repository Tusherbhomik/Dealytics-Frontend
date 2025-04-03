import Link from "next/link";
import { Search } from "lucide-react";
import ProductsList from "@/components/ProductsList";

export default function ProductAnalytics() {
  return (
    <div>
      {/* Search Bar and Breadcrumbs */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Pages
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">Search Products</span>
        </div>

        <div className="relative w-80">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Type here..."
            className="w-full bg-[#1a2b4b] text-white py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex-1">
          {/* Products List */}
          <ProductsList />
        </div>

        {/* Filters Panel */}
        <div className="w-64 p-4 bg-[#1a2b4b] rounded-lg h-fit">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          {/* Price Range Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Price Range: ₹900-₹2400
            </label>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Feature Toggles */}
          <div className="space-y-3 mb-6">
            <h4 className="text-sm font-medium mb-2">Feature</h4>

            {[
              { label: "Noise Cancellation", active: true },
              { label: "Wireless", active: false },
              { label: "Metal Body", active: true },
              { label: "RGB", active: true },
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-between">
                <label className="text-sm">{feature.label}</label>
                <div className="relative inline-block w-10 h-5 rounded-full bg-gray-700">
                  <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0"
                    defaultChecked={feature.active}
                    // onChange={() => {}}
                  />
                  <span
                    className={`absolute left-1 top-1 w-3 h-3 rounded-full transition-transform ${
                      feature.active ? "bg-blue-500" : "bg-gray-500"
                    }`}
                  ></span>
                </div>
              </div>
            ))}
          </div>

          {/* Color Dropdown */}
          <div className="mb-6">
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
          <div>
            <h4 className="text-sm font-medium mb-2">Sort by</h4>
            {["Price", "Number of sales", "Rating", "User engagement"].map(
              (sortOption, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      index === 0 ? "bg-blue-500 flex items-center justify-center" : "bg-gray-700"
                    }`}
                  >
                    {index === 0 && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <label className="text-sm">{sortOption}</label>
                </div>
              )
            )}

            <div className="flex items-center justify-between mt-4">
              {["Ascending", "Descending"].map((order, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      index === 0 ? "bg-blue-500 flex items-center justify-center" : "bg-gray-700"
                    }`}
                  >
                    {index === 0 && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <label className="text-sm">{order}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
