// Q1.Contains Duplicate | Leetcode 217
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Contains Duplicate(Leetcode 217)
// Approach: Use a Set to track unique elements.If an element is already in the Set, it's a duplicate.

function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
