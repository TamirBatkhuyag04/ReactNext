import React from "react";
import Card from "../components/ui/cars/Card";
import { Car } from "../lib/types";

type Props = {};

const car: Car = {
    name: "Super Car",
    type: "BMW X3",
    color: "green",
    motor: {
        serialNumber: 12,
        hp: 100
    }
};

export default function page({ }: Props) {
    return (
        <div className="text-black">
            <h1>Cars</h1>
            <Card car={car} />
        </div>
    );
}