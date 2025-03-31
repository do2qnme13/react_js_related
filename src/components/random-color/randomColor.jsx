import React from "react";
import { useState } from "react";

export default function RandomColor() {
    const [typeofColor, setTypeofColor] = useState("hex");
    const [color, setColor] = useState("#FFFF");

    const handleCreateRandomHexColor = () => {
        const hex = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
        ];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    };

    const handleCreateRandomRgbColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const rgb = `rgb(${r},${g},${b})`;

        console.log(rgb);
        setColor(rgb);
    };

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: color,
            }}
        >
            <button
                onClick={() => {
                    if (typeofColor === "rgb") {
                        setTypeofColor("hex");
                    }
                    handleCreateRandomHexColor();
                }}
            >
                Create Hex Color
            </button>
            <button
                onClick={() => {
                    if (typeofColor === "hex") {
                        setTypeofColor("rgb");
                    }
                    handleCreateRandomRgbColor();
                }}
            >
                Create RGB Color
            </button>
            <button
                onClick={
                    typeofColor === "hex"
                        ? handleCreateRandomHexColor
                        : handleCreateRandomRgbColor
                }
            >
                Generate Random Color
            </button>
            <h1>{color}</h1>
            <h2>{typeofColor}</h2>
        </div>
    );
}
