/*652. Find Duplicate Subtrees
Medium
Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.*/

//To solve this problem, we will use serialization and hashing. 
//Below is the JavaScript code to find all duplicate subtrees in a binary tree.




  function findDuplicateSubtrees(root) {
    const map = new Map();
    const result = [];

    function serialize(node) {
        if (!node) return '#';

        const left = serialize(node.left);
        const right = serialize(node.right);
        const subtree = `${node.val},${left},${right}`;

        if (map.has(subtree)) {
            map.set(subtree, map.get(subtree) + 1);
        } else {
            map.set(subtree, 1);
        }

        if (map.get(subtree) === 2) {
            result.push(node);
        }

        return subtree;
    }

    serialize(root);
    return result;
}

/* Time Complexity
Each node is visited once (O(N) traversal).
String operations (concatenation and hashing) are amortized to O(1) due to the efficient handling by JavaScript engines. */


/*Space Complexity
The hash map stores each unique subtree serialization, which can be O(N) in the worst case.
The recursion stack in the worst case is equal to the height of the tree, which can be O(N) for a skewed tree.*/
