// Creating polyfills for setTimeout and setInterval means we want to replicate the functionality of these native JavaScript functions.This can be educational, but keep in mind that in real - world scenarios, it's best to use the native implementations provided by the browser or Node.js environment because they're optimized and reliable.

// Polyfill for setTimeout
// A setTimeout function takes a callback function and 
// a delay(in milliseconds) as arguments.After the delay, 
// it executes the callback function. Here's a simplified version:
function setTimeoutPolyfill(callback, delay) {
    const start = Date.now();

    function check() {
        const elapsed = Date.now() - start;
        if (elapsed >= delay) callback(); // Time has passed, execute callback
        else setTimeout(check, delay - elapsed); // Check again after the remaining time
    }

    setTimeout(check, delay); // Initial check after the delay
}

