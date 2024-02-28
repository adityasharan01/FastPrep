// Maximum Substring With Max K Distinct Characters 
// Given a string you need to print longest possible substring that has exactly K unique characters.

// Maximum Substring With Max K Distinct Characters
// Approach: Use a sliding window to find the maximum length substring with up to K distinct characters.

function maxSubstringKDistinct(s, k) {
    let left = 0, maxLen = 0;
    const charCount = {};
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        charCount[char] = (charCount[char] || 0) + 1;
        while (Object.keys(charCount).length > k) {
            const leftChar = s[left];
            charCount[leftChar]--;
            if (charCount[leftChar] === 0) delete charCount[leftChar];
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

// Test case
console.log(maxSubstringKDistinct("araaci", 2)); // 4
