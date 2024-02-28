// Count Palindromes in a String
// You will be given a string, your task is to count the number of palindromes in a string.
// A palindrome is a word, number, phrase, or other sequence of symbols that
//  reads the same backwards as forwards
// Approach: Check each substring for palindrome property.

function countPalindromes(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        count += countCenteredPalindromes(s, i, i);
        // Even length palindromes
        count += countCenteredPalindromes(s, i, i + 1);
    }
    return count;
}

function countCenteredPalindromes(s, left, right) {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    return count;
}

// Test case
console.log(countPalindromes("aaa")); // 6
