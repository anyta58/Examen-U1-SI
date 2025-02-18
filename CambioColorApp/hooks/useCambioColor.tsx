import { useState } from "react";

// Lista de colores disponibles
const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];

export const useCambioColor = () => {
    const [color, setColor] = useState(colors[0]); // Color inicial

    const changeColor = () => {
        // Seleccionar un color aleatorio diferente al actual
        let newColor;
        do {
            newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === color);
        
        setColor(newColor);
    };

    return {
        color,
        changeColor,
    };
};
