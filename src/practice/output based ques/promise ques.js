//Question 1

var p1 = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
p1.catch(error => console.log(error.message))
p1.catch(error => console.log(error.message))
// Explanation: The promise p is rejected with an error.The.catch() method is used to handle the rejection.Since.catch() returns a new promise, and in this case, it's used to log the error message without altering the promise chain, both .catch() handlers will execute independently, logging the error message twice.
// Output:
// Copy code
// The Fails!
// The Fails!

// Question 2
var p2 = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
    .catch(error => console.log(error.message))
    .then(error => console.log(error))
// Explanation: Here, the promise is rejected, and the rejection is caught by the.catch() method, which logs the error message.The.then() following the.catch() receives undefined since the.catch() does not return a value explicitly.Therefore, undefined is logged by the second.then().
//     Output:
// The Fails!
// undefined

// Question 3
new Promise((resolve, reject) => {
    resolve('Success!')
})
    .then(() => {
        throw Error('Oh noes!')
    })
    .catch(error => {
        return "actually, that worked"
    })
    .then(message => console.log(message))
// Explanation: The promise is initially resolved.The.then() method throws an error, which is caught by the.catch() method.The catch method returns a string, "actually, that worked", which is passed to the next.then(), where it is logged.
//     Output:
// actually, that worked

// Question 4
Promise.resolve('Success!')
    .then(data => {
        return data.toUpperCase()
    })
    .then(data => {
        console.log(data)
    })
// Explanation: The promise is resolved with the string 'Success!'.The first.then() method converts the string to uppercase and returns it.The next.then() logs the uppercase string.
// Output:SUCCESS!

// Question 5
Promise.resolve('Success!')
    .then(() => {
        throw Error('Oh noes!')
    })
    .catch(error => {
        return 'actually, that worked'
    })
    .then(data => {
        throw Error('The fails!')
    })
    .catch(error => console.log(error.message))
// Explanation: The promise is resolved, but the first.then() throws an error, which is caught by the.catch().The catch returns a string, but since the next.then() throws another error, this error is caught by the following.catch(), which logs the message of the new error.
// Output:The fails!

// Question 6
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v, 'finally');
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });
// Explanation: The promise is resolved with the value 2. This value is doubled in each.then().However, the finally method does not receive any arguments, and it cannot alter the value in the chain.Therefore, v is undefined in the.finally() method call.The value returned by finally is not passed down the chain, so the last.then() receives the value from the.then() before finally, which is 8.
// Output:
// 2
// 4
// undefined 'finally'
// 8
// In finally, the argument is always undefined because finally does not receive the promise's resolution or rejection value. Its primary use is for performing cleanup actions and it does not affect the value passed through the promise chain.


// Question 6
console.log("begins");
setTimeout(() => {
    console.log("setTimeout 1");
    Promise.resolve().then(() => {
        console.log("promise 1");
    });
}, 0);
new Promise(function (resolve, reject) {
    console.log("promise 2");
    setTimeout(function () {
        console.log("setTimeout 2");
        resolve("resolve 1");
    }, 0);
}).then((res) => {
    console.log("then 1");
    setTimeout(() => {
        console.log(res);
    }, 0);
});
//output:
// begins
// promise 2
// promise 1
// then 1
// setTimeout 1
// setTimeout 2
// resolve 1
// Here's the corrected sequence of actions and the expected output:

// Immediate Logging: The code logs "begins" immediately.
// Registering setTimeout and Promise Operations: It then schedules a setTimeout callback and executes the executor function of a new promise, logging "promise 2".
// Promise Resolution and setTimeout Callbacks: The event loop then checks the microtask queue(for promises) before the next event loop iteration for any timer callbacks.However, since promises and setTimeout callbacks are registered for future execution, JavaScript proceeds to the next operations.
//     Microtasks(Promise.resolve().then and Promise Thenable): Microtask queue has higher priority than timer callbacks, so "promise 1" from the Promise.resolve().then and "then 1" from the new Promise resolution are logged next.It's worth noting that while the executor of the new promise is executed immediately, its .then method is not called until the promise is resolved, and the resolution happens in a setTimeout, making it asynchronous and allowing the "promise 1" to log before "then 1".
// Macrotasks(setTimeout Callbacks): Finally, the event loop executes tasks in the timer queue, logging "setTimeout 1" and "setTimeout 2".The logging of "resolve 1" occurs in a setTimeout callback that is nested inside a.then method, making it execute last.

