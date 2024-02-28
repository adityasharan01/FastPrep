// String Permutations By Changing Case

//  String Permutations By Changing Case(Letter Case Permutation)
// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create.Return the output in any order.

// Approach: Use backtracking to explore all case changes for alphabetic characters.

function stringPermutationsByChangingCase(s) {
    const permutations = [s];
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) { // Check if character is alphabetic
            const n = permutations.length;
            for (let j = 0; j < n; j++) {
                const chars = permutations[j].split('');
                chars[i] = chars[i] === chars[i].toUpperCase() ? chars[i].toLowerCase() : chars[i].toUpperCase();
                permutations.push(chars.join(''));
            }
        }
    }
    return permutations;
}

// Test case
console.log(stringPermutationsByChangingCase("a1b2")); // ["a1b2", "A1b2", "a1B2", "A1B2"]
