// Longest Palindromic Subsequence
// You will be given a string and your task is to 
// find the longest palindromic subsequence string.
// A subsequence string is formed by skipping one or more characters.
// Approach: Use dynamic programming to find the longest subsequence.

function longestPalindromicSubsequence(s) {
    const dp = Array(s.length).fill(null).map(() => Array(s.length).fill(0));
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][s.length - 1];
}

// Test case
console.log(longestPalindromicSubsequence("bbbab")); // 4
/**
  * Time Complexity: O(n^2)
 */