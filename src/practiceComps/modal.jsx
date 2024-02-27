import { useState } from "react";
import "./App.css"

export const modalConfig = {
    title: 'Modal Title',
    content: 'Content of the modal goes here...',
};

// Modal/Dialog Component
const Modal = ({ config }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <button onClick={toggleModal}>Show Modal</button>
            {isVisible && (
                <div className="modal">
                    <h2>{config.title}</h2>
                    <p>{config.content}</p>
                    <button onClick={toggleModal}>Close</button>
                </div>
            )}
        </>
    );
};


const App = () => {
    return (
        <div className="App">
            <Modal config={modalConfig} />
        </div>
    );
};

export default App;
