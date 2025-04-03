import Image from "next/image";

// This component is similar to TrendingProducts
const SuggestedDeals = () => {
  // Mock product data - using same structure as TrendingProducts
  const products = [
    {
      id: 1,
      name: 'Bluetooth Speaker',
      originalPrice: 14999,
      discountedPrice: 10999,
      discount: 25,
      rating: 5.5,
      image: '/bluetooth-speaker.jpg',
    },
    {
      id: 2,
      name: 'iPad 9th Gen',
      originalPrice: 39999,
      discountedPrice: 30999,
      discount: 25,
      rating: 5.5,
      image: '/ipad.jpg',
    },
    {
      id: 3,
      name: 'iPad 9th Gen',
      originalPrice: 39999,
      discountedPrice: 30999,
      discount: 25,
      rating: 5.5,
      image: '/ipad.jpg',
    },
  ];

  // Placeholder image styling for development
  // const placeholderStyle = {
  //   backgroundColor: '#2a3f5f',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: 'white',
  //   fontSize: '14px',
  // };

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative bg-[#1a2b4b] rounded-lg overflow-hidden p-4"
        >
          <div className="absolute top-4 left-4 text-sm text-emerald-400 font-medium">
            Limited time Offer
          </div>

          <div className="h-40 mb-8 relative flex items-center justify-center">
            {/* In a real app, you'd use real images; this is a placeholder */}
            {/* <div 
                className="w-full h-full rounded" 
                style={placeholderStyle}
              >
                Product Image
              </div> */}
            <div className="w-48 h-36 flex-shrink-0 relative flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1585790054762-36743f4b07ff"
                alt="Apple iPad"
                
                className="rounded object-cover"
                width={500}
                height={500}
                quality={75}
              />
            </div>
          </div>

          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-400">Regular price: ₹{(product.originalPrice / 100).toFixed(2)}</p>
            </div>

            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-teal-400 flex items-center justify-center">
                <span className="text-xs">{product.rating}/10</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-lg font-semibold">₹{(product.discountedPrice / 100).toFixed(2)}</div>
            </div>
            <div className="bg-teal-500 text-white font-semibold rounded px-2 py-1 text-sm">
              -{product.discount}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedDeals;