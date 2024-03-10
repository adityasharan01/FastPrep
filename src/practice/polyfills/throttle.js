/**
 * throttle takes a function fn and a limit.
It returns a new function that, when called, 
checks if it's within the throttling period (inThrottle). 
If not, it executes the function and sets the throttle.
After the limit period, inThrottle is reset, allowing the function to be called again.
 */

const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            // fn.apply(context, args);
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
};

/**
 * Throttling is a technique to limit the frequency of function execution, 
 * ensuring that the function is only executed at most once in a specified time frame.
 * This is particularly useful for handling events that fire frequently,
 * like scrolling or resizing, but where you don't want to delay the execution, 
 * as with debounce, but rather limit it.
 */