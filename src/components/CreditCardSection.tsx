"use client"

export default function CreditCardSection() {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-4">          
          <h2 className="text-lg font-semibold">Credit Card</h2>
          <button className="bg-[#EF5350] text-white px-4 py-2 rounded">
            Analyze
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-sm">Total Outstanding</p>
            <p className="text-lg font-semibold">₹50,000</p>
          </div>
          <div>
            <p className="text-sm">Due Date</p>
            <p className="text-lg font-semibold">4th August</p>
          </div>
        </div>
      </div>
    )
  }