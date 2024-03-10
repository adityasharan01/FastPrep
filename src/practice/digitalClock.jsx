import { useState } from 'react'
import './App.css'

function App() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(UpdateTime, 1000)

    return (
        <>
            <h1>Vite + React Timer</h1>

            <h1>{ctime}</h1>
        </>
    )
}

export default App
