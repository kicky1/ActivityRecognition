import React from "react";

interface TextProps {
    text: string;
    color: string;
}

export default function Text({text, color}:TextProps){
    return (
        <h1
            style={{
                color: color,
            }}
        >

            {text}
        </h1>
        )
}