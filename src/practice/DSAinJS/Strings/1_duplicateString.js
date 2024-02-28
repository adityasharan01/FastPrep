// Q1 Remove Duplicates from a String
// You will be given a string, your task is to remove duplicate characters from the string

// Approach: Use a Set to remove duplicates, then join back to a string.

function removeDuplicates(s) {
    return [...new Set(s)].join('');
}

// Test case
console.log(removeDuplicates("banana")); // "ban"
