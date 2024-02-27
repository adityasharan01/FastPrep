import React, { useState } from 'react';
import "./App.css"
export const multiSelectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
];
// Ensure the path is correct

const MultiSelectDropdown = ({ options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (event) => {
        const values = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedOptions(values);
    };

    return (
        <div>
            <div>
                Selected Values: {selectedOptions.map((value) => (
                    <span key={value} style={styles.selectedTag}>{value}</span>
                ))}
            </div>
            <select multiple value={selectedOptions} onChange={handleSelectChange} style={styles.select}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            <MultiSelectDropdown options={multiSelectOptions} />
        </div>
    );
};

// Styles
const styles = {
    select: {
        width: '200px',
        height: '100px',
        overflow: 'auto',
    },
    selectedTag: {
        display: 'inline-block',
        padding: '5px',
        margin: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
};

export default App;
