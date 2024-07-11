import React, { useState, useEffect } from 'react';
import RoboIcon from './RoboIcon';

interface LoadingScreenProps {
  loadingText: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ loadingText }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <RoboIcon message={loadingText} />
      
      <div className="mt-8 mb-4">
        <div className="w-16 h-16 border-4 border-gray-200 border-dashed rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
      </div>
      
      <h2 className="text-xl font-bold mb-4">{loadingText}</h2>

      <div className=''>
      <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-[#EF5350] h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      </div>
    </div>
  );
};

export default LoadingScreen;