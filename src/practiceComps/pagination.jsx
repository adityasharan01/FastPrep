/*
Core Concepts of Pagination:
Page Size: Determines the number of items to display on a single page.
Current Page: Tracks which page is currently being viewed.
Total Items: The total number of items in the dataset.
Total Pages: Calculated by dividing the total number of items by the page size.
 It determines how many pages are needed to display all items.
Approach to Implement Pagination:
Fetching Data: Initially, fetch the data that you want to display, 
either all at once or page by page from a backend API.
Storing State: Use React state to store the current page, page size,
 and optionally the total number of items if you're not fetching all data at once.
Slicing Data: Based on the current page and page size, calculate which 
subset of the data to display.
Navigation: Provide a way for the user to change the current page, 
usually through previous/next buttons or directly selecting a page number.
*/

import React, { useState } from 'react';

const PaginationComponent = ({ items, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const goToNextPage = () => {
        setCurrentPage((prevCurrentPage) => Math.min(prevCurrentPage + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, 1));
    };

    return (
        <div>
            {/* Display the current items */}
            <div>
                {currentItems.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            {/* Pagination controls */}
            <div>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default PaginationComponent;
/*
Explanation:
Pagination Logic: This component takes items (the dataset) and itemsPerPage as props.
 It calculates the current items to display based on the currentPage and itemsPerPage.
Navigation: It provides "Previous" and "Next" buttons to navigate through pages. 
The buttons are disabled appropriately when the current page is the first or last page.
Flexibility: This component can be used with any dataset by passing the appropriate items and itemsPerPage props.
This basic example demonstrates how to implement pagination in a React component. You can extend it with more features like direct page selection or dynamic items per page selection based on your requirements.
*/