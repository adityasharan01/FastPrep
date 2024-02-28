// Container With Most Water(Leetcode 11)
// Approach: Use two pointers, moving the one pointing to the shorter line inward.

function maxArea(height) {
    let max = 0, left = 0, right = height.length - 1;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return max;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
