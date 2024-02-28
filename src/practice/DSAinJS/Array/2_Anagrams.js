//  Valid Anagram(Leetcode 242)
// Approach: Count characters of both strings and compare.

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1;
    }
    for (let key in count) {
        if (count[key] !== 0) return false;
    }
    return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
