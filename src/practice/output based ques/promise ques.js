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



