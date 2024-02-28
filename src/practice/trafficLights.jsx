import React, { useState, useEffect } from "react";

const config = {
    red: {
        backgroundColor: "red",
        duration: 4000,
        next: "green",
    },
    yellow: {
        backgroundColor: "yellow",
        duration: 500,
        next: "red",
    },
    green: {
        backgroundColor: "green",
        duration: 3000,
        next: "yellow",
    },
};

const TrafficLight = () => {
    const [currentColor, setCurrentColor] = useState("red");

    // Define styles as JavaScript objects
    const trafficLightStyle = {
        display: "flex",
        flexDirection: "column",
        width: "100px",
        height: "300px",
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "10px",
        gap: "10px",
        alignItems: "center",
    };

    const lightStyle = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "grey",
    };

    const isActiveStyle = {
        boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.5)",
    };

    useEffect(() => {
        const { duration, next } = config[currentColor];
        const timerId = setTimeout(() => setCurrentColor(next), duration);
        return () => clearTimeout(timerId);
    }, [currentColor]);

    return (
        <div style={trafficLightStyle}>
            {Object.keys(config).map((color) => (
                <div
                    key={color}
                    style={{
                        ...lightStyle,
                        ...color === currentColor ? isActiveStyle : {},
                        backgroundColor: color === currentColor ? config[color].backgroundColor : "grey",
                    }}
                ></div>
            ))}
        </div>
    );
};

export default TrafficLight;
