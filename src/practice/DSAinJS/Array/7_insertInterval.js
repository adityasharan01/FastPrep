// Insert Interval(Leetcode 57)
// Approach: Iterate through the intervals, handling cases for before, after, and overlap with the new interval.

function insert(intervals, newInterval) {
    const result = [];
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i++]);
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        i++;
    }
    result.push(newInterval);
    while (i < intervals.length) result.push(intervals[i++]);
    return result;
}

// Test cases
console.log(insert([[1, 3], [6, 9]], [2, 5])); // [[1,5],[6,9]]
