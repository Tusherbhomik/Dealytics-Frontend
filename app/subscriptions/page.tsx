'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Repeat, 
  CreditCard, 
  Calendar, 
  X, 
  CheckCircle, 
  AlertCircle,
  Download
} from 'lucide-react';

// Simulated subscription data
const subscriptionsData = [
  {
    id: 1,
    name: 'Business Intelligence Pro',
    category: 'Analytics',
    status: 'Active',
    currentPlan: 'Annual',
    nextBillingDate: '2024-07-15',
    billingAmount: 499.99,
    renewalType: 'Automatic',
    image: '/prod3.jpg',
    features: [
      'Unlimited dashboard creation',
      'AI-powered insights',
      'Real-time data sync',
      'Team collaboration tools'
    ],
    purchaseDate: '2023-07-15',
    receiptUrl: '/sample-receipt.pdf'
  },
  {
    id: 2,
    name: 'Cloud Storage Enterprise',
    category: 'Storage',
    status: 'Active',
    currentPlan: 'Monthly',
    nextBillingDate: '2024-05-20',
    billingAmount: 79.99,
    renewalType: 'Automatic',
    image: '/prod1.jpg',
    features: [
      '5TB Storage',
      'Advanced encryption',
      '24/7 support',
      'Multi-device sync'
    ],
    purchaseDate: '2024-01-20',
    receiptUrl: '/sample-receipt.pdf'
  },
  {
    id: 3,
    name: 'Project Management Pro',
    category: 'Productivity',
    status: 'Suspended',
    currentPlan: 'Annual',
    nextBillingDate: '2024-06-01',
    billingAmount: 249.99,
    renewalType: 'Manual',
    image: '/prod2.avif',
    features: [
      'Unlimited projects',
      'Team workflows',
      'Resource management',
      'Reporting tools'
    ],
    purchaseDate: '2023-06-01',
    receiptUrl: '/sample-receipt.pdf'
  }
];

const SubscriptionsPage: React.FC = () => {
  const [selectedSubscription, setSelectedSubscription] = useState<typeof subscriptionsData[0] | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  // Filter subscriptions
  const filteredSubscriptions = filter
    ? subscriptionsData.filter(sub => sub.status === filter)
    : subscriptionsData;

  // Render subscription details modal
  const renderSubscriptionDetails = () => {
    if (!selectedSubscription) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedSubscription.name}</h2>
              <button 
                onClick={() => setSelectedSubscription(null)}
                className="hover:bg-white/20 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Subscription Details Content */}
          <div className="p-6 grid md:grid-cols-2 gap-6">
            {/* Left Column - Image and Basic Info */}
            <div>
              <Image 
                src={selectedSubscription.image}
                alt={selectedSubscription.name}
                width={400}
                height={250}
                className="rounded-lg mb-4 w-full"
              />
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="mr-3 text-blue-500" />
                  <span>Purchase Date: {selectedSubscription.purchaseDate}</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="mr-3 text-green-500" />
                  <span>Billing: {selectedSubscription.currentPlan} Plan</span>
                </div>
                <div className="flex items-center">
                  <Repeat className="mr-3 text-purple-500" />
                  <span>Renewal: {selectedSubscription.renewalType}</span>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Subscription Details</h3>
              
              {/* Status */}
              <div className="mb-4 flex items-center">
                {selectedSubscription.status === 'Active' ? (
                  <CheckCircle className="mr-2 text-green-500" />
                ) : (
                  <AlertCircle className="mr-2 text-red-500" />
                )}
                <span className={`font-medium ${
                  selectedSubscription.status === 'Active' 
                  ? 'text-green-600' 
                  : 'text-red-600'
                }`}>
                  {selectedSubscription.status}
                </span>
              </div>

              {/* Billing Info */}
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="flex justify-between">
                  <span>Next Billing Date:</span>
                  <span className="font-semibold">{selectedSubscription.nextBillingDate}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Billing Amount:</span>
                  <span className="font-semibold text-green-600">
                    ${selectedSubscription.billingAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-2">Included Features:</h4>
                <ul className="space-y-2">
                  {selectedSubscription.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="mr-2 w-4 h-4 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-6 flex space-x-3">
                <a 
                  href={selectedSubscription.receiptUrl} 
                  download
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center"
                >
                  <Download className="mr-2 w-5 h-5" /> Download Receipt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <Repeat className="mr-3 w-8 h-8" /> My Subscriptions
              </h1>
              <p className="text-blue-100 mt-2">
                Manage and track your active software subscriptions
              </p>
            </div>
            {/* Status Filters */}
            <div className="flex space-x-2">
              {[null, 'Active', 'Suspended'].map((status) => (
                <button
                  key={status || 'all'}
                  onClick={() => setFilter(status)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${filter === status 
                      ? 'bg-white text-blue-600' 
                      : 'bg-blue-700 text-white hover:bg-blue-600'}
                  `}
                >
                  {status || 'All Subscriptions'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subscriptions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-b-2xl">
          {filteredSubscriptions.map((subscription) => (
            <div 
              key={subscription.id} 
              className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setSelectedSubscription(subscription)}
            >
              {/* Subscription Image */}
              <div className="relative">
                <Image 
                  src={subscription.image} 
                  alt={subscription.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm ${
                  subscription.status === 'Active' 
                  ? 'bg-green-500' 
                  : 'bg-red-500'
                }`}>
                  {subscription.status}
                </div>
              </div>

              {/* Subscription Details */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{subscription.name}</h2>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{subscription.category}</span>
                  <span className="font-bold text-green-600">
                    ${subscription.billingAmount.toFixed(2)}/{subscription.currentPlan.toLowerCase()}
                  </span>
                </div>
                <div className="mt-3 flex items-center text-gray-600">
                  <Calendar className="mr-2 w-4 h-4" />
                  <span className="text-sm">Next Billing: {subscription.nextBillingDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Subscriptions State */}
        {filteredSubscriptions.length === 0 && (
          <div className="bg-white p-12 text-center rounded-b-2xl">
            <p className="text-gray-500">No subscriptions found.</p>
          </div>
        )}

        {/* Subscription Details Modal */}
        {selectedSubscription && renderSubscriptionDetails()}
      </div>
    </div>
  );
};

export default SubscriptionsPage;