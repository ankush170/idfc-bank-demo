"use client"

// pages/navigate-portfolio.tsx
import React from 'react';
import RoboIcon from '@/components/RoboIcon'; // Adjust the import path as necessary
import Header2 from '@/components/Header2';
import { useRouter } from 'next/navigation'

const NavigatePortfolio = () => {
    const router = useRouter()

    const handleOptimiseClick = () => {
        router.push('/chat')
      }
  return (
    <div>
        <Header2 />
        <div className="min-h-screen bg-white p-2">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Investment Analysis</h1>
        <h2 className="text-lg">Total Wealth</h2>
        <div className="text-4xl font-bold my-1">₹25,00,000</div>

        <div className="flex justify-around text-lg font-bold mb-1">
          <span className="text-black text-2xl">Mutual Funds</span>
          <span className="text-gray-400 text-base">Stocks</span>
          <span className="text-gray-400 text-base">Deposits</span>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex justify-start space-x-3 items-center mb-2">
          <span className="text-lg font-bold">Top Sectors</span>
          <span>⚠️</span>
        </div>
        <div className='border border-black p-2 rounded-lg'>
        <ul>
          {[
            { sector: 'Telecom', amount: '35%' },
            { sector: 'IT', amount: '35%' },
            { sector: 'FMCG', amount: '20%' },
            { sector: 'Commodities', amount: '15%' },
            { sector: 'Pharma', amount: '5%' },
          ].map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.sector}</span>
              <span>{item.amount}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex justify-start space-x-3 items-center mb-2">
          <span className="text-lg font-bold">Allocation</span>
          <span>⚠️</span>
        </div>
        <div className='border border-black p-2 rounded-lg'>
        <ul>
          {[
            { type: 'Largecap', allocation: '75%', status: '❌' },
            { type: 'Midcap', allocation: '20%', status: '✅' },
            { type: 'Smallcap', allocation: '5%', status: '❌' },
          ].map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.type}</span>
              <span>{item.allocation}</span>
              <span>{item.status}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="bg-red-100 p-4 rounded-lg text-center mb-4">
        <div className="text-[#EF5350] text-2xl font-bold">₹24,00,000</div>
        <div className="text-sm">invested in underperforming funds you should avoid</div>
      </div>

      <div className="flex items-center justify-center">
        <RoboIcon message="Hi! I'm J.A.R.V.I.S. Need help optimizing your current portfolio?" />
      </div>

      <div className="text-center">
        <button 
        onClick={handleOptimiseClick}
        className="bg-[#EF5350] text-white px-6 py-2 rounded">Help me Optimize</button>
      </div>
    </div>
    </div>
  );
};

export default NavigatePortfolio;
