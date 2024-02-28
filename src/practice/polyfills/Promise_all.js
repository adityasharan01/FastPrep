/*Implementing a polyfill for Promise.all() involves creating a function that takes 
an iterable of promises and returns a single Promise that resolves when all of the
input promises have resolved or rejects if any input promise rejects.
The resolved value of the returned promise is an array containing the resolved values 
of the input promises, in the same order as the input.
Here's a simple implementation with comments explaining each step, 
followed by test cases to verify its correctness:*/

/*
Approach Explanation
Handling Non-iterable Input: The function begins by checking if the input is iterable. 
If not, it immediately rejects the returned promise with a TypeError.

Initialization: It initializes an empty array results to store the resolved values 
of the input promises and a counter resolvedCount to track the number of promises that
have been resolved.

Empty Array Special Case: If the input array is empty, 
it immediately resolves the returned promise with an empty array.

Iterating Over Promises: The function iterates over the input promises,
using Promise.resolve() to ensure that non-promise values are treated as resolved promises. It then uses .then() to handle resolution, storing each resolved value in the results array at the corresponding index. This ensures the order of resolved values matches the order of the input promises.

Resolving or Rejecting the Outer Promise: If all promises are resolved,
the outer promise is resolved with the results array. If any promise rejects,
the outer promise is immediately rejected with the error from the rejecting promise.

This polyfill accurately mimics the behavior of Promise.all(),
handling both promise and non-promise values and maintaining the order of resolved values.
It demonstrates handling multiple asynchronous operations in parallel,
resolving when all operations are complete or rejecting upon the first error.

*/

function promiseAllPolyfill(promises) {
    // Return a new Promise
    return new Promise((resolve, reject) => {
        // Check if the input is iterable, if not, throw a TypeError
        if (!promises || typeof promises[Symbol.iterator] !== 'function') {
            reject(new TypeError('Argument is not iterable'));
            return;
        }

        // Initialize an array to store the results
        const results = [];
        // Count of resolved promises
        let resolvedCount = 0;
        // Length of the input promises array
        const promisesLength = promises.length;

        // If the array of promises is empty, resolve immediately
        if (promisesLength === 0) {
            resolve(results);
            return;
        }

        // Iterate over the promises
        promises.forEach((promise, index) => {
            // Wrap each promise with Promise.resolve() in case it's not a promise
            Promise.resolve(promise)
                .then(value => {
                    // Store each result in the results array at the correct index
                    results[index] = value;
                    resolvedCount += 1;
                    // If all promises are resolved, resolve the outer promise
                    if (resolvedCount === promisesLength) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    // If any promise rejects, reject the outer promise
                    reject(error);
                });
        });
    });
}

// Test cases
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

// Use the polyfill to handle an array of promises and log the result
promiseAllPolyfill([promise1, promise2, promise3]).then(values => {
    console.log(values); // Expected output: [3, 42, "foo"]
}).catch(error => {
    console.error(error);
});

// Test with an empty array
promiseAllPolyfill([]).then(values => {
    console.log('Empty array test:', values); // Expected output: []
}).catch(error => {
    console.error(error);
});

// Test with a non-iterable argument
promiseAllPolyfill(null).then(values => {
    console.log(values);
}).catch(error => {
    console.error('Non-iterable test:', error); // Expected output: TypeError
});
