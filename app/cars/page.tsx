import React from "react";
import Card from "../components/ui/cars/Card";
import { Car } from "@/lib/types";
import CarList from "../components/ui/cars/CarList";

type Props = {};

const cars: Car[] = [
    {
        name: "Super Car",
        type: "BMW X3",
        color: "green",
        motor: {
            serialNumber: 11,
            hp: 100
        }
    },
    {
        name: "Speedster",
        type: "Audi A4",
        color: "red",
        motor: {
            serialNumber: 34,
            hp: 150
        }
    },
    {
        name: "Road King",
        type: "Mercedes G-Class",
        color: "black",
        motor: {
            serialNumber: 56,
            hp: 200
        }
    },
    {
        name: "Eco Rider",
        type: "Tesla Model 3",
        color: "white",
        motor: {
            serialNumber: 78,
            hp: 250
        }
    }
];


export default function page({ }: Props) {
    return (
        <div className="text-black m-4">
            <h1>Cars</h1>
            <CarList cars={cars} />
        </div >
    );
}