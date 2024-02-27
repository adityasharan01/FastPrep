Array.prototype.reducePolyfill = function (callback, initialValue) {
    // Check if the callback is not a function
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // `this` refers to the array on which reducePolyfill is called
    const array = this;
    let accumulator = initialValue; // Set the initial value as the accumulator
    let startIndex = 0; // Start index

    // If initialValue is not provided, use the first element of the array
    // and adjust the start index to skip the first element
    if (accumulator === undefined) {
        if (array.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = array[0];
        startIndex = 1; // Start from the second element
    }

    // Loop through the array
    for (let i = startIndex; i < array.length; i++) {
        // Call the callback for each element, updating the accumulator
        accumulator = callback(accumulator, array[i], i, array);
    }

    // Return the accumulated result
    return accumulator;
};