Implement a JSON to string encoder

Python	      JavaScript	      JSON
dict	        plain object*	    object
list, tuple	  array	            array
str	          string	          string
int, float	  number	          number
True	        true	            true
False	        false	            false
None	        null	            null

"plain" object here means object literals ({name: 'alice'}) 
rather than JavaScript classes, or complex types such as Set, Map, and so on.

Examples:
JSON.stringify('hello world') => '"hello world"'
JSON.stringify(2) => '2'
JSON.stringify(true) => 'true'
JSON.stringify(['hello', 'world']) => '["hello","world"]'
JSON.stringify({name: 'alice'}) => '{"name":"alice"}'
JSON.stringify({2: 'alice', s:{x: 5, y: 6, toJSON() { return this.x + this.y; }}}) => '{2:"alice"}'
JSON.stringify[{test: 'Test', test1: 'Test'}, {test: 'Test', test1: 'Test'}]) => '[{"test":"Test","test1":"Test"},{"test":"Test","test1":"Test"}]'

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

// i need to have a class MyJson in which we have a method called stringify 
// based on the types that we receive we need to perform operation
//there could be some specific cases where object has number as keys
//iterate to object and then  stringify it and then stringify whole object itself.

// Solution

const encodeJSON = value => {
  // Base case for direct stringification
  if (typeof value === "string") {
     return `"${value}"`;
  } else if (typeof value === "number" || typeof value === "boolean" || value === null) {
    return String(value);
  } else if (Array.isArray(value)) {
     // Recursively encode each element
    const elements = value.map(encodeJSON);
    return `[${elements.join(',')}]`
  } else if (typeof value === 'object') {
    const entries = Object.entries(value).map(([key, val]) => `"${key}": ${encodeJSON(val)}`);
    return `{${entries.join(',')}}`                                              
  }
};

/*{
val:7
next:{
val:8
next:}
}

*/

const betterEncodeJSON = (value, visited = new WeakSet()) => {
 if (typeof value === "string") {
     return `"${value}"`;
  } else if (typeof value === "number" || typeof value === "boolean" || value === null) {
    return String(value);
  } else if (Array.isArray(value)) {
    if (visited.has(value)) {
      throw new TypeError('Converting circular structure to JSON !');
    }
    
    visited.add(value); // This is visited
    const elements = value.map(element => betterEncodeJSON(element, visited));
    // delete array from visited after processing
    visited.delete(value);
    return `[${elements.join(',')}]`
  }
} else if (typeof value === 'object') {
    
   if (visited.has(value)) {
      throw new TypeError('Converting circular structure to JSON !');
   }
    visited.add(value); // This is visited
    // const entries = Object.entries(value).map(([key, val]) => `"${key}": ${encodeJSON(val)}`);
    const entries = Object.entries(value).reduce((acc, [key, val]) => {
      if (val !== undefined) {
        acc.push(`"${key}: ${betterEncodeJSON(val, visited)}"`);
      }
      return acc;
      
    }, [])
    
    // delete object from visited after processing
    visited.delete(value);
    return `{${entries.join(',')}}`                                              
  } else if (value === undefined) {
    return 
  }

}


{1:'a',2:undefined}

toJSON() //it will print the value for the object


data = {"d":"d", x: 5, y: 6, toJSON() { return this.x + this.y; }}; => 11
JSON.stringify(data)=>11
