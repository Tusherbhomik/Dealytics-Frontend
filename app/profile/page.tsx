'use client';

import React from 'react';
import { 
  CreditCard, 
  ShoppingBag, 
  Repeat, 
  Star, 
  Trophy 
} from 'lucide-react';
import Image from 'next/image';

// Simulated user data (would typically come from backend/database)
const userData = {
  name: 'Emma Rodriguez',
  email: 'emma.rodriguez@example.com',
  avatar: '/avatar1.avif',
  memberSince: 'January 2023',
  totalSpent: 4752.65,
  loyaltyPoints: 1245,
  subscriptions: [
    { 
      id: 1, 
      name: 'Premium Software Suite', 
      price: 49.99, 
      frequency: 'Monthly',
      nextBillingDate: '2024-05-15'
    },
    { 
      id: 2, 
      name: 'Cloud Storage Pro', 
      price: 19.99, 
      frequency: 'Monthly',
      nextBillingDate: '2024-05-20'
    }
  ],
  recentPurchases: [
    { 
      id: 1, 
      name: 'Advanced Analytics Tool', 
      price: 299.99, 
      date: '2024-04-01',
      status: 'Completed'
    },
    { 
      id: 2, 
      name: 'Project Management License', 
      price: 199.50, 
      date: '2024-03-15',
      status: 'Completed'
    },
    { 
      id: 3, 
      name: 'Design Software Bundle', 
      price: 149.99, 
      date: '2024-02-28',
      status: 'Completed'
    }
  ]
};

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <div className="flex items-center space-x-6">
            <Image 
              src={userData.avatar} 
              alt={userData.name} 
              width={96} 
              height={96}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <p className="text-blue-100">{userData.email}</p>
              <p className="text-sm text-blue-200">Member since {userData.memberSince}</p>
            </div>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-4 gap-4 p-6 ">
          <div className="p-4 rounded-lg shadow flex items-center space-x-4">
            <CreditCard className="text-green-500" />
            <div>
              <p className="text-gray-500 text-sm">Total Spent</p>
              <p className="font-bold text-lg">${userData.totalSpent.toFixed(2)}</p>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow flex items-center space-x-4">
            <Star className="text-yellow-500" />
            <div>
              <p className="text-gray-500 text-sm">Loyalty Points</p>
              <p className="font-bold text-lg">{userData.loyaltyPoints}</p>
            </div>
          </div>
          <div className="p-4 rounded-lg shadow flex items-center space-x-4">
            <Repeat className="text-blue-500" />
            <div>
              <p className="text-gray-500 text-sm">Active Subscriptions</p>
              <p className="font-bold text-lg">{userData.subscriptions.length}</p>
            </div>
          </div>
          <div className=" p-4 rounded-lg shadow flex items-center space-x-4">
            <Trophy className="text-purple-500" />
            <div>
              <p className="text-gray-500 text-sm">Membership Level</p>
              <p className="font-bold text-lg">Premium</p>
            </div>
          </div>
        </div>

        {/* Subscriptions Section */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Repeat className="mr-3 text-blue-500" /> Active Subscriptions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {userData.subscriptions.map((sub) => (
              <div 
                key={sub.id} 
                className=" border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{sub.name}</h3>
                    <p className="text-gray-500 text-sm">{sub.frequency} - ${sub.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Next Billing</p>
                    <p className="font-medium">{sub.nextBillingDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Purchases */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <ShoppingBag className="mr-3 text-green-500" /> Recent Purchases
          </h2>
          <div className="space-y-4">
            {userData.recentPurchases.map((purchase) => (
              <div 
                key={purchase.id} 
                className="      border rounded-lg p-4 flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-bold">{purchase.name}</h3>
                  <p className="text-gray-500 text-sm">Purchased on {purchase.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">${purchase.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">{purchase.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;