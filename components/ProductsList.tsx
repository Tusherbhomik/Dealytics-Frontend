import Image from 'next/image';
import Link from 'next/link';

const ProductsList = () => {
  // Mock product data
  const products = [
    {
      id: 1,
      name: 'Fantech PORTAL HQ55 RGB Gaming Headphone',
      price: 1140,
      discount: 30,
      tags: ['Headphone', 'Tech', 'RGB', 'Metal'],
      image: '/headphone1.jpg',
    },
    {
      id: 2,
      name: 'Havit H2590BT PRO Multi-Function Wireless Headphone',
      price: 999,
      discount: 30,
      tags: ['Headphone', 'Tech', 'Wireless'],
      image: '/headphone2.jpg',
    },
    {
      id: 3,
      name: 'Rapoo VH310 Virtual 7.1 LED Gaming Headphone',
      price: 1625,
      discount: 30,
      tags: ['Headphone', 'Tech'],
      image: '/headphone3.jpg',
    },
    {
      id: 4,
      name: 'Corsair HS35 V2 7.1 SURROUND Multiplatform Wired Gaming Headphone',
      price: 2399,
      discount: 30,
      tags: ['Headphone', 'Tech'],
      image: '/headphone4.jpg',
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
    <div className="space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex gap-6 bg-[#1a2b4b] rounded-lg overflow-hidden p-4"
        >
          {/* Product Image */}
          {/* <div className="w-48 h-36 flex-shrink-0 relative flex items-center justify-center"> */}
          {/* In a real app, you'd use real images; this is a placeholder */}
          {/* <div  */}
          {/* className="w-full h-full rounded"  */}
          {/* style={placeholderStyle} */}
          {/* > */}
          {/* Product Image */}
          {/* </div> */}
          {/* </div> */}
          <div className='h-40 mb-8 relative flex items-center justify-center'>
            <div className="w-48 h-36 flex-shrink-0 relative flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1585790054762-36743f4b07ff"
                alt="Apple iPad"
                className="rounded object-cover"
                height={500}
                width={500}
                quality={75}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    {product.name}
                  </Link>
                </h3>

                <div className="flex gap-2 mt-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-teal-500 bg-opacity-20 text-teal-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <div className="text-gray-400 text-sm">From</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">₹{product.price}</span>
                  <span className="px-2 py-0.5 bg-teal-700 text-white rounded text-xs">
                    -{product.discount}%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <div className="flex gap-1">
                <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
                <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-white -ml-1"></div>
                <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white -ml-1"></div>
              </div>

              <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                Product Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;