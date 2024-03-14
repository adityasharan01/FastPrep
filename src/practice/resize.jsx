import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const handleResize =
        debounce(() => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }, 500);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [handleResize])


    return (
        <>
            <h1>Vite + React</h1>
            <h1>{width}</h1>
            <h1>{height}</h1>
        </>
    )
}

export default App
