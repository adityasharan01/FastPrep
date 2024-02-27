/**
 * throttle takes a function fn and a limit.
It returns a new function that, when called, 
checks if it's within the throttling period (inThrottle). 
If not, it executes the function and sets the throttle.
After the limit period, inThrottle is reset, allowing the function to be called again.
 */
function throttle(fn, limit) {
    let inThrottle;
    return function () {
        const context = this, args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}