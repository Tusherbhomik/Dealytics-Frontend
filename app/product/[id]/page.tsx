import Link from 'next/link';
import { Star, ThumbsUp, ThumbsDown, Bell, Heart, AlertCircle } from 'lucide-react';
import DealersList from '@/components/DealersList';
import ProductReviews from '@/components/ProductReviews';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // In a real app, you'd fetch product data based on params.id
  const productData = {
    id: params.id,
    name: 'Fantech PORTAL HQ55 RGB Gaming Headphone',
    price: 1140,
    discount: 30,
    tags: ['HeadPhone', 'Tech'],
    image: '/headphone1.jpg',
    description: 'Fantech Portal HQ55 Gaming Headset with RGB Lighting Effect to Enhance Gaming Style. Lightweight but Durable',
    features: [
      'Model: PORTAL HQ55',
      'Driver Unit: 50mm',
      'Easy Volume Control',
      'Running RGB Circular Lighting Effect',
      'Connector: Dual 3.5mm TRS Jack + USB-A',
    ],
    positiveReviews: 17,
    negativeReviews: 3,
    totalReviews: 20,
  };

  // Placeholder image styling for development
  const placeholderStyle = {
    backgroundColor: '#2a3f5f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
  };

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-white">Pages</Link>
        <span className="mx-2">/</span>
        <Link href="/search-deals" className="hover:text-white">Search Deals</Link>
        <span className="mx-2">/</span>
        <span className="text-white">PORTAL-HQ55-STARTECH</span>
      </div>
      
      <div className="flex flex-col gap-6">
        {/* Product Details */}
        <div className="bg-[#1a2b4b] rounded-lg p-6">
          <div className="flex gap-6">
            {/* Product Image */}
            <div className="w-80 h-64">
              <div 
                className="w-full h-full rounded" 
                style={placeholderStyle}
              >
                Product Image
              </div>
            </div>
            
            {/* Product Info */}
            <div className="flex-1">
              <div className="flex flex-col h-full">
                <h1 className="text-2xl font-bold mb-2">
                  Product<br />{productData.name}
                </h1>
                
                <div className="flex gap-2 mt-2 mb-4">
                  {productData.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-teal-500 bg-opacity-20 text-teal-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center gap-2">
                    <Heart size={16} /> Wishlist
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors">
                    Ignore
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-gray-400 text-sm">From</div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-2xl font-bold">₹{productData.price}</span>
                <span className="px-2 py-0.5 bg-teal-700 text-white rounded text-xs">
                  -{productData.discount}%
                </span>
              </div>
              
              <div className="flex justify-end mt-2">
                <div className="flex gap-1">
                  <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-white -ml-1"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white -ml-1"></div>
                </div>
              </div>
              
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Product Details
              </button>
            </div>
          </div>
          
          {/* Product Description */}
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Description:</h2>
            <p className="text-gray-300">{productData.description}</p>
            
            <h3 className="text-md font-medium mt-4 mb-2">Key Features</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              {productData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Dealers Section */}
        <div className="bg-[#1a2b4b] rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Dealers</h2>
          <DealersList />
        </div>
        
        {/* Reviews Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Rating Summary */}
          <div className="bg-[#1a2b4b] rounded-lg p-6">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-6xl font-bold">4.6</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1 mt-1">
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  <Star size={14} className="fill-yellow-500 text-yellow-500" />
                  <Star size={14} className="fill-gray-500 text-gray-500" />
                </div>
                <div className="text-sm text-gray-400 mt-1">897853</div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">5</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-4/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">4</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-3/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">3</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-2/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">2</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-1/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">1</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-1/10"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">-1</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-1/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">-2</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-2/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">-3</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-1/5"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">-4</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-1/10"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-4">-5</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-end">
                <div className="space-x-4">
                  <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">
                    About Product
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">
                    About Seller
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <button className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  ADD REVIEW
                </button>
              </div>
            </div>
          </div>
          
          {/* Reviews */}
          <div>
            <ProductReviews />
          </div>
        </div>
      </div>
    </div>
  );
}