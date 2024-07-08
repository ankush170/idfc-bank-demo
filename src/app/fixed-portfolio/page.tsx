"use client"

// pages/navigate-portfolio.tsx
import React from 'react';
import RoboIcon from '@/components/RoboIcon'; // Adjust the import path as necessary
import Header2 from '@/components/Header2';
import { useRouter } from 'next/navigation'

const NavigatePortfolio = () => {
    const router = useRouter()

    const handleHomeClick = () => {
        router.push('/')
      }
  return (
    <div>
        <Header2 />
        <div className="min-h-screen bg-white p-2">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Investment Analysis</h1>
        <h2 className="text-lg">Total Wealth</h2>
        <div className="text-4xl font-bold my-1">₹1,20,00,000</div>

        <div className="flex justify-around text-lg font-bold mb-1">
          <span className="text-black text-2xl">Mutual Funds</span>
          <span className="text-gray-400 text-base">Stocks</span>
          <span className="text-gray-400 text-base">Deposits</span>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex justify-start space-x-3 items-center mb-2">
          <span className="text-lg font-bold">Top Sectors</span>
          <span>✅</span>
        </div>
        <div className='border border-black p-2 rounded-lg'>
        <ul>
          {[
            { sector: 'Telecom', amount: '3,00,000' },
            { sector: 'IT', amount: '3,70,000' },
            { sector: 'FMCG', amount: '1,80,000' },
            { sector: 'Commodities', amount: '1,74,000' },
            { sector: 'Pharma', amount: '1,50,000' },
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
          <span>✅</span>
        </div>
        <div className='border border-black p-2 rounded-lg'>
        <ul>
          {[
            { type: 'Largecap', allocation: '65%', status: '✅' },
            { type: 'Midcap', allocation: '20%', status: '✅' },
            { type: 'Smallcap', allocation: '15%', status: '✅' },
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

      <div className="flex items-center justify-center">
        <RoboIcon message="Here's what changed. Need more help?" />
      </div>

      <div className='flex flex-col'>
        <div className='justify-start'>
            <h2 className='text-lg font-bold'>Allocation Adjusted</h2>
            <p>We've increased allocation to small cap funds in your portfolio for growth prospects</p>
        </div>
        <div className='justify-start'>
            <h2 className='text-lg font-bold'>Portfolio Diversity</h2>
            <p>Investment to Pharma, FMCG and Commodities increased</p>
        </div>
        <div className='justify-start'>
            <h2 className='text-lg font-bold'>1 fund exited</h2>
            <p>Funds from XYZ Blue Chip Fund reallocated to XYZ Index Fund</p>
        </div>
      </div>

      <div className="text-center">
        <button 
        onClick={handleHomeClick}
        className="bg-gray-400 text-white px-6 py-2 rounded">Home</button>
      </div>
    </div>
    </div>
  );
};

export default NavigatePortfolio;
