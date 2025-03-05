import React from 'react'
import { Car } from '@/app/lib/types'

type Props = { car: Car }

export default function Card({ car }: Props) {
    return (
        <div className="bg-green-100 border p-4">
            {car.name}
        </div>
    )
}