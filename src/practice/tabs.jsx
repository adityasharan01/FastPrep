import { useState } from 'react';
import "./App.css"
export const tabsConfig = [
    { id: 'tab1', title: 'Tab 1', content: 'This is content for Tab 1.' },
    { id: 'tab2', title: 'Tab 2', content: 'This is content for Tab 2.' },
    { id: 'tab3', title: 'Tab 3', content: 'This is content for Tab 3.' },
];

const Tabs = ({ config }) => {
    const [activeTab, setActiveTab] = useState(config[0].id);

    return (
        <>
            <ul style={styles.tabsList}>
                {config.map((tab) => (
                    <li
                        key={tab.id}
                        style={{ ...styles.tab, ...(activeTab === tab.id ? styles.activeTab : {}) }}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>
            <div style={styles.tabContent}>
                {config.map((tab) => {
                    if (tab.id === activeTab) {
                        return <div key={tab.id}>{tab.content}</div>;
                    }
                    return null;
                })}
            </div>
        </>
    );
};

const App = () => {
    return (
        <div className="App">
            <Tabs config={tabsConfig} />
        </div>
    );
};

// Styles
const styles = {
    tabsList: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        borderBottom: '1px solid #ccc',
        margin: 0,
    },
    tab: {
        padding: '10px 20px',
        cursor: 'pointer',
        borderBottom: '3px solid red', // Visual feedback for inactive state
        transition: 'all 0.3s ease',
    },
    activeTab: {
        borderBottom: '3px solid blue', // Highlight for the active tab
        backgroundColor: '#000', // Light background for the active tab
    },
    tabContent: {
        padding: '20px',
        border: '1px solid #ccc',
        borderTop: 'none', // Integrate with the tab buttons' border
    },
};

export default App;