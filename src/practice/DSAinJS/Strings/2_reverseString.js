// Reverse Words in a sentence
// You will be given a sentence, you task is to print the sentence such that the words are reversed in order.
// Approach: Split the sentence into words, reverse the array, and join back.

//M-1
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

// Test case
console.log(reverseWords("hello world")); // "world hello"

//M-2
function reverseString(sentence, left, right) {
    if (!sentence || sentence.length < 2) return
    while (left < right) {
        let temp = sentence[left]
        sentence = sentence.substr(0, left) + sentence[right] + sentence.substr(left + 1)
        sentence = sentence.substr(0, right) + temp + sentence.substr(right + 1)
        left++
        right--
    }
    return sentence
}

function reverseWords(sentence) {
    let left = 0
    let right = 0
    sentence = sentence.split('').reverse().join('')
    while (true) {
        while (sentence[left] === ' ') left++
        if (left >= sentence.length) break
        right = left + 1
        while (right < sentence.length && sentence[right] != ' ') right++
        sentence = reverseString(sentence, left, right - 1)
        left = right
    }
    return sentence
}

let sentence = "I love javascript";
console.log(sentence);
console.log(reverseWords(sentence));

/**
 * Time Complexity O(N)
 * Space Complexity O(1)
 */
