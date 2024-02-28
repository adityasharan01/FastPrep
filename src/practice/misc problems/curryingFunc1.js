/* To create a currying function in JavaScript that accepts a total of 5 arguments
in any order or fashion and returns their sum, you can use a closure to 
keep track of the arguments received and the number of arguments still expected.
When the function has received all 5 arguments, 
it calculates and returns the sum.Here's a simple implementation 
with comments explaining each step:
*/

/*
Approach Explanation
Initialization: The curriedSum function initializes with the expected number of arguments (totalArgs = 5) and starts with an empty array args to store received arguments.

Collecting Arguments: The _curry function is defined within curriedSum and is responsible for collecting arguments until the total count (totalArgs) is reached.
It uses JavaScript's rest parameters (...newArgs) to accept an arbitrary number of arguments at each call.

Returning the Function or Sum: If the current total number of arguments stored in
args is less than totalArgs,
 _curry returns itself, effectively waiting for more arguments. 
This is the essence of currying, where a function returns another function until 
all arguments are received. Once the total number of arguments reaches the expected count,
_curry calculates the sum of all arguments using reduce and returns the result.

Flexibility in Argument Passing: This implementation allows arguments to be passed in 
any fashion and order, either one by one (e.g., sum(1)(2)(3)(4)(5)) or in groups 
at different stages (e.g., sum(1, 2)(3, 4)(5)), 
demonstrating the flexibility of the currying pattern in JavaScript.
*/


function curriedSum(totalArgs = 5) {
    // Initialize an array to keep track of received arguments
    let args = [];

    // Define a function that will collect arguments until the totalArgs count is reached
    function _curry(...newArgs) {
        // Concatenate new arguments to the existing list
        args = [...args, ...newArgs];
        // If the total number of arguments received is less than the expected count,
        // return the _curry function itself, waiting for more arguments
        if (args.length < totalArgs) {
            return _curry;
        }
        // Once all arguments are received, calculate and return the sum
        return args.reduce((acc, current) => acc + current, 0);
    }

    // Return the inner function to start collecting arguments
    return _curry;
}

// Example usage:
const sum = curriedSum(); // Initialize the curried function for 5 arguments
console.log(sum(1)(2)(3)(4)(5)); // Pass arguments in any fashion and order, Output: 15
console.log(sum(1, 2)(3, 4)(5)); // Can also pass multiple arguments at once, Output: 15
