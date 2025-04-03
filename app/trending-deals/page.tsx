'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  TrendingUp, 
  Tag, 
  Clock, 
  ShoppingCart, 
  Percent 
} from 'lucide-react';

// Simulated trending deals data
const trendingDealsData = [
  {
    id: 1,
    name: 'Advanced Business Intelligence Suite',
    originalPrice: 499.99,
    discountedPrice: 349.99,
    discountPercentage: 30,
    category: 'Software',
    expiresIn: '3d 12h',
    image: '/prod1.jpg',
    shortDescription: 'Comprehensive analytics platform with AI-powered insights and real-time data visualization.',
    bestFor: ['Enterprises', 'Data Analysts', 'Business Strategists']
  },
  {
    id: 2,
    name: 'Professional Cloud Storage Pro',
    originalPrice: 199.99,
    discountedPrice: 129.99,
    discountPercentage: 35,
    category: 'Cloud Services',
    expiresIn: '2d 6h',
    image: '/prod2.avif',
    shortDescription: 'Secure, scalable cloud storage with advanced encryption and seamless team collaboration features.',
    bestFor: ['Businesses', 'Freelancers', 'Creative Professionals']
  },
  {
    id: 3,
    name: 'Project Management Mastermind',
    originalPrice: 249.99,
    discountedPrice: 174.99,
    discountPercentage: 30,
    category: 'Productivity',
    expiresIn: '1d 18h',
    image: '/prod3.jpg',
    shortDescription: 'End-to-end project management solution with AI-assisted workflow optimization and team analytics.',
    bestFor: ['Startups', 'Project Managers', 'Remote Teams']
  },
  {
    id: 4,
    name: 'Cyber Security Sentinel',
    originalPrice: 399.99,
    discountedPrice: 249.99,
    discountPercentage: 37,
    category: 'Security',
    expiresIn: '4d 8h',
    image: '/prod1.jpg',
    shortDescription: 'Comprehensive cybersecurity suite with real-time threat detection and multi-layer protection.',
    bestFor: ['Corporations', 'IT Departments', 'Sensitive Data Handlers']
  }
];

const TrendingDealsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(trendingDealsData.map(deal => deal.category)));

  // Filter deals based on selected category
  const filteredDeals = selectedCategory
    ? trendingDealsData.filter(deal => deal.category === selectedCategory)
    : trendingDealsData;

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-2xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                <TrendingUp className="mr-3 w-8 h-8" /> Trending Deals
              </h1>
              <p className="text-orange-100 mt-2">
                Hot deals with massive discounts - Limited time offers!
              </p>
            </div>
            {/* Category Filters */}
            <div className="flex space-x-2">
              {[null, ...categories].map((category) => (
                <button
                  key={category || 'all'}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedCategory === category 
                      ? 'bg-white text-orange-600' 
                      : 'bg-orange-700 text-white hover:bg-orange-600'}
                  `}
                >
                  {category || 'All Categories'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 p-6  rounded-b-2xl">
          {filteredDeals.map((deal) => (
            <div 
              key={deal.id} 
              className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Deal Image */}
              <div className="relative">
                <Image 
                  src={deal.image} 
                  alt={deal.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center">
                  <Percent className="w-4 h-4 mr-1" />
                  {deal.discountPercentage}% OFF
                </div>
              </div>

              {/* Deal Details */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-white-800">{deal.name}</h2>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Tag className="w-4 h-4 mr-1" /> {deal.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-500 line-through text-sm">
                      ${deal.originalPrice.toFixed(2)}
                    </div>
                    <div className="text-green-600 font-bold text-xl">
                      ${deal.discountedPrice.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white-600 mb-4">{deal.shortDescription}</p>

                {/* Best For */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Best for:</p>
                  <div className="flex flex-wrap gap-2">
                    {deal.bestFor.map((target) => (
                      <span 
                        key={target} 
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deal Timer */}
                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center text-red-500">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-medium">{deal.expiresIn} left</span>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Deals State */}
        {filteredDeals.length === 0 && (
          <div className="bg-white p-12 text-center rounded-b-2xl">
            <p className="text-gray-500">No deals found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingDealsPage;