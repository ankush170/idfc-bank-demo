'use client'

import React from 'react'
import { Card, CardBody } from "@material-tailwind/react";
import { IconBase } from 'react-icons';

export default function EmiDueNotice() {
    return (
        <Card shadow={false} variant='gradient' className='bg-primary-light-gradient my-3'>
            <CardBody className='flex justify-between items-center'>
                <div>
                    <img src='/bulb.svg' />
                </div>
                <div>
                    <h3 className='text-black'>Your next EMI is due in 2 days!</h3>
                    <h4 className='text-xs'>Pay now to improve your credit score</h4>
                </div>
                <div>
                    <img src='/right_arrow.svg' />
                </div>
            </CardBody>
        </Card>
    )
}