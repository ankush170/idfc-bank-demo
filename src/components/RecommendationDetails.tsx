const RecommendationDetails = () => {
    return (
      <div className="bg-white border rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold">High Growth Portfolio<span className="ml-2 text-sm font-normal">(recommended)</span></h2>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div>
            <p className="font-bold">Returns (1yr)</p>
            <p>23.5% p.a.</p>
          </div>
          <div>
            <p className="font-bold">Ideal Holding</p>
            <p>5+ years</p>
          </div>
          <div>
            <p className="font-bold">Volatility</p>
            <p>High</p>
          </div>
          <div>
            <p className="font-bold">Portfolio Type</p>
            <p>Equity</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default RecommendationDetails