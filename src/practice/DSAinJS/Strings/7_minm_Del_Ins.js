// Minimum Insertions and Deletions
// You will be given 2 strings s1 and s2, you need to find the count of minimum insertions and
//  deletion operations that is needed to transform s1 into s2(vice versa)

// Minimum Insertions and Deletions
// Approach: First, find the longest common subsequence(LCS), then calculate insertions and deletions.

// Reuse longestCommonSubsequence function from above
function minInsertionsDeletions(s1, s2) {
    const lcs = longestCommonSubsequence(s1, s2);
    return {
        insertions: s2.length - lcs,
        deletions: s1.length - lcs
    };
}

// Test case
console.log(minInsertionsDeletions("heap", "pea")); // { insertions: 1, deletions: 2 }
