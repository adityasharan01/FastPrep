/*
To approach the task scheduling problem where you need to order tasks
 based on their dependencies, you can use a technique similar to topological sorting 
 in graph theory. This involves treating each task as a node in a graph and 
 its dependencies as directed edges. 
The goal is to find a linear ordering of the tasks that respects their dependencies.
*/
/*
The task provided involves creating a schedule from a set of tasks and their dependencies.
 Each task is represented as an object with an id and a list of dependencies. 
 The goal is to determine an order in which the tasks can be executed, 
 considering that a task can only be executed once all of its dependencies 
 have been completed. This problem is essentially about finding a 
 topological sort of a directed graph, where nodes represent tasks and 
 edges represent dependencies between tasks.
*/

/*
Constraints:

No cyclic dependencies are allowed 
(i.e., the graph formed by the tasks and their dependencies is a Directed Acyclic Graph 
(DAG)).
The input guarantees at least one valid order of execution.
The id of each task is unique.


*/
/*
Example Input:
const schedules = [
    { "id": "a", "dependencies": ["b", "c"] },
    { "id": "b", "dependencies": ["d"] },
    { "id": "c", "dependencies": ["e"] },
    { "id": "d", "dependencies": [] },
    { "id": "e", "dependencies": ["f"] },
    { "id": "f", "dependencies": [] }
]
Example Output:
["d", "f", "e", "b", "c", "a"]*/
const schedules = [
    { "id": "a", "dependencies": ["b", "c"] },
    { "id": "b", "dependencies": ["d"] },
    { "id": "c", "dependencies": ["e"] },
    { "id": "d", "dependencies": [] },
    { "id": "e", "dependencies": ["f"] },
    { "id": "f", "dependencies": [] }
];

function findOrder(schedules) {
    let graph = {}; // to hold the tasks and their edges
    let visited = {}; // to track visited nodes
    let result = []; // to store the result of the topological sort

    // Initialize the graph
    schedules.forEach(task => {
        graph[task.id] = task.dependencies;
        visited[task.id] = false;
    });

    function dfs(node) {
        if (visited[node]) {
            return;
        }
        visited[node] = true;
        let neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i++) {
            dfs(neighbors[i]);
        }
        result.push(node); // add the node to the result after visiting its dependencies
    }

    // Perform DFS for each node in the graph
    Object.keys(graph).forEach(node => {
        if (!visited[node]) {
            dfs(node);
        }
    });

    return result.reverse(); // reverse the result to get the correct order
}

console.log(findOrder(schedules));