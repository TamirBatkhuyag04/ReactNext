import React from "react";
import Card from "../components/ui/cars/CardComponent";

type Props = {};

export default function Cars({ }: Props) {
    return (
        <div className="text-black">
            <h1>Cars</h1>
            <Card />
        </div>
    );
}