// Maximum Subarray(Leetcode 53)
// Approach: Use Kadane's algorithm to find the maximum sum subarray.

function maxSubArray(nums) {
    let maxSoFar = nums[0], maxEndingHere = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

// Test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6