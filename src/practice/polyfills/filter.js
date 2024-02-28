Array.prototype.filterPolyfill = function (callback) {
    // Check if the callback is a function
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const result = []; // Create a new array for elements that pass the test
    for (let i = 0; i < this.length; i++) {
        // Call the callback for each element. If it returns true, add the element to the result array
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result; // Return the new array
};