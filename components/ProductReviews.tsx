const ProductReviews = () => {
    // Mock reviews data
    const positiveReviews = [
      {
        id: 1,
        user: 'Anon-e-ghk128',
        content: 'Budget headphone er moddhe good enought. Bd er moddhe sheraa ekta jinish. Notun jinish ayle call diben.',
        rating: 4,
      },
      {
        id: 2,
        user: 'Anon-e-musc64',
        content: 'Budget headphone er moddhe good enought. Bd te blue switch er budget headphone ar paben na eta chara.',
        rating: 5,
      },
    ];
    
    const negativeReviews = [
      {
        id: 1,
        user: 'NegativeDiteEshechi',
        content: 'Valo lage nay ekdom. puray taka loss. Refund dabi kortesi.',
        rating: -3,
      },
      {
        id: 2,
        user: 'IAmBadman',
        content: 'They took a year and a half to deliver this product. Ain\'t buying anything from them ever again. -10/10',
        rating: -5,
      },
    ];
  
    return (
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-[#1a2b4b] rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Positive Reviews (17/20)</h2>
          
          <div className="space-y-4">
            {positiveReviews.map((review) => (
              <div 
                key={review.id}
                className="p-4 bg-green-900 bg-opacity-25 border border-green-900 rounded-lg"
              >
                <div className="font-medium text-green-400 mb-1">{review.user}</div>
                <p className="text-gray-300">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#1a2b4b] rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Negative Reviews (3/20)</h2>
          
          <div className="space-y-4">
            {negativeReviews.map((review) => (
              <div 
                key={review.id}
                className="p-4 bg-red-900 bg-opacity-25 border border-red-900 rounded-lg"
              >
                <div className="font-medium text-red-400 mb-1">{review.user}</div>
                <p className="text-gray-300">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductReviews;