"use client";

import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Link from "next/link";

const data = [{ value: 16 }];

export default function InvestmentCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) {
      const target = e.target as HTMLElement;
      if (!target.closest(".eye-icon")) {
        router.push("/risk-assessment");
      }
    } else {
      setIsFlipped(true);
    }
  };

  return (
    <div
      className={`w-1/2 h-56 bg-[#EF9A9A] shadow-md rounded-lg p-4 cursor-pointer relative ${
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
          <p className="text-sm mt-[-3] mb-1">Combined Value</p>
          <Link
            href="/risk-assessment"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Invest more
          </Link>
          <div
            className="eye-icon absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            <EyeSlashIcon className="h-6 w-6" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div
            className="eye-icon absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(true);
            }}
          >
            <EyeIcon className="h-6 w-6" />
          </div>
          <p className="text-lg font-semibold">Your Investments</p>
        </div>
      )}
    </div>
  );
}