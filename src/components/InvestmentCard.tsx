"use client";

import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const data = [{ value: 16 }];

export default function InvestmentCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) {
      const target = e.target as HTMLElement;
      if (!target.closest(".eye-slash-icon")) {
        router.push("/risk-assessment");
      }
    } else {
      setIsFlipped(true);
    }
  };

  return (
    <div
      className={`w-1/2 h-56 bg-[#EF9A9A] shadow-md rounded-lg p-4 cursor-pointer ${
        isFlipped ? "transform bg-white rotate-y-180" : ""
      }`}
      onClick={handleClick}
    >
      {isFlipped ? (
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-1">Invest</h2>
          <div className="relative w-[100px] h-[100px]">
            <PieChart
              width={100}
              height={100}
              className="absolute -top-2 -left-2"
            >
              <Pie
                data={data}
                cx={50}
                cy={50}
                innerRadius={30}
                outerRadius={40}
                fill="#82ca9d"
                dataKey="value"
              >
                <Cell key="cell-0" fill="#82ca9d" />
              </Pie>
            </PieChart>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-semibold">₹16</span>
              <span className="text-xs">Lakhs</span>
            </div>
          </div>
          <p className="text-sm">Combined Value</p>
          <p className="text-sm mt-2">Next Milestone</p>
          <p className="text-lg font-semibold">₹20,00,000</p>
          <div
            className="eye-slash-icon absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            <EyeSlashIcon className="h-6 w-6" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-semibold">Your Investments</p>
        </div>
      )}
    </div>
  );
}
