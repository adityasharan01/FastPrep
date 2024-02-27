// Polyfill for setInterval
// The setInterval function repeatedly calls a callback function with a fixed time delay
//  between each call.Here's how you might implement a simplified version:
function setIntervalPolyfill(callback, interval) {
    let expected = Date.now() + interval;

    function repeat() {
        const drift = Date.now() - expected;
        if (drift > interval) {
            // If the drift is more than one interval, skip executions
            console.warn('Interval skipped!');
        }
        callback(); // Execute the callback function

        expected += interval;
        setTimeout(repeat, Math.max(0, interval - drift)); // Adjust next execution
    }

    setTimeout(repeat, interval);
    return {
        clear: function () {
            clearTimeout(repeat);
        }
    };
}
