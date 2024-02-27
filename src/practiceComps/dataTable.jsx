import { useState, useMemo } from 'react';

// Sample data
const initialData = [
    { id: 1, name: "John", age: 25, email: "test@test.com", status: true },
    { id: 2, name: "Jane", age: 30, email: "jane@example.com", status: false },
    { id: 3, name: "Bob", age: 22, email: "bob@example.com", status: true },
    { id: 4, name: "Alice", age: 28, email: "alice@example.com", status: false },
    { id: 5, name: "Tom", age: 35, email: "tom@example.com", status: true },
    { id: 6, name: "Lucy", age: 24, email: "lucy@example.com", status: false },
    { id: 7, name: "Mark", age: 40, email: "mark@example.com", status: true },
    { id: 8, name: "Sara", age: 27, email: "sara@example.com", status: false },
    { id: 9, name: "Mike", age: 32, email: "mike@example.com", status: true },
    { id: 10, name: "Emma", age: 29, email: "emma@example.com", status: false }
];


const DataTable = () => {
    const [data, setData] = useState(initialData);
    const [filterQuery, setFilterQuery] = useState('');
    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const filteredAndSortedData = useMemo(() => {
        return data
            .filter(item =>
                item.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
                item.age.toString().includes(filterQuery)
            )
            .sort((a, b) => {
                if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
                if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
                return 0;
            });
    }, [data, filterQuery, sortKey, sortOrder]);

    return (
        <div>
            <input
                type="text"
                placeholder="Filter by name or age"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
            />
            <button onClick={() => setSortKey('name')}>Sort by Name</button>
            <button onClick={() => setSortKey('age')}>Sort by Age</button>
            <button onClick={() => setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc')}>
                Toggle Sort Order
            </button>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => setSortKey('name')}>Name</th>
                        <th onClick={() => setSortKey('age')}>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSortedData.map(({ id, name, age, email }) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
