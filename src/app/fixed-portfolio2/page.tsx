'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Header2 from '@/components/Header2';

const Page2 = () => {
    const router = useRouter();

    const handleContinueToInvestClick = () => {
        router.push('/investment-recommendation');
    }

    const handleLifeGoalsClick = () => {
        router.push('/chat2');
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header2 />
            <div className="flex-grow p-4 flex flex-col justify-between">
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold mb-2">Investment Analysis</h1>
                    <h2 className="text-xl mb-1">Total Wealth</h2>
                    <div className="text-3xl font-bold my-2">₹25,00,000</div>

                    <div className="flex justify-around text-sm font-bold mb-3 mt-2">
                        <span className="text-black text-2xl">Mutual Funds</span>
                        <span className="text-gray-400 text-lg">Stocks</span>
                        <span className="text-gray-400 text-lg">Deposits</span>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex justify-start space-x-2 items-center mb-2">
                        <span className="text-lg font-bold">Top Sectors</span>
                        <span className="text-lg">✅</span>
                    </div>
                    <div className='border border-black p-3 rounded-xl'>
                        <ul className="text-sm">
                            {[
                                { sector: 'Telecom', amount: '19%' },
                                { sector: 'IT', amount: '14%' },
                                { sector: 'FMCG', amount: '12%' },
                                { sector: 'Commodities', amount: '10%' },
                                { sector: 'Pharma', amount: '7%' },
                            ].map((item, index) => (
                                <li key={index} className="flex justify-between mb-1">
                                    <span>{item.sector}</span>
                                    <span>{item.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-2">
                    <div className="flex justify-start space-x-2 items-center mb-2">
                        <span className="text-lg font-bold">Allocation</span>
                        <span className="text-lg">✅</span>
                    </div>
                    <div className='border border-black p-3 rounded-xl'>
                        <ul className="text-sm">
                            {[
                                { type: 'Largecap', allocation: '65%', status: '✅' },
                                { type: 'Midcap', allocation: '20%', status: '✅' },
                                { type: 'Smallcap', allocation: '15%', status: '✅' },
                            ].map((item, index) => (
                                <li key={index} className="flex justify-between mb-1">
                                    <span>{item.type}</span>
                                    <span>{item.allocation}</span>
                                    <span>{item.status}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <button 
                        onClick={handleContinueToInvestClick}
                        className="bg-gray-400 text-white px-6 py-3 mb-3 rounded text-lg w-full"
                    >
                        Continue to Invest
                    </button>
                    <button 
                        onClick={handleLifeGoalsClick}
                        className="bg-[#EF5350] text-white px-6 py-3 rounded text-lg w-full"
                    >
                        Help me plan for my life goals
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page2;