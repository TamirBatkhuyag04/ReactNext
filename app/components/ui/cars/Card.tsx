"use client"
import React, { useState } from 'react'
import { Car } from '@/lib/types'

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div
            className={`bg-green-100 border p-4 hover:cursor-pointer ${isActive ? "bg-green-300" : "bg-gray-100"}`}
            onClick={() => {
                setIsActive(!isActive)
            }}
        >
            <h2 className="font-bold text-3xl">{car.name}</h2>
            <div>
                {car.color}
            </div>
            {isActive ? "active" : "inactive"}
        </div>
    )
}