"use client";

import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardBody, CardFooter, IconButton } from "@material-tailwind/react";

const data = [{ value: 16 }];

export default function BankBalanceCard() {
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
        <Card className="bg-primary-dark-gradient flex-1 shadow-none">
            <CardBody className="h-full items-center justify-center flex">

                {isFlipped ? (
                    <div className="flex flex-col items-center pt-8">
                        <div>
                            <div className="text-xs text-white mt-[-3] mb-1">Available Balance</div>
                            <div className="text-white text-lg">₹ 3,25,245</div>
                        </div>

                        <div className="w-full mt-4">
                            <div className="text-xs text-white mt-[-3] mb-1">Interest Earned</div>
                            <div className="text-white text-xs">₹ 50,000</div>
                        </div>



                        <div
                            className="eye-icon absolute flex items-center justify-between left-0 top-0 right-0 p-1"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsFlipped(false);
                            }}
                        >
                            <div className="flex items-center">
                                <img src='/bank.svg' />
                                <h2 className="text-white text-sm font-semibold pl-1">Bank</h2>
                            </div>

                            <EyeSlashIcon className="h-6 w-6 text-white" />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                        <div>
                            <img src='/bank.svg' />
                        </div>
                        <div
                            className="eye-icon absolute top-2 right-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsFlipped(true);
                            }}
                        >
                            <EyeIcon className="h-6 w-6 text-white" />
                        </div>
                        <p className="text-lg text-white">Banking</p>
                    </div>
                )}
            </CardBody>
            <CardFooter className="flex justify-end p-0 px-4 pb-2">
            </CardFooter>
        </Card>

    );
}