// In recent reactjs machine coding round, this was asked.Can you solve this ?
//     1.get the data from below url
// https://datausa.io/api/data?drilldowns=Nation&measures=Population
// 2. Display a table which should contain years and population from this api
// 3. Add a input where user can search year or population appy debouncing here.
// 4.Add a reset button which will reset the data in table to initial data.
// 5. Add delete option in each column which should delete respective column when clicked.

import React, { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};

const DataTable = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            const { data } = await response.json();
            setData(data);
        };

        fetchData();
    }, []);

    const filteredData = data.filter(row =>
        row.Year.toString().includes(debouncedSearchTerm) ||
        row.Population.toString().includes(debouncedSearchTerm)
    );

    const handleDelete = (index) => {
        setData(prevData => prevData.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by Year or Population"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setData(data)}>Reset</button>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Population</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Year}</td>
                            <td>{item.Population}</td>
                            <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
