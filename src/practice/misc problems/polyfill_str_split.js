/*
Creating a polyfill for the String.split() method involves writing a function 
that mimics the behavior of the native JavaScript String.split() method, 
which divides a string into an ordered list of substrings, puts these substrings 
into an array, and returns the array. The basic version of split() 
takes a delimiter as the first argument, which specifies where to divide the string. 
Here's a simple implementation of a polyfill for String.split(), 
including comments explaining each step and test cases to verify its correctness:
*/

/*
Approach Explanation
Initialization: The function starts by initializing an empty array result to store the
 substrings that result from splitting the string.

Handling Special Case: If the delimiter is an empty string (''), 
it returns an array containing each character of the original string. 
This behavior matches the native String.split() method. For simplicity, 
the native split is used in this case, but you could also iterate over the string 
and push each character to result.

Splitting Logic: The function uses a while loop to search for occurrences of the delimiter
within the string. It uses String.indexOf() to find the delimiter and 
String.substring() to extract the substrings between delimiters. After each find, 
it updates the startIndex to just after the last found delimiter to prepare for
the next search.

Final Substring: After the loop, it adds the final substring (after the last delimiter) to result.
This step is necessary because the last part of the string won't be followed by a delimiter.

Return Result: Finally, the function returns the result array containing all the substrings.

This polyfill demonstrates how to manually implement the splitting behavior of strings 
in JavaScript, providing a basic yet functional alternative to the native String.split() method.
*/

// Polyfill for String.split
function splitPolyfill(str, delimiter) {
    // Initialize an array to hold the resulting substrings
    const result = [];

    // Special case: if delimiter is an empty string, return an array of individual characters
    if (delimiter === '') {
        return str.split(''); // For simplicity, using native split here or could iterate over str and push each char to result
    }

    // Start index for slicing the string
    let startIndex = 0;

    // Find the first occurrence of the delimiter in the string
    let index = str.indexOf(delimiter);

    // Loop until no more delimiters are found
    while (index > -1) {
        // Push the substring found before the current delimiter
        result.push(str.substring(startIndex, index));

        // Update the start index to the character following the current delimiter
        startIndex = index + delimiter.length;

        // Look for the next occurrence of the delimiter
        index = str.indexOf(delimiter, startIndex);
    }

    // Push the last part of the string after the final delimiter
    result.push(str.substring(startIndex));

    // Return the array of substrings
    return result;
}

// Test cases
console.log(splitPolyfill("a,b,c,d", ",")); // Should return ["a", "b", "c", "d"]
console.log(splitPolyfill("hello", "")); // Should return ["h", "e", "l", "l", "o"]
console.log(splitPolyfill("test-case", "-")); // Should return ["test", "case"]
console.log(splitPolyfill("no-delimiter", "|")); // Should return ["no-delimiter"]
