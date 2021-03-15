// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

// var permutationSubstring = function(str, sub) {
//     // split the strings so that array methods can be used
//     const strArray = str.split("");
//     const subArray = sub.split("");
//     // create a map to hold letters from the string
//     const strMap = {};
//     // iterate over the string and add letters to the map
//     strArray.forEach(letter => strMap[letter] = true);
//     // evaluated whether of every letter of the substring exists in the map
//     return subArray.every(letter => strMap[letter]);
// };

//without string splitting
const permutationSubstring = (str, sub) => {
    // create a map to hold the letters in the string
    const strMap = new Map();
    // iterate over the string and add letters to the map
    for(let i = 0; i < str.length; i++) {
        strMap.set(str[i],true);
    }
    // iterate over the substring and check to see if all letters are contained in the map
    for(let i = 0; i< sub.length; i++) {
        if(!strMap.has(sub[i])) {
            return false;
        }
    }
    // return true if all characters are found int he map
    return true;
}
