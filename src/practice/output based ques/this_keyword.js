// Question 1
const person = {
    name: "Vedant",
    getName: function () {
        return `${this.name} is my name`;
    },
};
console.log(person.getName());
// Output: "Vedant is my name"
// Explanation: Here, this refers to the person object because getName is a method 
// invoked on person.The function is defined using the function keyword,
// so this correctly refers to the person object, allowing access to its name property.

// Question 2
function test() {
    console.log(this);
}
test();
// Output: Window object in browsers or global object in Node.js
// Explanation: The test function is called in the global context, 
// so this refers to the global object(Window in browsers, global in Node.js).
// This behavior aligns with the rule that in a regular function call, 
// this refers to the global object.

// Question 3
const person = {
    name: "Vedant",
    getName: () => {
        return `${this.name} is my name`;
    },
};
console.log(person.getName());
Output: " is my name"
// Explanation: Arrow functions do not have their own this context; 
// they inherit this from the parent scope at the time they are defined.
// In this case, the parent scope is the global scope, where this.name is undefined.Thus, this.name does not refer to the name property of 
// the person object, leading to an output without the name.


// Question 4
function User() {
    this.name = "John Doe"
    this.score = 20
    this.sayUser = function () {
        console.log(this.name)

        function innerFunction() {
            console.log(this.name)
        }

        innerFunction();
    }
}
let name = new User();
name.sayUser();
// Output: "John Doe" followed by undefined or the global name value 
// if running in a non - strict mode in the browser
// Explanation: The sayUser method correctly logs "John Doe" because 
// this refers to the User instance.However, innerFunction is a
//  regular function where this does not automatically refer to the
//  enclosing User instance but to the global object.Since 
// there's no global name property with a string value 
// (unless explicitly defined in the global scope),
//  it logs undefined or the global name if it exists.

// Question 5
function User() {
    this.name = "John Doe"
    this.score = 20
    this.sayUser = function () {
        console.log(this.name)

        const innerFunction = () => {
            console.log(this.name)
        }

        innerFunction();
    }
}
let name = new User();
name.sayUser();
// Output: "John Doe" followed by "John Doe"
// Explanation: Similar to Question 4, this within sayUser correctly 
// refers to the User instance, logging "John Doe".Unlike 
// Question 4, innerFunction is now an arrow function,
//  which does not have its own this but inherits it from the surrounding(lexical) scope,
//  which is the sayUser method.Hence, this within innerFunction still refers to the User instance, 
// allowing it to access and log the name property again as "John Doe".