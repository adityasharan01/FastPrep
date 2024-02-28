/*
Write a function that can memoize (remember) the output 
for any function if we pass same arguments.
*/

function memoize(fn) {
    // Create a cache object to store previously computed results
    const cache = {};

    // Return a new function that checks if the result for the given arguments is already in cache
    return function (...args) {
        // Create a unique key for the given arguments to use as a cache identifier
        // JSON.stringify is used to support multiple arguments of any type, but has limitations (e.g., doesn't handle circular references)
        const key = JSON.stringify(args);

        // Check if the result for these arguments is already in cache
        if (key in cache) {
            // Return the cached result if it exists
            return cache[key];
        }

        // If the result is not in cache, call the original function with all arguments
        const result = fn.apply(this, args);

        // Store the result in cache with the key before returning the result
        cache[key] = result;

        return result;
    };
}

// Example usage:
// Define a simple function to memoize. For example, a function that calculates the nth Fibonacci number
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// Memoize the fib function
const memoizedFib = memoize(fib);

// Now when you call memoizedFib with the same argument, it will return the result from cache instead of recalculating
console.log(memoizedFib(10)); // First call, calculates and caches the result
console.log(memoizedFib(10)); // Subsequent call, returns result from cache


/*
Approach Explanation:
Create a Cache: A JavaScript object is used as a cache to store results of the function 
calls. Each unique set of arguments to the function generates a unique key for accessing the cache.

Return a New Function: The memoize function returns a new function that encapsulates the 
original function and adds caching logic to it.

Generate a Unique Key: The arguments provided to the function are serialized 
into a string using JSON.stringify to create a unique key for storing the result
 in the cache. This allows the function to handle multiple arguments of any type, 
 but it's important to note that JSON.stringify has limitations 
 (e.g., it does not handle circular references and distinguishes between objects that are
  otherwise considered equal in JavaScript).

Cache Check and Return: Before executing the original function,
the wrapper function checks if the result for the given arguments is already in the cache.
If so, it returns the cached result. Otherwise, it proceeds to call the original function,
caches its result, and then returns the result.

Applying Memoization: Finally, the memoize function is applied to an example
function (in this case, a function to calculate the nth Fibonacci number) 
to demonstrate how it prevents unnecessary recalculations by caching the results of function calls.
*/