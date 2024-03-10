import { useState, useEffect } from 'react';
import "./App.css"
const App = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else if (!isRunning && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, timer]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setTimer(0);
        setIsRunning(false);
    };

    return (
        <div>
            <h2>Timer: {timer}</h2>
            <button onClick={handleStartStop}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default App;
