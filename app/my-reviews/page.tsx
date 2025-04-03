'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle, 
} from 'lucide-react';

// Simulated review data (would typically come from backend)
const reviewsData = [
  {
    id: 1,
    product: {
      name: 'Advanced Analytics Software',
      image: '/avatar1.avif',
      purchaseDate: '2024-01-15'
    },
    rating: 5,
    title: 'Game-Changing Analytics Tool!',
    content: 'This software has completely transformed how we approach data analysis. The insights are incredibly deep and presented in a user-friendly manner.',
    date: '2024-04-01',
    helpfulVotes: 42,
    unhelpfulVotes: 3,
    comments: 7
  },
  {
    id: 2,
    product: {
      name: 'Project Management Platform',
      image: '/avatar2.avif',
      purchaseDate: '2023-11-20'
    },
    rating: 4,
    title: 'Solid PM Solution with Room for Improvement',
    content: 'Great collaboration features and intuitive interface. Would love to see more advanced reporting in future updates.',
    date: '2024-03-15',
    helpfulVotes: 28,
    unhelpfulVotes: 5,
    comments: 4
  },
  {
    id: 3,
    product: {
      name: 'Cloud Storage Pro',
      image: '/avatar3.jpg',
      purchaseDate: '2023-09-05'
    },
    rating: 5,
    title: 'Reliable and Secure Cloud Storage',
    content: 'Seamless integration, fantastic security features, and incredible customer support. Couldn&apos;t ask for more!' ,
    date: '2024-02-28',
    helpfulVotes: 55,
    unhelpfulVotes: 2,
    comments: 12
  }
];

const MyReviewsPage: React.FC = () => {
  const [filter, setFilter] = useState<number | null>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  const filteredReviews = filter 
    ? reviewsData.filter(review => review.rating === filter) 
    : reviewsData;

  return (
    <div className="min-h-screen">
      <div className="pt-3  overflow-hidden">
        {/* Reviews Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">My Reviews</h1>
              <p className="text-blue-100">Your product feedback and experiences</p>
            </div>
            <div className="flex space-x-2">
              {[5, 4, 3, 2, 1].map(rating => (
                <button 
                  key={rating}
                  onClick={() => setFilter(filter === rating ? null : rating)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full ${
                    filter === rating 
                    ? 'bg-white text-blue-600' 
                    : 'bg-blue-700 text-white hover:bg-blue-600'
                  }`}
                >
                  {renderStars(rating)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="p-6 space-y-6">
          {filteredReviews.map((review) => (
            <div 
              key={review.id} 
              className="border rounded-lg p-6 hover:shadow-md transition-shadow "
            >
              {/* Product Info */}
              <div className="flex items-center mb-4 space-x-4">
                <Image 
                  src={review.product.image} 
                  alt={review.product.name}
                  width={100}
                  height={100}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{review.product.name}</h3>
                  <p className="text-gray-500 text-sm">
                    Purchased on {review.product.purchaseDate}
                  </p>
                </div>
              </div>

              {/* Review Content */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  {renderStars(review.rating)}
                  <span className="font-semibold ml-2">{review.title}</span>
                </div>
                <p className="text-white-700 mb-4">{review.content}</p>
                
                {/* Review Metadata */}
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>Reviewed on {review.date}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.helpfulVotes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsDown className="w-4 h-4" />
                      <span>{review.unhelpfulVotes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{review.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Reviews State */}
        {filteredReviews.length === 0 && (
          <div className="text-center p-12 bg-gray-50">
            <p className="text-gray-500">No reviews found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviewsPage;