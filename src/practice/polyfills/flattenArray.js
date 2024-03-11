function flattenArrayRecursively(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArrayRecursively(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example usage:
const arr1 = [1, [2, [3, [4]], 5]];
console.log(flattenArrayRecursively(arr1));

/*The stack approach involves using a stack to keep track of arrays 
that need to be flattened.It's a non-recursive, iterative approach that 
can be more efficient in terms of memory usage for very deep or very large arrays.*/

function flattenArrayUsingStack(arr) {
    let stack = [...arr]; // Clone the array to a stack
    let result = [];

    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            // If it's an array, push its elements to the stack (in reverse order to maintain the original order)
            stack.push(...next.reverse());
        } else {
            result.push(next);
        }
    }

    // The result array will be in reverse order, so reverse it back
    return result.reverse();
}

// Example usage:
const arr2 = [1, [2, [3, [4]], 5]];
console.log(flattenArrayUsingStack(arr2));
