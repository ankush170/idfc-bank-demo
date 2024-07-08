// components/RiskSlider.tsx
"use client"

import React, { useState } from 'react';

const RiskSlider: React.FC = () => {
  const [risk, setRisk] = useState(50);
  const [gain, setGain] = useState(140);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setRisk(value);
    setGain(value * 2.8); // Adjust this multiplier as needed
  };

  return (
    <div className="relative w-full h-24">
      <div className="absolute top-0 left-0 w-full">
        <div className="h-0 w-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-green-500 border-r-[10px] border-r-transparent" style={{ left: `${gain / 2.8}%` }}></div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={risk}
        onChange={handleSliderChange}
        className="w-full"
      />
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-0 w-0 border-l-[10px] border-l-transparent border-t-[20px] border-t-red-500 border-r-[10px] border-r-transparent" style={{ left: `${risk}%` }}></div>
      </div>
    </div>
  );
};

export default RiskSlider;