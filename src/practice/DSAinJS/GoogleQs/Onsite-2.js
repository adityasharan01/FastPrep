You are receiving 2D GPS coordinates in a plane from some service and 
your task is to write a program that detects 
if a given point can create a square with any 3 previously seen points. 
Only squares consisting of horizontal and vertical lines are considered.

Let's denote the method as add(x, y) that returns true if (x,y) can be used to create a square, false otherwise.

Example input: (1,2), (3,5), (1,5), (4,2), (4,5)

//square can only be horizontal and vertical lines 
// definition is basically all sides has to be equal
//it has to be on the plane 
//calculate distance sqrt((x1-x2)^2+(y1-y2)^2)
//lines can only be parallel to x axis and y axis

class SquareDetector {
  constructor() {
    this.points = new Set();
  }
  
  add(x, y) {
    const newPoint= `${x},${y}`;
    
    for (let pointStr of this.points) {
      
      const [px, py] = points.split(',').map(Number);
      
      const dx = x - px;
      const dy = y - py;
      
      const corner1Str = `${px},${y - dy}` ;
      const corner2Str = `${x - dx},${py}` ;
      
      if (this.points.has(corner1Str) && this.points.has(corner2Str)) {
        // Square found before adding new point
        this.points.add(newPoint);
        return true
      }
      
      // check if second pair of corners
      const corner3Str = `${px},${y + dy}` ;
      const corner4Str = `${x - dx},${py + dy}` ;
      if (this.points.has(corner3Str) && this.points.has(corner4Str)) {
        // Square found before adding new point
        this.points.add(newPoint);
        return true
      }
      
      
      
    }
  }

}

const detector = new SqureDetector();
detector.add(1, 2)
detector.add(3, 5)
detector.add(1, 5)
detector.add(4, 2)
detector.add(4, 5)


// 



class SquareDetector{
  constructor(){
    this.points =[];
  }
  
  
  
  add(x,y){
    const newPoint= `${x},${y}`;
    
    for ( let point of this.points) {
      const [px, py] = points.split(',').map(Number);
      
      const potentialPoints = [
        `${x},${2 * y - py}`, // same x, different y
        `${2 * x - px}, ${y}`, // same y, different x
        `${x + (y - py), ${}`, // diagonal point
        `${x }` // diagonal point
      ];
    }
    
    
    
  
 
  }
  
  calculateDistance(point1, point2) {
    return (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2;
  }
  
  canFormSquare (a, b, c, d) {
    const points = [a, b, c, d];
    
    // calculate distance between points
    const distances = [];
    
    
    for (let i =0; i < points.length; i++) {
      for (let j= 0; j <points.length; j++) {
        const distance = this.calculateDistance(points[i], points[j]);
        distances.push(distance);
      }
    }
    
    // Sort Distances
    distances.sort((a, b) => a - b);
    
    // Square Condition
    // 1. last 2 Diaognal should be equal
    // 2. First 4 sides should be equal
    return distances[0] === distances[1] && distances[1] === distances[2] && distances[2] && distances[3] === 
           distances[4] === distances[5] && distances[3] < distances[4]
  } 


}

///////////////////////////
class SquareDetector{
  constructor(){
    this.points =[];
  }
  
  add(x,y){
    const newPoint= `${x},${y}`;
    
    for ( let point of this.points) {
      const [px, py] = points.split(',').map(Number);
      
      const potentialPoints = [
        `${x},${2 * y - py}`, // same x, different y
        `${2 * x - px}, ${y}`, // same y, different x
        `${x + (y - py), ${}`, // diagonal point
        `${x }` // diagonal point
      ];
    }
    
    
    
  
 
  }
  
  calculateDistance(point1, point2) {
    return (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2;
  }
  
  canFormSquare (a, b, c, d) {
    const points = [a, b, c, d];
    
    // calculate distance between points
    const distances = [];
    
    
    for (let i =0; i < points.length; i++) {
      for (let j= 0; j <points.length; j++) {
        const distance = this.calculateDistance(points[i], points[j]);
        distances.push(distance);
      }
    }
    
    // Sort Distances
    distances.sort((a, b) => a - b);
    
    // Square Condition
    // 1. last 2 Diaognal should be equal
    // 2. First 4 sides should be equal
    return distances[0] === distances[1] && distances[1] === distances[2] && distances[2] && distances[3] === 
           distances[4] === distances[5] && distances[3] < distances[4]
  } 


}
