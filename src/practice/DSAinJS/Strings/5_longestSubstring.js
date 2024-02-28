// Longest Common Substring
// You will be 2 strings s1 and s2, your task is to find the length of the longest common substring between s1 and s2

// A substring is formed without skipping any character, i.e it is continuous.

// Approach: Use dynamic programming, tracking the length of the current substring match.

function longestCommonSubstring(s1, s2) {
    let maxLen = 0, endIndex = 0;
    const dp = Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0));
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j];
                    endIndex = i;
                }
            }
        }
    }
    return s1.substring(endIndex - maxLen, endIndex);
}

// Test case
console.log(longestCommonSubstring("abcdxyz", "xyzabcd")); // "abcd"
