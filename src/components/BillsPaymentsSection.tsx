"use client"

export default function BillsPaymentsSection() {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Bills and Payments</h2>
          <button className="bg-[#EF5350] text-white px-4 py-2 rounded">
            Pay Now
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Electricity Bill</p>
              <p className="text-lg font-semibold">₹4,430</p>
            </div>
            <div>
              <p className="text-sm">Due Date</p>
              <p className="text-lg font-semibold">4th August</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-sm">Home Loan EMI</p>
              <p className="text-lg font-semibold">₹35,000</p>
            </div>
            <div>
              <p className="text-sm">Due Date</p>
              <p className="text-lg font-semibold">4th August</p>
            </div>
          </div>
        </div>
      </div>
    )
  }