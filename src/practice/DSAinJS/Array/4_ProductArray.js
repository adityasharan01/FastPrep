// Product of Array Except Self(Leetcode 238)
// Approach: Use two arrays to keep track of the product of all elements to the left and right of each element.

function productExceptSelf(nums) {
    const output = Array(nums.length).fill(1);
    let leftProd = 1, rightProd = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= leftProd;
        leftProd *= nums[i];
        output[nums.length - 1 - i] *= rightProd;
        rightProd *= nums[nums.length - 1 - i];
    }
    return output;
}

// Test cases
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
