const AssetAllocation = () => {
    const allocations = [
      { fund: 'Large Cap Fund', allocation: 25 },
      { fund: 'Flexi Cap Fund', allocation: 35 },
      { fund: 'Liquid Fund', allocation: 20 },
      { fund: 'Dividend Yield Fund', allocation: 10 },
      { fund: 'Blue chip Fund', allocation: 10 },
    ]
  
    return (
      <div className="bg-white border rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Asset Allocation</h2>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="font-bold">Funds</p>
            {allocations.map((item, index) => (
              <p key={index}>{item.fund}</p>
            ))}
          </div>
          <div>
            <p className="font-bold">Allocation</p>
            {allocations.map((item, index) => (
              <p key={index}>{item.allocation}%</p>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default AssetAllocation