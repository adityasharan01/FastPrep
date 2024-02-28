/*
Currying Functions return sum of previous values 
Write a currying function that will return sum the argument with previous values.
*/

// write a curry function that returns sum of previous values

const curryFn = () => {
    let prevSum = 0
    return (newVal = 0) => {
        prevSum += newVal
        return prevSum
    }
}
const sum = curryFn()
console.log(sum(1));
console.log(sum(3));
console.log(sum(3));
console.log(sum(4));
console.log(sum()); 