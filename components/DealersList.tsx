const DealersList = () => {
    // Mock dealers data
    const dealers = [
      {
        id: 1,
        name: 'Daraz',
        logo: '/daraz-logo.png',
        price: 1140,
        discount: 30,
        reliability: 60,
        lastUpdated: '1w ago',
      },
      {
        id: 2,
        name: 'Silicon Computers',
        logo: '/silicon-logo.png',
        price: 1140,
        discount: 30,
        reliability: 60,
        lastUpdated: '1w ago',
      },
      {
        id: 3,
        name: 'StarTech',
        logo: '/startech-logo.png',
        price: 1249,
        discount: 20,
        reliability: 60,
        lastUpdated: '1w ago',
      },
      {
        id: 4,
        name: 'Ryans',
        logo: '/ryans-logo.png',
        price: 1300,
        discount: 20,
        reliability: 60,
        lastUpdated: '1w ago',
      },
    ];
  
    // Placeholder logo styling for development
    const placeholderStyle = {
      backgroundColor: '#2a3f5f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '14px',
    };
  
    return (
      <div className="space-y-4">
        {dealers.map((dealer) => (
          <div key={dealer.id} className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded" 
                style={placeholderStyle}
              >
                {dealer.name.charAt(0)}
              </div>
              
              <div>
                <h3 className="font-medium">{dealer.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500" 
                      style={{ width: `${dealer.reliability}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{dealer.reliability}%</span>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-400">
              {dealer.lastUpdated}
            </div>
            
            <div className="flex flex-col items-end">
              <div className="text-2xl font-bold">₹{dealer.price}</div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-teal-700 text-white rounded text-xs">
                  -{dealer.discount}%
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500" 
                      style={{ width: `${dealer.reliability}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{dealer.reliability}%</span>
                </div>
              </div>
            </div>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              View
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default DealersList;