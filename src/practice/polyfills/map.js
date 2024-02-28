Array.prototype.mapPolyfill = function (callback) {
    // Check if the callback is a function
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const result = []; // Create a new array to hold the results
    for (let i = 0; i < this.length; i++) {
        // Use the callback to transform each element and add to the result array
        result.push(callback(this[i], i, this));
    }
    return result; // Return the new array
};