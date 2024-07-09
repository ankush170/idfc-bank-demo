'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import RoboIcon from '@/components/RoboIcon'; // Adjust the import path as necessary
import Header2 from '@/components/Header2';

const Page1 = () => {
    const router = useRouter();

    const handleContinueClick = () => {
        router.push('/fixed-portfolio2');
    }

    return (
        <div>
            <Header2 />
            <div className="min-h-screen bg-white p-2 flex flex-col items-center justify-center">
                <RoboIcon message="Here's what changed. Need more help?" />
                <div className='flex flex-col mt-8'>
                    <div className='justify-start mb-4'>
                        <h2 className='text-lg font-bold'>Allocation Adjusted</h2>
                        <p>We&apos;ve increased allocation to small cap funds in your portfolio for growth prospects</p>
                    </div>
                    <div className='justify-start mb-4'>
                        <h2 className='text-lg font-bold'>Portfolio Diversity</h2>
                        <p>Investment to Pharma, FMCG and Commodities increased</p>
                    </div>
                    <div className='justify-start mb-4'>
                        <h2 className='text-lg font-bold'>1 fund exited</h2>
                        <p>Funds from XYZ Blue Chip Fund reallocated to XYZ Index Fund</p>
                    </div>
                </div>
                <button 
                    onClick={handleContinueClick}
                    className="bg-gray-400 text-white px-6 py-2 rounded mt-4"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Page1;
