"use client"

import Image from 'next/image'

interface RoboIconProps {
  message: string;
}

const RoboIcon: React.FC<RoboIconProps> = ({ message }) => {
  return (
    <div className="flex items-start mb-4">
      <Image src="/jarvis.png" width={50} height={50} alt="Robo Icon" className="rounded-full" />
      <div className="ml-2 p-2 bg-gray-100 rounded-lg">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default RoboIcon;