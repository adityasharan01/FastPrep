/*
Flatten Deeply Nested Object
You’ll be given an object that can be nested to multiple levels. 
Your task is to flatten this object and bring it to a single level.
*/
/*
TO  flatten a deeply nested object into a single-level object in JavaScript,
you can use a recursive approach similar to flattening arrays. 
However, for objects, you'll concatenate keys to keep track of the nested structure. 
Here's how you can do it, with comments explaining each step:
*/

function flattenObject(obj, parentKey = '', result = {}) {
    // Iterate over each key in the object
    Object.keys(obj).forEach(key => {
        // Compute new key based on parentKey and current key
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            // If the current property is an object, not null, and not an array, recursively flatten it
            flattenObject(obj[key], newKey, result);
        } else {
            // If the current property is not an object, add it to the result with the newKey
            result[newKey] = obj[key];
        }
    });

    // Return the flattened object
    return result;
}

// Example usage:
const deeplyNestedObject = {
    a: 1,
    b: { c: 2, d: { e: 3, f: { g: 4 } } },
    h: { i: 5 }
};

const flattenedObject = flattenObject(deeplyNestedObject);
console.log(flattenedObject);
// Output: { "a": 1, "b.c": 2, "b.d.e": 3, "b.d.f.g": 4, "h.i": 5 }



/*
Approach Explanation
Recursive Function: The flattenObject function takes three parameters: the object to be flattened (obj), the current concatenated key (parentKey), and the result object (result) that accumulates the flattened properties. Initially, parentKey is an empty string, and result is an empty object.

Iteration Over Keys: The function iterates over each key in the current object using Object.keys(obj).forEach(...). For each key, it constructs a new key (newKey) that represents the path to this property from the top level of the original object. This is done by concatenating the current key to the parentKey using dot notation.

Recursive Flattening: If the current property's value is an object (and not an array or null), the function calls itself recursively with this value, the newKey, and the current result object. This process flattens the nested structure by adding each terminal property to the result object with its fully qualified key.

Terminal Properties: When the function encounters a property that is not an object (or is null or an array), it adds this property directly to the result object using the newKey.

Base Case and Termination: The recursion naturally terminates when it has processed all properties and sub-properties of the input object. The base case is effectively when the function encounters a property that is not an object, at which point it simply adds this property to the result object without further recursion.

*/