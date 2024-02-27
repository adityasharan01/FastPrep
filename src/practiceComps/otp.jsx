import React, { useState, useEffect, useRef } from 'react';
import "./App.css"
function OTPInput({ numInputs }) {
    const [inputs, setInputs] = useState(Array(numInputs).fill(''));
    const inputRefs = useRef([]);

    const handleInputChange = (event, index) => {
        const { value } = event.target;
        const newInputs = [...inputs];
        newInputs[index] = value.replace(/[^0-9]/gi, ''); // Ensures only numbers are entered
        setInputs(newInputs);

        // Move focus forward on input
        if (value && index < numInputs - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && !inputs[index] && index > 0) {
            // Move focus backward on backspace if current input is empty
            inputRefs.current[index - 1].focus();
        }
    };

    // Automatically focus the first input on component mount
    useEffect(() => {
        inputRefs.current[0].focus();
    }, []);

    return (
        <div>
            {inputs.map((input, index) => (
                <input
                    key={index}
                    ref={(el) => inputRefs.current[index] = el} // Assign refs to inputs
                    value={input}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength={1}
                    style={{ width: '40px', height: '40px', textAlign: 'center', marginRight: '6px' }}
                    type="tel" // Use tel type to get numeric keypad on mobile devices
                />
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <OTPInput numInputs={10} />
        </div>
    );
}

export default App;
