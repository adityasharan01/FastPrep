import React, { useState } from 'react';
import "./App.css"
export const accordionConfig = [
    { id: 1, title: 'Accordion Item 1', content: 'Content for Item 1' },
    { id: 2, title: 'Accordion Item 2', content: 'Content for Item 2' },
    { id: 3, title: 'Accordion Item 3', content: 'Content for Item 3' },
];
// Adjust the path as necessary

const AccordionItem = ({ id, title, content, isActive, onClick }) => (
    <div>
        <div style={styles.title} onClick={() => onClick(id)}>
            {title}
        </div>
        {isActive && <div style={styles.content}>{content}</div>}
    </div>
);

const Accordion = ({ config }) => {
    const [activeId, setActiveId] = useState(null);

    const toggleItem = (id) => {
        setActiveId(activeId === id ? null : id); // Toggle active state or close if it's already open
    };

    return (
        <div>
            {config.map(({ id, title, content }) => (
                <AccordionItem
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    isActive={activeId === id}
                    onClick={toggleItem}
                />
            ))}
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            <Accordion config={accordionConfig} />
        </div>
    );
};

// Styles
const styles = {
    title: {
        cursor: 'pointer',
        padding: '10px',
        margin: '5px 0',
        backgroundColor: '#000',
        border: '1px solid #ddd',
        // userSelect: 'none', // Prevent text selection on click
    },
    content: {
        padding: '10px',
        margin: '5px 0',
        backgroundColor: '#526d79',
        border: '1px solid #ddd',
    },
};

export default App;
