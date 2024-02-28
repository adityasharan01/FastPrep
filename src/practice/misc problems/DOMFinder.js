/*DOM Finder
You’ll be given 2 identical node structures, rootA and rootB.
You have to traverse rootA and find the path for nodeA.
Now using the same path you traversed you need to 
find the value that is present in for the identical position in rootB.
*/

/*
For this scenario, we can write a JavaScript function that takes four parameters: 
rootA, rootB, nodeA, and a function findPath to determine the path to nodeA within rootA. 
Then, we use this path to find the corresponding node in rootB.

This approach assumes that rootA and rootB are identical in structure 
(but not necessarily in values) and that each node has an identifiable way to be distinguished 
among its siblings (e.g., by index or some unique property). 
For simplicity, let's assume we're distinguishing nodes by their relative positions 
(e.g., first child, second child, etc.).
*/

function findPath(root, targetNode, path = []) {
    if (root === targetNode) {
        return path;
    }

    for (let i = 0; i < root.children.length; i++) {
        const foundPath = findPath(root.children[i], targetNode, path.concat(i));
        if (foundPath) {
            return foundPath;
        }
    }

    return null;
}

function findNodeByPath(root, path) {
    let current = root;
    for (let i = 0; i < path.length; i++) {
        if (!current.children[path[i]]) {
            return null; // Path is invalid
        }
        current = current.children[path[i]];
    }
    return current;
}

function findCorrespondingNode(rootA, rootB, nodeA) {
    const path = findPath(rootA, nodeA);
    if (path) {
        return findNodeByPath(rootB, path);
    }
    return null; // NodeA doesn't exist in rootA
}

// Example usage:
// Assuming we have rootA and rootB as identical structures and 
// nodeA is a node from rootA
let rootA = ...; // DOM or Tree structure
let rootB = ...; // Identical structure to rootA
let nodeA = ...; // Target node in rootA
let correspondingNode = findCorrespondingNode(rootA, rootB, nodeA);
if (correspondingNode) {
    console.log(correspondingNode.value); // Or any other property of interest
}
