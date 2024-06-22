/* Datacenter Planning
Google wants to build a new datacenter (DC) in a city as far as possible from its other data centers.
Cities are connected with each other via network connections.
Given this list of connections and list of cities with data centers, 
write a function which returns the city with the farthest network connection from existing data centers.  
connections = [(‘a’, ‘b’), (‘b’, ‘c’), (‘c’, ‘d'), (‘d’, ‘e’), (‘e’, ‘f’), (‘e’, ‘h’), (‘f’, ‘g’), (‘g’, ‘i’), (‘h’, ‘i’)] 
data_centers = ['a', 'g']


*/
//return the farthest network connection 
{
a:[b],
b:[a,c],
c:[b,d],
d:[c,e],
e:[d,f,h],
f:[e,g],
g:[f,i],
h:[e,i],
i:[f]
}
//Doing BFS
//problem :
a starting point b
queue = [{city : 'a', dist:0}, {city: 'g', dist : 0}]

// setup distance map to track the shortedst distace of cities from data center
distances = {
  a: 0,
  g: 0
  b: 1,
  .....
  i: max
}

// BFS Traversal

// Iteration 1
- D

queue = [{city: 'g', dist: 0}, {city: 'b', dist: 1}]


// Implementation

function findFarthestCity(connections, dataCenters) {
  // Build the graph as an Adjency List
  const graph = {};
  connections.forEach(([city1, city2]) => {
    if (!graph[city1]) graph[city1] = [];
    if (!graph[city2]) graph[city2] = [];
    graph[city1].push(city2);
    graph[city2].push(city1);
  });
  
  // Init the BFS queue and distances
  const queue = {};
  const distances = {};
  dataCenters.forEach(dc => {
    queue.push({city: dc, dist: 0})
    distances[dc] = 0;
  });
  
  // Perform BFS from all data centers at the same time
  let farthestCity = [];
  let maxDistance = -1;
  
  // Process each adjacent city
  while (queue.length > 0) {
    const {city, dist} = queue.shift();
    
    graph[city].forEach(neighbor => {
      if (distances[neighbor] === undefined || distances[neighbor] > dist + 1) {
        distances[neighbor] = dist + 1;
        queue.push({city: neighbor, dist: dist + 1});
        
        // Check if this is farthest 
        if (dist + 1 > maxDistance) {
          maxDistance = dist + 1;
          farthestCity = [neighbor];
        }else if (dist+1 === maxDistance){
          farthestCity.push(neighbor);
        }
    }
    
    }
  });
  
  
  return farthestCity;
  
}
  
 Time Complexity: O(V+E)
 Space Complexity : O(V+E)
  
 //multiple farthest cities are there
