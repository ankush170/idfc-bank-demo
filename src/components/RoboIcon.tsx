"use client"

import Image from 'next/image'

interface RoboIconProps {
  message: string;
}

const RoboIcon: React.FC<RoboIconProps> = ({ message }) => {
  return (
    <div className="flex items-start mb-4">
      <Image src="/robo_icon.png" width={100} height={100} alt="Robo Icon" className="rounded-full" />
      <div className="ml-2 p-2 bg-gray-100 rounded-2xl shadow-md">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default RoboIcon;