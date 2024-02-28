import { useState } from "react";
import "./App.css"

export const carouselConfig = [
    { id: 1, src: 'https://avatars.githubusercontent.com/u/40923241', alt: 'Image 1' },
    { id: 2, src: 'https://avatars.githubusercontent.com/u/49115207', alt: 'Image 2' },
    { id: 3, src: 'https://avatars.githubusercontent.com/u/6882879', alt: 'Image 3' },
];

// Image Carousel Component
const Carousel = ({ config }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? config.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === config.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <button onClick={goToPrevious}>Previous</button>
            <img src={config[currentIndex].src} alt={config[currentIndex].alt} />
            <button onClick={goToNext}>Next</button>
        </div>
    );
};

const App = () => {
    return (
        <div className="App">
            <Carousel config={carouselConfig} />
        </div>
    );
};

export default App;
