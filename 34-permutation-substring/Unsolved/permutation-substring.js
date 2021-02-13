// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    const strArray = str.split("");
    const subArray = sub.split("");
    const strMap = {};
    strArray.forEach(letter => strMap[letter] = true);
    return subArray.every(letter => strMap[letter]);
};
