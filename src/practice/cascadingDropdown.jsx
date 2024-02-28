import React, { useState } from 'react';
import "./App.css"
export const dropdownConfig = {
    countries: [
        {
            id: 1, name: 'Country 1', states: [
                { id: 1, name: 'State 1-1', cities: ['City 1-1-1', 'City 1-1-2'] },
                { id: 2, name: 'State 1-2', cities: ['City 1-2-1', 'City 1-2-2'] },
            ]
        },
        {
            id: 2, name: 'Country 2', states: [
                { id: 1, name: 'State 2-1', cities: ['City 2-1-1', 'City 2-1-2'] },
                { id: 2, name: 'State 2-2', cities: ['City 2-2-1', 'City 2-2-2'] },
            ]
        }
    ]
};


const CascadingDropdown = ({ config }) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const handleCountryChange = (event) => {
        const country = config.countries.find(c => c.id === parseInt(event.target.value));
        setSelectedCountry(country.id);
        setStates(country.states);
        setSelectedState('');
        setCities([]);
    };

    const handleStateChange = (event) => {
        const state = states.find(s => s.id === parseInt(event.target.value));
        setSelectedState(state.id);
        setCities(state.cities);
    };

    return (
        <div>
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select Country</option>
                {config.countries.map(country => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                ))}
            </select>

            <select value={selectedState} onChange={handleStateChange} disabled={!states.length}>
                <option value="">Select State</option>
                {states.map(state => (
                    <option key={state.id} value={state.id}>{state.name}</option>
                ))}
            </select>

            <select disabled={!cities.length}>
                <option value="">Select City</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))}
            </select>
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            <CascadingDropdown config={dropdownConfig} />
        </div>
    );
};

export default App;
