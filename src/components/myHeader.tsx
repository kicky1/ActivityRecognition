import React from "react";

interface HeaderProps {
    text: string;
    color: string;
}

export default function myHeader({text, color}:HeaderProps){
    return (
        <p
            style={{
                color: color,
                fontSize: '50px',
            }}
        >
            {text}
        </p>
        )
}