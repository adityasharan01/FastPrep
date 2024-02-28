/*
Flatten an Array
You’ll be given an array that can be nested in multiple levels. 
Your task is to flatten this array and make it single level.
*/

/*
To flatten a nested array into a single-level array in JavaScript, 
you can use a recursive approach. The idea is to iterate through each element of the array,
and if an element is an array itself, 
recursively flatten it before merging it with the rest of the results. 
Here's a simple implementation with comments explaining each step:*/

function flattenArray(arr) {
    // Initialize an empty array to hold the flattened result
    let result = [];

    // Loop through each element in the input array
    arr.forEach(item => {
        if (Array.isArray(item)) {
            // If the current item is an array, recursively flatten it and then push each element to the result
            result = result.concat(flattenArray(item));
        } else {
            // If the current item is not an array, directly push it to the result
            result.push(item);
        }
    });

    // Return the flattened array
    return result;
}

// Example usage:
const nestedArray = [1, [2, [3, [4, 5]], 6], 7];
const flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7]


/*
Approach Explanation
Base Case and Recursion: The function iterates over each element of the array. 
When it encounters an element that is an array itself (Array.isArray(item)), 
it calls itself with this element as the argument, effectively flattening it. 
This is the recursive step. When it encounters a non-array element, 
it adds this element directly to the result array.

Combining Results: The concat method is used to merge the elements or flattened
arrays obtained from the recursive calls with the accumulated result. 
This ensures that the output is a single-level array containing all elements
from the nested structures.

Iterative Approach: The function uses forEach to iterate over each element of the input 
array, applying the appropriate action (recursion or direct insertion) 
based on whether the element is an array.

This approach is straightforward and effectively handles arrays nested to 
any depth, ensuring all elements are flattened into a single-level array.
*/